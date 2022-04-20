import Box from "@mui/material/Box"
import {
    Modal,
    Typography
} from "@material-ui/core"
import React from "react";
const DisplayModal = (props) => {
    const { open, onClose
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
                    bgcolor: 'red',
                    color: 'white',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" data-testid ="modal-h">
                        Details about the Sequence
                    </Typography>
                    <Typography id="modal-modal-description" data-testid ="modal-content" >
                        All of the rich details known about this Sequence: [subcategory]
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}
export default DisplayModal;