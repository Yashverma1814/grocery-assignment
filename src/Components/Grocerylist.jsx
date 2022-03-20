import React from "react";

const Grocerylist = ({title, status, id}) => {
    return(
        <div>
            <h1>{title}</h1>
            <h3>{status ? "Completed" : "Not Completed"}</h3>
        </div>
    )
}

export default Grocerylist;