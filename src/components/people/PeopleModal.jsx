import * as React from 'react';
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

export default function PeopleModal(prop) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="imgWrap" onClick={handleOpen}>
        <img src={prop.imagePath} alt="person" onClick={handleOpen}/>
      </div>
      <Button onClick={handleOpen}>{prop.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {prop.name}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {prop.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Office: {prop.office}
          </Typography>
          {/* Show only if they have a website */}
          { prop.website &&
          <Typography sx={{ mt: 1 }}>
            Website: <a href={prop.website} target="_blank">My Site</a>
          </Typography>
          }
          
        </Box>
      </Modal>
    </div>
  );
}
