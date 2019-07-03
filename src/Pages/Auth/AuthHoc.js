import React from "react";

const AuthHoc = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <WrappedComponent passs={true}/>
            )
        }
    }
}

export default AuthHoc
