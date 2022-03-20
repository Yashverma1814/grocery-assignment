import React from "react";


const Groceryinpt = ({handelClick}) => {

    const [title,setTitle] = React.useState("")
    
    return(
        <div>
            <input 
            placeholder="Add Groceries"
            value = {title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <button onClick={()=>handelClick(title)}>ADD</button>
        </div>
    )
}

export default Groceryinpt;