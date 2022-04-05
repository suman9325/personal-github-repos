import React from 'react'
import DataTable from "react-data-table-component";
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

import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Box from '@mui/material/Box';

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";

const showMainbox = true

class Transactionbox1 extends React.Component {

    state = {
        userData: [],
        columns: [
            {
                id: 1,
                name: "Seq",
                selector: (row) => <a href="#" onClick={() => this.handleFetchDetails(row.title)}>{row.userId}</a>,
                sortable: true,
                reorder: true
            },
            {
                id: 2,
                name: "Member ID",
                selector: (row) => row.id,
                sortable: true,
                reorder: true
            },
            {
                id: 3,
                name: "Last Name",
                selector: (row) => row.title,
                sortable: true,
                left: true,
                reorder: true
            },
            {
                id: 4,
                name: "First Name",
                selector: (row) => row.title,
                sortable: true,
                left: true,
                reorder: true
            },
            {
                id: 5,
                name: "Submitted",
                selector: (row) => row.title,
                sortable: true,
                left: true,
                reorder: true
            },
            {
                id: 6,
                name: "Status",
                selector: (row) => row.title,
                sortable: true,
                left: true,
                reorder: true
            },

        ],
        displayTable: true,
        displayDetails: false,
        value: 0
    }

    handleFetchDetails = (id) => {
        this.setState({ displayTable: false, displayDetails: true })
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({ userData: res.data })
                // console.log(res.data);
            })
            .catch(err => {

            })
    }

    cancel = () => {
        console.log('cancel');
    }

    check = () => {
        console.log('check');
    }

    handleChange = () => {
        this.setState({ value: 1 })
    }

    render() {
        return (
            <>
                <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-title'>
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="text.primary">Claim Search</Typography>
                </Breadcrumbs>

                <div className='viewport'>
                    <div className='pos-left'>
                        <Typography variant="h4" component="h4">
                            Claim Search
                        </Typography>
                        <br />
                        <TextField
                            placeholder='Claim Number'
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    this.check()
                                }
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton edge="end" color="primary" onClick={() => this.cancel()}>
                                            <CancelIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" color="primary" size="small" onClick={this.check}>
                            SEARCH
                        </Button>
                        {/* --------------- Unhappy case ---------- */}

                        {/* {unhappycase ? <Alert icon={false} severity=''>
                            <b>No search Results for : 4445454545</b>
                        </Alert> : null} */}

                        {/* --------------- Invalid Case ---------- */}

                        {/* {EnterValidcase ? <Alert icon={false} severity=''>
                            <b>Please Enter a Claim Number.</b>
                        </Alert> : null} */}

                        <br /><br />

                        {showMainbox &&
                            <Card sx={{ minWidth: 400, transform: 'scale(1)' }} elevation={3}>
                                <CardContent>
                                    <Typography variant="h6" component="h6">
                                        Claim Transaction Details
                                    </Typography>
                                </CardContent>

                                <CardContent>
                                    <div className='card-width'>
                                        <CardContent>
                                            <b className='card-headings'>Claim Number</b><br />
                                            <p>4444444</p>
                                        </CardContent>
                                    </div>

                                    <div className='card-width'>
                                        <CardContent>
                                            <b className='card-headings'>Current Status</b>
                                            <p>P</p>
                                        </CardContent>
                                    </div>
                                    <div className='card-width'>
                                        <CardContent>
                                            <b className='card-headings'>Fill Date</b>
                                            <p>15/12/2021</p>
                                        </CardContent>
                                    </div>
                                    <div className='card-width'>
                                        <CardContent>
                                            <b className='card-headings'>Count</b>
                                            <p>
                                                <b>Paid:</b>
                                                <br />
                                                <b>Rejected:</b>
                                                <br />
                                                <b>Reversed:</b>
                                                <br />
                                                <b>Captured:</b>
                                            </p>
                                        </CardContent>
                                    </div>

                                </CardContent>
                                <br />
                                <CardContent>
                                    <div className='card-width'>
                                        <CardContent>
                                            <b className='card-headings'>Pharmacy Name</b>
                                            <p>XYZ</p>
                                        </CardContent>
                                    </div>

                                    <div className='card-width'>
                                        <CardContent>
                                            <b className='card-headings'>Pharmacy ID</b>
                                            <p>XYZ1234</p>
                                        </CardContent>
                                    </div>

                                </CardContent>

                                {this.state.displayTable &&
                                    <DataTable
                                        title="Fake Data"
                                        columns={this.state.columns}
                                        data={this.state.userData}
                                        defaultSortFieldId={1}
                                        pagination
                                    // selectableRows
                                    />
                                }

                                <Card>
                                    <CardContent>
                                        {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                                            <TabContext value={this.state.value}>
                                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                    <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                                                        <Tab label="Item One" value="1" />
                                                    </TabList>
                                                </Box>
                                                <TabPanel value="1">Item One</TabPanel>
                                            </TabContext>
                                        </Box> */}
                                        <Paper square>
                                    <Tabs
                                        value={1}
                                        textColor="primary"
                                        indicatorColor="primary"
                                        // onChange={(event, newValue) => {
                                        //     setValue(newValue);
                                        // }}
                                    >
                                        <Tab label="Active TAB One" />
                                        <Tab label="Active TAB Two" />
                                        <Tab label="Disabled TAB!" disabled />
                                        <Tab label="Active Tab Three" />
                                    </Tabs>
                                    <h3>TAB NO: {'value'} clicked!</h3>
                                </Paper>
                                    </CardContent>
                                </Card>

                                

                            </Card>
                        }
                    </div>
                </div>

            </>
        );
    }
}

export default Transactionbox1;
