

export default function DegreeStats({employmentObj}){
return(
    <div>
        <h3>{employmentObj.degreeStatistics.title}</h3>
        {employmentObj.degreeStatistics.statistics.map((item)=>{
            return(
            <div>
            <h4>{item.value}</h4>
            <p>{item.description}</p>
            </div>
            );
        })}
    </div>
)
}