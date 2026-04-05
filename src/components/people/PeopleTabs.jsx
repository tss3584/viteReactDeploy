import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {useState, useEffect} from 'react'
import GetData from '../../utils/GetData';
import "./people.css"
import PeopleGroup from './PeopleGroup';


function PeopleTabs() {
    const [loaded, setLoaded] = useState(false);
    const [pepObj, setPepObj] = useState();

    useEffect(()=>{
        GetData('people/').then((json)=>{
            console.log(json);
            setLoaded(true);
            setPepObj(json);
        })
    },[]);
    if(!loaded) return <h1>Loading . . .</h1>
  return (
    <Tabs
      defaultActiveKey="faculty"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="faculty" title="Faculty">        
            <PeopleGroup peopleData={pepObj.faculty}/>
        </Tab>
      <Tab eventKey="staff" title="Staff">
            <PeopleGroup peopleData={pepObj.staff}/>
     </Tab>
    </Tabs>
  );
}

export default PeopleTabs;