import Box from '@mui/material/Box';
import {
    Typography,
    Modal
} from "@material-ui/core";
const DisplayModal = (props) => {
    const { open,
        onClose 
    } = props
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" data-testid='modal-h'>
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} data-testid='modal-content'>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default DisplayModal;