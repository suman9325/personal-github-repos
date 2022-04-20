import React, { useState } from "react";
import moment from "moment-timezone";
import { getClaimByNumber, getClaimDetails } from '../../Services/ClaimAPI';
import { Button, TextField, Typography } from "@material-ui/core";
import InputAdornment from '@mui/material/InputAdornment';
import HomeIcon from '@material-ui/icons/Home';
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import IconButton from "@mui/material/IconButton";
import CancelIcon from '@material-ui/icons/Cancel';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from '@mui/material/Link';
import Tab from '@material-ui/core/Tab';
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import InfoIcon from '@material-ui/icons/Info';
import UnHappyCase from "../../common/cases/UnHappyCase";
import DisplayModal from "../../common/DisplayModal";
import ValidCase from "../../common/cases/ValidCase";
import DisplayTable from "../../common/DisplayTable";
import ClaimTabDetails from "./components/ClaimTabDetails";
import Details from './components/Details';
import MemberTabDetails from "./components/MemberTabDetails";
import ProductTabDetails from "./components/ProductTabDetails";
import './css/styles.css';
const Transactionbox = (props) => {
    const [showMainbox, setshowMainbox] = useState(false);
    const [unhappycase, setunhappycase] = useState(false);
    const [EnterValidcase, setEnterValidcase] = useState(false);
    const [value, setValue] = useState("");
    const [claimList, setClaimList] = useState(null)
    const [displayTable, setDisplayTable] = useState(null)
    const [tabValue, setTabValue] = useState(0);
    const [tabTypeValue, setTabTypeValue] = useState(0);
    const [checkedRows, setCheckedRows] = useState(null)
    const [tabDisplay, setTabDisplay] = useState(false)
    const [isShowModal, setIsShowModal] = useState(false)
    const [detailData, setDetailData] = useState([])
    const [error, setError] = useState("")

    const columns = [
        {
            id: 1,
            name: "Seq",
            selector: (row) => row.claimSequenceNumber,
            sortable: true,
        },
        {
            id: 2,
            name: "Member ID",
            selector: (row) => row.memberId,
            sortable: true,
        },
        {
            id: 3,
            name: "Last Name",
            selector: (row) => row.patientLastName,
            sortable: true,
        },
        {
            id: 4,
            name: "First Name",
            selector: (row) => row.patientFirstName,
            sortable: true,
        },
        {
            id: 5,
            name: "Submitted",
            selector: (row) => moment.utc(row.submitted).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("MM/DD/YYYY hh:mm:ss A"),
            sortable: true,
            width: "200px"
        },
        {
            id: 6,
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
        },
    ]
    const cancel = () => {
        var inputValue = ""
        setValue(inputValue);
        setshowMainbox(false);
        setunhappycase(false);
        setEnterValidcase(false);
        setTabDisplay(false);
        setDisplayTable(false);
    }
    const handleChange = (e: any) => {
        if (/^\d+$/g.test(e.target.value) || e.target.value === "") {
            setValue(e.target.value)
            if (e.target.value !== "") {
                setEnterValidcase(false);
                setunhappycase(false);
            }
            if (e.target.value === "") {
                setshowMainbox(false);
                setEnterValidcase(false);
                setTabDisplay(false);
                setDisplayTable(false);
                setunhappycase(false);
            }
        }
    }
    const check = () => {
        if (value === "") {
            setshowMainbox(false);
            setunhappycase(false);
            setEnterValidcase(true);
        } else {
            getClaimByNumber(value).then((response: any) => {
                var fillDate = response.data.fillDate;
                fillDate = fillDate.split("-");
                var dateformatted = fillDate[1] + "/" + fillDate[2] + "/" + fillDate[0];
                response.data.fillDate = dateformatted;
                setClaimList(response.data);
                setshowMainbox(true);
                setunhappycase(false);
                setEnterValidcase(false);
                setDisplayTable(true);
                setTabDisplay(false);
            })
                .catch((e) => {
                    setshowMainbox(false);
                    setunhappycase(true);
                    setEnterValidcase(false);
                    setTabDisplay(false);
                    setDisplayTable(false);
                })
        }
    }
    const rowSelect = (row) => {
        setCheckedRows(row)
        setTabDisplay(true)
        setDisplayTable(false)
        let claimSequenceNumber = [row.claimSequenceNumber]
        getClaimDetails(value, claimSequenceNumber)
            .then(response => {
                setDetailData(response.data)
            })
            .catch(err => {
                setError(err)
            })
    }
    const showModal = () => {
        setIsShowModal(!isShowModal)
    }
    function changeTabValue(index) {
        return {
            id: `simple-tab-${index}`,
        };
    }
    const handleTabChange = (event, newValue) => {
        setTabTypeValue(newValue);

    }
    return (
        <>
            <div data-testid="Transaction">
                <div className="breadcrumb-h" data-testid="navigation-heading">
                    <Breadcrumbs aria-label="breadcrumb" className='breadcrumb-title' data-testid="navigation-home">
                        <Link underline='hover' color="#008290" href="/">
                            Home
                        </Link>
                        {tabTypeValue === 0 &&
                            <>
                                <Link data-testid="navigation-claimSearch" underline="hover" color="#008290" href="/">Claim Search</Link>
                                {showMainbox &&
                                    <>
                                        {" "}/{" "}
                                        <Link underline="hover" color="#008290" href="#" onClick={() => {
                                            setTabDisplay(false); setDisplayTable(true);
                                        }}>
                                            Claim Transactions
                                        </Link>
                                    </>

                                }
                                {tabDisplay &&
                                    <>
                                        {" "}/{" "}
                                        <Link underline="hover" color="#008290" href="#" >
                                            Claim Transaction Details
                                        </Link>
                                    </>
                                }
                            </>
                        }
                        {tabTypeValue === 1 &&
                            <>
                                <Link underline="hover" color="#008290"> Member Id</Link>
                            </>
                        }
                    </Breadcrumbs>
                </div>
                <div className="viewport">
                    <div className="pos-left">
                        <Typography variant="h4" component="h4" data-testid="claimSearch-heading">
                            {tabTypeValue === 0 ? ' Claim Search' : 'Member ID Search'}
                        </Typography>
                        <br />
                        <div>
                            <Tabs value={tabTypeValue} onChange={handleTabChange} aria-label="basic tabs example" >
                                <Tab label="Claim Number" className={tabTypeValue === 0 ? "tab-heading" : ""} {...changeTabValue(0)} />
                                <Tab label="Member Id" className={tabTypeValue === 1 ? "tab-heading" : ""}  {...changeTabValue(1)} />
                            </Tabs>
                        </div>
                        <br /><br />
                        <div className='claim-search' style={{ display: tabTypeValue === 0 ? "block" : "none" }}>
                            <TextField
                                inputProps={{ 'data-testid': 'claim-search-input' }}
                                className="search-box"
                                placeholder='Claim Number'
                                data-testid="claimNumber-search"
                                onChange={handleChange}
                                variant="outlined"
                                size="small"
                                value={value}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        check()
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" className="cross-btn">
                                            <IconButton className="cancel-btn" data-testid="cancel-btn" edge="end" color="primary" onClick={() => cancel()}>
                                                <CancelIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }} />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button data-testid="claimSearch-button" className="search-button" variant="contained" color="primary" size="medium" onClick={() => check()}>
                                SEARCH
                            </Button>
                        </div>
                        <div className='member-search' style={{ display: tabTypeValue === 1 ? "block" : "none" }}>
                            <TextField
                                required
                                label="Member Id"
                                className="search-box"
                                data-testid="memberID-search"
                                focused
                                variant="outlined"
                                size="small"
                                onChange={handleChange}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        check()
                                    }
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" className="cross-btn">
                                            <IconButton className="cancel-btn" data-testid="memberCancel-btn" edge="end" color="primary" onClick={() => cancel()}>
                                                <CancelIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button data-testid="memberSearch-button" className="search-button" variant="contained" color="primary" size="medium" onClick={() => check()}>
                                SEARCH
                            </Button>
                        </div>
                        <br /> <br />
                        {unhappycase ? <UnHappyCase value={value} /> : null}
                        {EnterValidcase ? <ValidCase /> : null}
                        {error !== "" && <p>Error Occured</p>}
                        <br />
                        <div className='claim-search' id="claim-number-search" style={{ display: tabTypeValue === 0 ? "block" : "none" }} data-testid="claimNumber-Search" >
                            {showMainbox &&
                                <>
                                    <Card sx={{ minWidth: 600, transform: 'scale(1)' }} elevation={15} data-testid="mainbox-area">
                                        <CardContent>
                                            <b> <h4>
                                                {tabDisplay ? ' Claim Transactions - Details' : 'Claim Transactions'} </h4>
                                            </b>
                                        </CardContent>
                                        <Details claimList={claimList} />
                                        {displayTable &&
                                            <div className="claim-table" data-testid="data-table">
                                                <DisplayTable
                                                    columns={columns}
                                                    data={claimList.transactions}
                                                    defaultSortFieldId={1}
                                                    onRowClicked={(row) => rowSelect(row)}
                                                    highlightOnHover={true}
                                                    pointerOnHover={true}
                                                />
                                            </div>
                                        }
                                        <br />
                                        <div className="detail-tab-view">
                                            {tabDisplay &&
                                                <div className="detail-tabs">
                                                    <CardContent className="tab-details">
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
                                                                }}>
                                                                <Tab label={"Sequence " + checkedRows.claimSequenceNumber} className='card-heading' />
                                                            </Tabs>
                                                            {
                                                                checkedRows.length !== 0 &&
                                                                <>
                                                                    <div className="claim detail-bg-color m-t-2">
                                                                        <div className="detail-padding">
                                                                            <Typography variant="h6" component="h4" data-testid="claimDetails-heading"  >
                                                                                Claim
                                                                                <button onClick={() => showModal()} className="info-btn" data-testid="show-modal" >
                                                                                    <InfoIcon className="card-heading" />
                                                                                </button>
                                                                            </Typography>
                                                                        </div>
                                                                        <ClaimTabDetails data={detailData[0]} />
                                                                    </div>
                                                                    <div className="member m-t-2">
                                                                        <div className="detail-padding">
                                                                            <Typography variant="h6" component="h4" data-testid="Member-heading" >
                                                                                Member
                                                                                <button onClick={() => showModal()} className="info-btn" data-testid="show-modal">
                                                                                    <InfoIcon className="card-heading" />
                                                                                </button>
                                                                            </Typography>
                                                                        </div>
                                                                        <MemberTabDetails data={detailData[0]} />
                                                                    </div>
                                                                    <div className="product detail-bg-color m-t-2">
                                                                        <div className="detail-padding">
                                                                            <Typography variant="h6" component="h4" data-testid="Product-heading">
                                                                                Product
                                                                                <button onClick={() => showModal()} className="info-btn" data-testid="show-modal">
                                                                                    <InfoIcon className="card-heading" />
                                                                                </button>
                                                                            </Typography>
                                                                        </div>
                                                                        <ProductTabDetails data={detailData[0]} />
                                                                    </div>
                                                                    <br />
                                                                    <div className="details-footer">
                                                                        <a href="/">
                                                                            <button className="footer-buttons" data-testid="footer-homeIcon">
                                                                                <HomeIcon />
                                                                            </button>
                                                                        </a>
                                                                        &nbsp;
                                                                        <button className="footer-buttons" onClick={() => {
                                                                            setTabDisplay(false); setDisplayTable(true)
                                                                        }} data-testid="footer-backIcon">
                                                                            <ArrowBackIos />
                                                                        </button>
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        <button className="footer-buttons" data-testid="footer-forwardIcon">
                                                                            <ArrowForwardIos />
                                                                        </button>
                                                                    </div>
                                                                    <br />

                                                                </>
                                                            }
                                                        </Paper>
                                                    </CardContent>
                                                </div>
                                            }
                                        </div>
                                    </Card>
                                </>
                            }
                        </div>

                        <div className='member-search' id="member-id-search" style={{ display: tabTypeValue === 1 ? "block" : "none" }} data-testid="memberId-Search">

                        </div>
                    </div>
                </div>
                {isShowModal &&
                    <DisplayModal
                        open={isShowModal}
                        onClose={showModal}
                    />
                }
            </div>
        </>
    );
}
export default Transactionbox;
