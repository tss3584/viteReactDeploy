import { useState, useEffect } from 'react';
import GetData from '../../utils/GetData';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Courses from './Courses';

function Minors() {
  const [loaded, setLoaded] = useState(false);
  const [minorObj, setMinorObj] = useState(null);

  useEffect(() => {
    GetData('minors/').then((json) => {
      console.log(json);
      setMinorObj(json);
      setLoaded(true);
    });
  }, []);

  if (!loaded) return <h1>Loading . . .</h1>;

  return (
    <div className="minors-container">

      <Accordion>
        <AccordionSummary>
          <h2>Undergraduate Minors</h2>
        </AccordionSummary>

        <AccordionDetails>
          {minorObj.UgMinors.map((minor) => (
            <Accordion key={minor.name}>
              <AccordionSummary>
                <h3>{minor.title}</h3>
              </AccordionSummary>

              <AccordionDetails>
                <p>{minor.description}</p>

                <h4>Courses</h4>
                <ul>
                  {minor.courses.map((c) => (
                   <Courses courseID={c} />
                  ))}
                </ul>

                {minor.note && (
                  <>
                    <h4>Notes</h4>
                    <p>{minor.note}</p>
                  </>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default Minors;
