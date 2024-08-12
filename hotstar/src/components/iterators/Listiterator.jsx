import React from "react";
const Listiterator=({data})=>{
    console.log(data);
    return (
        <ul>
            {
                data.map((ele)=>{
                    return(
                        <li id={ele}><a href="">{ele}</a></li>
                    )
                })
            }
        </ul>
    )
}
export default Listiterator    