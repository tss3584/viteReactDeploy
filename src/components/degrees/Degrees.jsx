import { useState, useEffect } from 'react';
import GetData from '../../utils/GetData';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function Degrees() {
  const [loaded, setLoaded] = useState(false);
  const [degObj, setDegObj] = useState(null);

  useEffect(() => {
    GetData('degrees/').then((json) => {
      console.log(json);
      setDegObj(json);
      setLoaded(true);
    });
  }, []);

  if (!loaded) return <h1>Loading . . .</h1>;

  return (
    <div className="degrees-container">
      <Accordion>
        <AccordionSummary>
          <h2>Undergraduate Degrees</h2>
        </AccordionSummary>
        <AccordionDetails>
          {degObj.undergraduate.map((degree) => (
            <Accordion key={degree.degreeName}>
              <AccordionSummary>
                <h2>{degree.title}</h2>
              </AccordionSummary>
              <AccordionDetails>
                <p>{degree.description}</p>

                <h4>Concentrations</h4>
                <ul>
                  {degree.concentrations.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Start graduate if check stuff */}
      <Accordion>
        <AccordionSummary>
          <h2>Graduate Degrees</h2>
        </AccordionSummary>
        <AccordionDetails>
          {degObj.graduate.map((degree) => {
            // Call this first so next logic doesnt occur if true
            if (degree.availableCertificates) {
              return (
                <Accordion key="certificates">
                  <AccordionSummary>
                    <h2>Graduate Advanced Certificates</h2>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      {degree.availableCertificates.map((cert) => (
                        <li key={cert}>{cert}</li>
                      ))}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              );
            }

            return (
              <Accordion key={degree.degreeName}>
                <AccordionSummary>
                  <h2>{degree.title}</h2>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{degree.description}</p>

                  <h4>Concentrations</h4>
                  <ul>
                    {degree.concentrations.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

export default Degrees;
