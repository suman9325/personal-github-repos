import React from "react";
import { addMasterRouterResponse } from '../../Services/MasterRouterAPI';
import { FormControl, Button, Typography, TextareaAutosize, Breadcrumbs, Link } from "@material-ui/core";
import './css/styles.css';
class CST extends React.Component {
    state = {
        cst_input_data: "",
        cst_response_data: ""
    }
    handleClear = (e) => {
        this.setState({ cst_input_data: "", cst_response_data: "" })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        addMasterRouterResponse(this.state.cst_input_data).then((responseData) => { this.setState({ cst_response_data: responseData }) })
    }
    render() {
        return (
            <>
                <div>
                    <div className="breadcrumb-h">
                        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-title'>
                            <Link underline='hover' color="inherit" href="/">
                                Home
                            </Link>
                            <Typography color="primary">CST</Typography>
                        </Breadcrumbs>
                    </div>
                    <div className="viewport">
                        <div className="pos-left">
                            <Typography variant="h4" component="h4" data-testid="input-h">
                                CST Input Data
                            </Typography>
                            <br />
                            <Typography variant="h6" color="initial" data-testid="request-h">
                                Request Data
                            </Typography>
                        </div>
                        <FormControl margin="normal" fullWidth>
                            <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="Enter Request Data"
                                rows={5}
                                cols={20}
                                onChange={this.handleChange}
                                name="cst_input_data"
                                value={this.state.cst_input_data}
                            />
                        </FormControl>
                        <div className="pos-left">
                            <div className="clr-btn" data-testid="clear-h">
                                <Button variant="contained" color="primary" size="medium" onClick={this.handleClear} data-testid="clear-btn">
                                    Clear
                                </Button>
                            </div>
                            <div>
                                <Button variant="contained" color="primary" size="medium" onClick={this.handleSubmit} data-testid="send-btn">
                                    Send
                                </Button>
                            </div>
                        </div>
                        <div className="pos-left response">
                            <br />
                            <Typography variant="h6" component="h6" data-testid="response-h">
                                Response Data
                            </Typography>
                        </div>
                        <FormControl margin="normal" fullWidth>
                            <TextareaAutosize
                                aria-label="empty text area"
                                placeholder=" Response Data"
                                rows={5}
                                cols={20}
                                name="cst_response_data"
                                value={this.state.cst_response_data}
                            />
                        </FormControl>
                    </div>
                </div>
            </>
        );
    }
}
export default CST;