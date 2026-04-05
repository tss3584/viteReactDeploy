import * as React from 'react';
import GetData from '../../utils/GetData';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};  

export default function Courses({ courseID }) {
  const [loaded, setLoaded] = React.useState(false);
  const [corObj, setCorObj] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    GetData('course/courseID=' + `${courseID}`).then((json) => {
      console.log(json);
      setCorObj(json);
      setLoaded(true);
    });
  }, [courseID]);

  if (!loaded)
    return (
      <li>
        <h4>Loading…</h4>
      </li>
    );

  return (
    <li>
      <Button onClick={handleOpen}>{corObj.courseID}</Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6">{corObj.courseID}</Typography>
          <Typography sx={{ mt: 2 }}>{corObj.title}</Typography>
          <Typography sx={{ mt: 2 }}>{corObj.description}</Typography>
        </Box>
      </Modal>
    </li>
  );
}
