import { useState } from "react";
function NameInput(){
    const [name,setName]=useState(0)
    return (
        <div>
            <h3>Your Name: {name} </h3>
            <input 
            
                type='text'
                placeholder="Enter Name!"
                onChange={(e)=>{
                        setName(e.target.value)

                    }
                }
                ></input>

        </div>
    )
}
export default NameInput