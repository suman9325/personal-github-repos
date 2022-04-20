import Alert from "@mui/material/Alert";
import React from "react";
const UnHappyCase = (props) => {
    const { value } = props
    return (
        <Alert className="alert-one" icon={false} severity='warning'>
            <b data-testid="Alert-unhappyCase">No Search Results for : {value}</b>
        </Alert>
    )
}
export default UnHappyCase;