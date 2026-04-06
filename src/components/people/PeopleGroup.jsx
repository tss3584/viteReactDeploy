import PeopleModal from "./PeopleModal";

const PeopleGroup = ({peopleData})=>{
    return(
        <div>
            {/* We need to display this group of people*/}
            <div className="peopleList">
                {peopleData.map((p)=>
                    <div className="peopleListItem">
                        <PeopleModal {...p}/>
                    </div>
                )}
            </div>
        </div>
    )



}

export default PeopleGroup;