import React from "react";
const Cards=({data})=>{ 
    //Object Destructuring
    let {username,image_url}=data

    return (
        <div className='cards' title={username}>
            <div className="image">
                <img src={image_url} alt={username}/>
            </div>
                {/* <p className="text">{username}</p> */}
        </div>
    )

}
export default Cards