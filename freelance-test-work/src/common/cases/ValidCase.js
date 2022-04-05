import Alert from '@mui/material/Alert';

const ValidCase = (props) => {

    return (
        <Alert icon={false} severity="error" >
            <b data-testid="valid-case">Please Enter a Claim Number.</b>
        </Alert>
    )
}

export default ValidCase;