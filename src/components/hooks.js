import React ,{useState} from 'react'

function Hooks() {
const [name, setName]=useState("mounika");
const [age,setAge]=useState(21);
    return (
        <div>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <p>{age}</p>
                <button type="button" className="btn btn-xs btn-primary" onClick={()=>setAge(age+1)}>click</button>
            </div>
        </div>
    )
}

export default Hooks;
