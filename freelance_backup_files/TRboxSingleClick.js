import React, { useState, useEffect } from 'react'
import DataTable from "react-data-table-component";
import axios from 'axios'
import {
    FormControl,
    InputLabel,
    Input,
    Button,
    TextField,
    Typography,
    TextareaAutosize,
    Grid,
    styled
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

import { apiData } from './apiData';
import moment from 'moment';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
}));

const Transactionbox = (props) => {

    const [showMainbox, setshowMainbox] = useState(false);
    const [unhappycase, setunhappycase] = useState(false);
    const [EnterValidcase, setEnterValidcase] = useState(false);
    const [value, setValue] = useState("");
    const [claimList, setClaimList] = useState({})
    const [displayTable, setDisplayTable] = useState(false)
    const [displayDetails, setDisplayDetails] = useState(false)
    const [tabValue, setTabValue] = useState(0);
    const [checkedRows, setCheckedRows] = useState([])
    const [filterRowId, setFilterRowId] = useState(null)
    const [tabDisplay, setTabDisplay] = useState(false)

    const columns = [
        {
            id: 1,
            name: "Seq",
            // selector: (row) => <a href="#" onClick={() => this.handleFetchDetails(row)}>{row.id}</a>,
            selector: (row) => row.claimSequenceNumber,
            sortable: true,
            reorder: true,
        },
        {
            id: 2,
            name: "Member ID",
            selector: (row) => row.memberId,
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Last Name",
            selector: (row) => row.patientLastName,
            sortable: true,
            left: true,
            reorder: true
        },
        {
            id: 4,
            name: "First Name",
            selector: (row) => row.patientFirstName,
            sortable: true,
            left: true,
            reorder: true
        },
        {
            id: 5,
            name: "Submitted",
            selector: (row) => moment(row.submitted).subtract(6, "hours").format("MM/DD/YYYY hh:mm:ss A"),
            sortable: true,
            left: true,
            reorder: true,
            width: "200px"
        },
        {
            id: 6,
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            left: true,
            reorder: true
        },

    ]

    const cancel = () => {
        var value = ""
        setValue(value);
        setshowMainbox(false);
        setunhappycase(false);
        setEnterValidcase(false);
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    const check = () => {

        if (value === "") {
            setshowMainbox(false);
            setunhappycase(false);
            setEnterValidcase(false);
        } else {

            setClaimList(apiData)
            setDisplayTable(true)
            setshowMainbox(true);

            // getClaimByNumber(value).then((response) => {

            //     var fillDate = response.data.fillDate;
            //     fillDate = fillDate.split("-");
            //     var dateformatted = fillDate[1] + "/" + fillDate[2] + "/" + fillDate[0];
            //     response.data.fillDate = dateformatted;
            //     response.data.transactions.forEach(element => {
            //         var date = new Date(element.submitted);
            //         var formattedDate = moment(date).subtract(6, "hours").format("MM/DD/YYYY hh:mm:ss A");
            //         element.submitted = formattedDate;
            //     });
            //     setitem({ ...response.data, id: props.id });
            //     setshowMainbox(true);
            //     setunhappycase(false);
            //     setEnterValidcase(false);
            // })
            //     .catch(e => {

            //         setshowMainbox(false);
            //         setunhappycase(true);
            //     })
        }
    };

    const rowSelect = (row) => {
        console.log('row', row);
        setCheckedRows(row)
        setTabDisplay(true)

    }

    // useEffect(() => {
    //     console.log('rowSelect', checkedRows);
    //     setFilterRowId(checkedRows.filter(item => item.id == checkedRows[0].id))
    // }, [checkedRows])

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-title'>
                <Link underline="hover" color="inherit" href="/">
                    Home
                </Link>
                <Typography color="inherit">Claim Search</Typography>
            </Breadcrumbs>

            <div className='viewport'>
                <div className='pos-left'>
                    <Typography variant="h4" component="h4">
                        Claim Search
                    </Typography>
                    <br />
                    <TextField
                        placeholder='Claim Number'
                        onChange={handleChange}
                        value={value}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                check()
                            }
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" color="primary" onClick={() => cancel()}>
                                        <CancelIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary" size="small" onClick={() => check()}>
                        SEARCH
                    </Button>

                    {/* --------------- Unhappy case ---------- */}

                    {unhappycase ? <Alert icon={false} severity=''>
                        <b>No search Results for : {value}</b>
                    </Alert> : null}

                    {/* --------------- Invalid Case ---------- */}

                    {EnterValidcase ? <Alert icon={false} severity=''>
                        <b>Please Enter a Claim Number.</b>
                    </Alert> : null}

                    <br /> <br />
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
                                        <p>{claimList.claimNumber}</p>
                                    </CardContent>
                                </div>

                                <div className='card-width'>
                                    <CardContent>
                                        <b className='card-headings'>Current Status</b>
                                        <p>{claimList.currentStatus}</p>
                                    </CardContent>
                                </div>
                                <div className='card-width'>
                                    <CardContent>
                                        <b className='card-headings'>Fill Date</b>
                                        <p>{moment(claimList.fillDate).format("MM/DD/YYYY")}</p>

                                    </CardContent>
                                </div>
                                <div className='card-width'>
                                    <CardContent>
                                        <b className='card-headings'>Count</b>
                                        <p>
                                            <b>Paid: {claimList.paidCount}</b>
                                            <br />
                                            <b>Rejected: {claimList.rejectedCount}</b>
                                            <br />
                                            <b>Reversed: {claimList.reversedCount}</b>
                                            <br />
                                            <b>Captured: {claimList.capturedCount}</b>
                                        </p>
                                    </CardContent>
                                </div>

                            </CardContent>
                            <br />
                            <CardContent>
                                <div className='card-width'>
                                    <CardContent>
                                        <b className='card-headings'>Pharmacy Name</b>
                                        <p>{claimList.pharmacyName}</p>
                                    </CardContent>
                                </div>

                                <div className='card-width'>
                                    <CardContent>
                                        <b className='card-headings'>Pharmacy ID</b>
                                        <p>{claimList.pharmacyId}</p>
                                    </CardContent>
                                </div>

                            </CardContent>

                            {displayTable &&
                                <DataTable
                                    title="Fake Data"
                                    columns={columns}
                                    data={claimList.transaction}
                                    defaultSortFieldId={1}
                                    // pagination
                                    // selectableRows
                                    onRowClicked={(row) => rowSelect(row)}
                                />
                            }

                            {tabDisplay &&
                                <>
                                    {console.log('chechedrow', typeof (checkedRows))}
                                    <Card elevation={4}>
                                        <CardContent>
                                            <Paper square>

                                                <Tabs
                                                    value={tabValue}
                                                    textColor="primary"
                                                    indicatorColor="primary"
                                                    variant="scrollable"
                                                    scrollButtons="auto"
                                                    aria-label="scrollable auto tabs example"
                                                    onChange={(event, newValue) => {
                                                        setTabValue(newValue);
                                                    }}
                                                >
                                                    
                                                    <Tab label={"Sequence " + checkedRows.claimSequenceNumber}/>
                                                </Tabs>
                                                {/* {checkedRows.length !== 0 &&
                                                    <>
                                                        {filterRowId.map(data => (
                                                            <Box
                                                                sx={{
                                                                    width: 850,
                                                                    height: 300,
                                                                    // backgroundColor: 'primary.dark',
                                                                }}
                                                            >
                                                                <Typography variant="h6" component="h6">
                                                                    Claim
                                                                </Typography>
                                                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>BIN</b>
                                                                            <br />
                                                                            {data.title}
                                                                        </Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>PCN</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>Submitted Date</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>CDR</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={4}>
                                                                        <Item><b>Local Message</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>Rx Number</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>Refill</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={8}>
                                                                        <Item><b>Transaction Code</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={3}>
                                                                        <Item><b>PA Reason Code</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>PA Number</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>Claim Number</b></Item>
                                                                    </Grid>
                                                                    <Grid item xs={2}>
                                                                        <Item><b>Reject Code</b></Item>
                                                                    </Grid>
                                                                </Grid>
                                                            </Box>
                                                        ))
                                                        }
                                                    </>
                                                } */}
                                            </Paper>
                                        </CardContent>
                                    </Card>
                                </>

                            }

                        </Card>
                    }
                </div>
            </div>
        </>
    );
}

export default Transactionbox;
