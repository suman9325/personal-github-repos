import Alert from "@mui/material/Alert";
import React from "react";
const ValidCase = (props) => {
  
    return(
<Alert className="alert-two" icon={false} severity='warning'>
    <b data-testid="Alert-validCase"> Please Enter a Claim Number.</b>
</Alert>
    )
}
export default ValidCase;