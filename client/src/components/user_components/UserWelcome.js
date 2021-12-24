import React from "react";


const UserWelcome = ( props ) => {

    return (
        <p>
            Welcome, {`${props.userName}`}
        </p>
    )
}


export default UserWelcome