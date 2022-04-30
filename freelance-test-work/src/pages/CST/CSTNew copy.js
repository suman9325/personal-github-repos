import React from 'react'
import './css/styles.css'
import axios from 'axios'
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Typography,
  TextareaAutosize
} from "@material-ui/core";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';




class CST extends React.Component {

  state = {
    cst_input_data: "",
    cst_response_data: "",
  }

  handleClear = (e) => {
    this.setState({ cst_input_data: "", cst_response_data: "" })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("cst_input_data", this.state.cst_input_data);
    axios.post('https://myrelo.us/stagingmicro/microsolApi/api/authenticate', this.state.cst_input_data)
      .then(res => {
        this.setState({ cst_response_data: res.data.message })
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <>
        <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-title'>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">CST</Typography>
        </Breadcrumbs>
        
        <div className='viewport'>
          <div className='pos-left'>
            <Typography variant="h4" component="h4" data-testid="input-h">
              CST Input Data
            </Typography>
            <br />
            <Typography variant="h6" component="h6" data-testid="request-h">
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
              data-testid="text-area"
            />
          </FormControl>

          <div className='pos-left'>
            <div className='clr-btn'>
              <Button variant="contained" color="" size="medium" onClick={this.handleClear} data-testid="clear-btn">
                Clear
              </Button>
            </div>
            <div>
              <Button variant="contained" color="primary" size="medium" onClick={this.handleSubmit} data-testid="send-btn">
                Send
              </Button>
            </div>

          </div>

          <div className='pos-left response'>
            <br />
            <Typography variant="h6" component="h6" data-testid="response-h">
              Response Data
            </Typography>
          </div>
          <FormControl margin="normal" fullWidth>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Response Data"
              rows={5}
              cols={20}
              name="cst_response_data"
              value={this.state.cst_response_data}
              data-testid="response-area"
            />
          </FormControl>
        </div>

      </>
    );
  }
}

export default CST;
