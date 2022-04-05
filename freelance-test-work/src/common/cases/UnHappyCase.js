import Alert from '@mui/material/Alert';

const UnHappyCase = (props) => {

    const {value} = props
    return (
        <Alert icon={false} severity="error" >
            <b data-testid="unhappy-case">No search Results for : {value} </b>
        </Alert>
    )
}

export default UnHappyCase;