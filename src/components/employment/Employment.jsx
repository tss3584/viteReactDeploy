import {useState, useEffect} from 'react'
import GetData from '../../utils/GetData.js';

import CoopTable from './COOPtable.jsx';
import DegreeStats from './DegreeStats.jsx';

        
export default function Employment() {
    const [loaded, setLoaded] = useState(false);
    const [employmentObj, setEmploymentObj] = useState();

    useEffect(()=>
    {
        GetData('employment/').then((json)=>
        {
            setEmploymentObj(json);
            setLoaded(true);
        })
    },[]);
    if (!loaded) return <h1>Loading ... </h1>
    return (
<div
    style={{
        maxWidth: "900px",
        maxHeight: "900px",
        margin: "0 auto",
        overflowX: "auto",
        maxHeight: "600px",
        paddingRight: "1rem"
    }}
>
    <DegreeStats employmentObj={employmentObj}/>
    <h2>{employmentObj.introduction.title}</h2>

    {employmentObj.introduction.content.map((item, index) => (
        <div key={index} style={{ marginBottom: "1.5rem" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <hr />
        </div>
    ))}

    <div style={{ marginTop: "2rem" }}>
        <CoopTable coopTable={employmentObj.coopTable} />
    </div>
</div>


    )
}