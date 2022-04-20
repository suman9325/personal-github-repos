import React, { useState, useEffect } from 'react'
import DataTable from "react-data-table-component";
import './css/styles.css'
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
    styled,
    Divider,
    Modal
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
import moment from 'moment';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIosNewIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { apiData } from '../../common/demoApiData/apiData';
import { detailApi } from '../../common/demoApiData/detailApiData';
import UnHappyCase from '../../common/cases/UnHappyCase';
import ValidCase from '../../common/cases/ValidCase';
import Details from './components/Details';
import DisplayTable from '../../common/DisplayTable';
import ClaimTabDetails from './components/ClaimTabDetails';
import MemberTabDetails from './components/MemberTabDetails';
import ProductTabDetails from './components/ProductTabDetails';
import DisplayModal from '../../common/DisplayModal';
// import { isDaylight } from '../../common/Daylight';

const Transactionbox = (props) => {

    const [showMainbox, setshowMainbox] = useState(false);
    const [showMainboxByMemberId, setshowMainboxByMemberId] = useState(false);
    const [unhappycase, setunhappycase] = useState(false);
    const [unhappycaseByMemberId, setunhappycaseByMemberId] = useState(false);
    const [EnterValidcase, setEnterValidcase] = useState(false);
    const [EnterValidcaseByMemberId, setEnterValidcaseByMemberId] = useState(false);
    const [value, setValue] = useState("");
    const [valueByMemberId, setValueByMemberId] = useState("");
    const [claimList, setClaimList] = useState("")
    const [displayTable, setDisplayTable] = useState(false)
    const [displayTableByMemberId, setDisplayTableByMemberId] = useState(false)
    const [displayDetails, setDisplayDetails] = useState(false)
    const [tabValue, setTabValue] = useState(0);
    const [tabTypeValue, setTabTypeValue] = useState(0);
    const [checkedRows, setCheckedRows] = useState([])
    const [filterRowId, setFilterRowId] = useState(null)

    const [tabDisplay, setTabDisplay] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)

    const [detailData, setDetailData] = useState("")

    const columns = [
        {
            id: 1,
            name: "Seq",
            // selector: (row) => <a href="#" onClick={() => this.handleFetchDetails(row)}>{row.id}</a>,
            selector: (row: any) => <div data-testid="claimSequenceNumber">{row.claimSequenceNumber}</div>,
            sortable: true,
            reorder: true,
        },
        {
            id: 2,
            name: "Member ID",
            selector: (row: any) => row.memberId,
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Last Name",
            selector: (row: any) => row.patientLastName,
            sortable: true,
            left: true,
            reorder: true
        },
        {
            id: 4,
            name: "First Name",
            selector: (row: any) => row.patientFirstName,
            sortable: true,
            left: true,
            reorder: true
        },
        {
            id: 5,
            name: "Submitted",
            selector: (row: any) => moment(row.submitted).subtract(6, "hours").format("MM/DD/YYYY hh: mm:ss A"),
            // selector: (row) => {
            //     if (isDaylight(row.submitted)) {
            //         return moment(row.submitted).subtract(5, "hours").format("MM/DD/YYYY hh: mm:ss A")
            //     }
            //     else {
            //         return moment(row.submitted).subtract(6, "hours").format("MM/DD/YYYY hh: mm:ss A")
            //     }
            // },
            sortable: true,
            left: true,
            reorder: true,
            width: "200px"
        },
        {
            id: 6,
            name: "Status",
            selector: (row: any) => row.status,
            sortable: true,
            left: true,
            reorder: true
        },

    ]

    const columnsByMemberId = [
        {
            id: 1,
            name: "Fill Date",
            selector: (row: any) => moment(row.submitted).subtract(6, "hours").format("MM/DD/YYYY hh: mm:ss A"),
            sortable: true,
            reorder: true,
        },
        {
            id: 2,
            name: "Claim Number",
            selector: (row: any) => row.memberId,
            sortable: true,
            reorder: true
        },
        {
            id: 3,
            name: "Seq",
            // selector: (row) => <a href="#" onClick={() => this.handleFetchDetails(row)}>{row.id}</a>,
            selector: (row: any) => <div data-testid="claimSequenceNumber">{row.claimSequenceNumber}</div>,
            sortable: true,
            reorder: true,
        },
        {
            id: 4,
            name: "Status",
            selector: (row: any) => row.status,
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
            // axios.get("")
            //     .then((response) => {
            //         var fillDate = response.data.fillDate;
            //         fillDate = fillDate.split("-");
            //         var dateformatted = fillDate[1] + "/" + fillDate[2] + "/" + fillDate[0];
            //         response.data.fillDate = dateformatted;
            //         response.data.transactions.forEach(element => {
            //             var date = new Date(element.submitted);
            //             var formattedDate = moment(date).subtract(6, "hours").format("MM/DD/YYYY hh:mm:ss A");
            //             element.submitted = formattedDate;
            //         });
            //         // setitem({ ...response.data, id: props.id });
            //         setClaimList(response.data);
            //         setshowMainbox(true);
            //         setunhappycase(false);
            //         setEnterValidcase(false);
            //         setDisplayTable(true);
            //     })
            //     .catch(e => {

            //         setshowMainbox(false);
            //         setunhappycase(true);
            //     })
        }
    }

    //Search by Member Id funtions

    const handleChangeByMemberId = (e) => {
        setValueByMemberId(e.target.value)
    }

    const cancelByMemberId = () => {
        var valueByMemberId = ""
        setValueByMemberId(value);
        setshowMainboxByMemberId(false);
        setunhappycaseByMemberId(false);
        setEnterValidcaseByMemberId(false);
    }

    const checkByMemberId = () => {

        if (valueByMemberId === "") {
            setshowMainboxByMemberId(false);
            setunhappycaseByMemberId(false);
            setEnterValidcaseByMemberId(false);
        } else {
            setClaimList(apiData)
            setDisplayTableByMemberId(true)
            setshowMainboxByMemberId(true);

            // call api here
        }
    }

    const rowSelect = (row) => {
        console.log('row', row);
        setCheckedRows(row)
        setTabDisplay(true)
        setDisplayTable(false);
        // on success of api
        setDetailData(detailApi)

    }

    const rowSelectByMemberId = (row) => {
        console.log('row', row);
        

    }

    

    const showModal = () => {
        setIsShowModal(!isShowModal)
    }

    // Tab function -------------------------------
    function changeTabValue(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleTabChange = (event, newValue) => {
        setTabTypeValue(newValue);
        console.log(newValue);

    };


    // Tab function -------------------------------

    return (
        <>
            <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-title' >
                <Link underline="hover" color="inherit" href="/" >
                    Home
                </Link>
                {/* {tabTypeValue == 0 &&
                    <>
                        <Link underline="hover" color={showMainbox ? "inherit" : "primary"} href="/"> Claim Search </Link>
                        <Link underline="hover" color={tabDisplay ? "inherit" : "primary"} href="/" style={{display: showMainbox ? "block" :"none"}}
                         >
                               Claim Transactions
                            </Link>
                            <Link underline="hover" color="primary" href="#" style={{display: tabDisplay ? "block" :"none"}}>
                               Claim Transaction Detail
                            </Link>
                    </>
                } */}

                {tabTypeValue == 0 &&
                    <>
                        <Link underline="hover" color={showMainbox ? "inherit" : "primary"} href="/"> Claim Search </Link>
                        {showMainbox &&
                            <Link underline="hover" color={tabDisplay ? "inherit" : "primary"} href="/" >
                                Claim Transactions
                            </Link>
                        }
                        {tabDisplay &&
                            <Link underline="hover" color="primary" href="#" >
                                Claim Transaction Detail
                            </Link>
                        }
                    </>
                }

                {tabTypeValue == 1 &&
                    <>
                        <Typography color={showMainbox ? "inherit" : "primary"} > Member Id </Typography>
                    </>
                }

            </Breadcrumbs>

            <div className='viewport' >
                <div className='pos-left' >
                    <Typography variant="h4" component="h4" >
                        Claim Search
                    </Typography>
                    <br />

                    {/* Tab heading start */}

                    <div>
                        <Tabs value={tabTypeValue} onChange={handleTabChange} aria-label="basic tabs example">
                            <Tab label="Claim Number" {...changeTabValue(0)} />
                            <Tab label="Member Id" {...changeTabValue(1)} />
                        </Tabs>

                    </div>

                    {/* Tab heading end */}

                    <br /><br />

                    <div className='claim-search' style={{ display: tabTypeValue == 0 ? "block" : "none" }}>
                        <TextField
                            placeholder='Claim Number'
                            data-testid="input-field"
                            onChange={handleChange}
                            value={value}
                            onKeyPress={event => {
                                if (event.key === 'Enter') {
                                    check()
                                }
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" >
                                        <IconButton edge="end" color="primary" onClick={() => cancel()} data-testid="cancel-btn">
                                            <CancelIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),

                            }}
                        />

                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" color="primary" size="small" onClick={() => check()} data-testid="search-btn">
                            SEARCH
                        </Button>
                    </div>

                    <div className='member-search' style={{ display: tabTypeValue == 1 ? "block" : "none" }}>
                        <TextField
                            required
                            label="Member Id"
                            focused
                            variant='outlined'
                            size="small"
                            onChange={handleChangeByMemberId}
                            value={valueByMemberId}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" >
                                        <IconButton edge="end" color="primary" onClick={() => cancelByMemberId()} data-testid="cancel-btn">
                                            <CancelIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),

                            }}
                        />
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" color="primary" size="small" onClick={() => checkByMemberId()} data-testid="search-btn">
                            SEARCH
                        </Button>
                    </div>


                    {/* --------------- Unhappy case ---------- */}

                    {
                        unhappycase ?
                            <UnHappyCase value={value} />
                            : null
                    }

                    {/* --------------- Invalid Case ---------- */}

                    {
                        EnterValidcase ?
                            <ValidCase />
                            : null
                    }


                    < br />

                    <div id="claim-number-search" style={{ display: tabTypeValue == 0 ? "block" : "none" }}>
                        {
                            showMainbox &&
                            <Card sx={{ minWidth: 800, transform: 'scale(1)' }} elevation={3} data-testid="mainbox-area">
                                <CardContent>
                                    <Typography variant="h6" component="h6" >
                                        Claim Transaction Details
                                    </Typography>
                                </CardContent>

                                <Details claimList={claimList} />

                                {
                                    displayTable &&
                                    <div data-testid="data-table">
                                        <DisplayTable
                                            title="Fake Data"
                                            columns={columns}
                                            data={claimList.transaction}
                                            defaultSortFieldId={1}
                                            pagination={true}
                                            onRowClicked={(row) => rowSelect(row)}

                                        />
                                    </div>
                                }

                                {tabDisplay &&
                                    <div className='tab-display' style={{ marginTop: "25%" }}>
                                        <Card elevation={4}>
                                            <CardContent>
                                                <Paper square >

                                                    <Tabs
                                                        value={tabValue}
                                                        textColor="primary"
                                                        indicatorColor="primary"
                                                        variant="scrollable"
                                                        scrollButtons="auto"
                                                        aria-label="scrollable auto tabs example"
                                                        onChange={(event, newValue) => {
                                                            setTabValue(newValue);
                                                        }
                                                        }>
                                                        <Tab label={"Sequence " + checkedRows.claimSequenceNumber} className='card-headings' />
                                                    </Tabs>

                                                    {
                                                        checkedRows.length !== 0 &&
                                                        <>
                                                            <div className='claim detail-bg-color m-t-2'>
                                                                <div className='detail-padding'>
                                                                    <Typography variant="h6" component="h4" >
                                                                        Claim
                                                                        <button onClick={() => showModal()} className="info-btn" data-testid="show-modal">
                                                                            <InfoIcon className='card-headings' />
                                                                        </button>
                                                                    </Typography>
                                                                </div>

                                                                <ClaimTabDetails data={detailApi[0]} />

                                                            </div>

                                                            <div className='member m-t-2'>
                                                                <div className='detail-padding'>
                                                                    <Typography variant="h6" component="h4" >
                                                                        Member
                                                                        <button onClick={() => showModal()} className="info-btn" data-testid="show-modal">
                                                                            <InfoIcon className='card-headings' />
                                                                        </button>
                                                                    </Typography>
                                                                </div>

                                                                <MemberTabDetails data={detailApi[0]} />
                                                            </div>

                                                            <div className='product detail-bg-color m-t-2'>
                                                                <div className='detail-padding'>
                                                                    <Typography variant="h6" component="h4" >
                                                                        Product
                                                                        <button onClick={() => showModal()} className="info-btn" data-testid="show-modal">
                                                                            <InfoIcon className='card-headings' />
                                                                        </button>
                                                                    </Typography>
                                                                </div>
                                                                <ProductTabDetails data={detailApi[0]} />
                                                            </div>

                                                            <br />
                                                            <div className='details-footer'>
                                                                <a href='/'>
                                                                    <button className='footer-buttons'>
                                                                        <HomeIcon />
                                                                    </button>
                                                                </a>

                                                                <button className='footer-buttons' onClick={() => { setTabDisplay(false); setDisplayTable(true) }}>
                                                                    <ArrowBackIosNewIcon />
                                                                </button>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                <button className='footer-buttons'>
                                                                    <ArrowForwardIosIcon />
                                                                </button>
                                                            </div>

                                                        </>
                                                    }
                                                </Paper>
                                            </CardContent>
                                        </Card>
                                    </div>
                                }
                            </Card>
                        }
                    </div>

                    <div id="member-id-search" style={{ display: tabTypeValue == 1 ? "block" : "none" }}>
                        {
                            showMainboxByMemberId &&
                            <Card sx={{ minWidth: 800, transform: 'scale(1)' }} elevation={3} data-testid="mainbox-area">
                                {
                                    displayTableByMemberId &&
                                    <div data-testid="data-table">
                                        <DisplayTable
                                            title="Fake Data"
                                            columns={columnsByMemberId}
                                            data={claimList.transaction}
                                            defaultSortFieldId={1}
                                            pagination={true}
                                            onRowClicked={(row) => rowSelectByMemberId(row)}

                                        />
                                    </div>
                                }
                            </Card>
                        }
                    </div>
                </div>
            </div>

            {isShowModal &&
                <DisplayModal
                    open={isShowModal}
                    onClose={showModal}
                />
            }
        </>


    );
}

export default Transactionbox;

