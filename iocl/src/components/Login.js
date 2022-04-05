import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


class Login extends React.Component {

    constructor() {
        super()
        this.state = { num: "", num1: "" }
    }


    render() {
        return (
            <div id="page-wrapper" style={{ marginLeft: "25px", marginTop: "50px" }}>
                <div class="row" id="div_Scroll">
                    <div class="col-lg-12" style={{ marginTop: "1%" }}>
                        <div class="panel panel-primary">
                            <div class="panel-heading">Student Details:</div>
                            <div class="panel-body">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <div class="row">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Login;