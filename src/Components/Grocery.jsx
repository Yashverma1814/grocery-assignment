import React from "react";
import Groceryinpt from "./Groceryinpt";
import Grocerylist from "./Grocerylist";
import { v4 as uuid } from 'uuid';
 
const Grocery = () => {

    const [data,setData] = React.useState([]);

    const handleAdd = (title) =>{
        const payload = {
            title,
            status: false,
            id: uuid()
        }

        setData([ ...data, payload]);
    }
    return(
        <div>
            <Groceryinpt handleClick = {handleAdd}/>
            {data.map((item) => (
                <Grocerylist {...item}/>
            ))
            }
        </div>
    )
}

export default Grocery;