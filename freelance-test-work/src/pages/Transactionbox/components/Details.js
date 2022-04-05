import CardContent from '@mui/material/CardContent';
const Details = (props) => {
const {claimList} = props
    return (
        <>
            <CardContent >
                <div className='card-width' >
                    <CardContent>
                        <b className='card-headings' data-testid="claim-h"> Claim Number </b><br />
                        <p data-testid="detail-data">{claimList.claimNumber} </p>
                    </CardContent>
                </div>

                <div className='card-width' >
                    <CardContent>
                        <b className='card-headings'  data-testid="status-h"> Current Status </b>
                        <p data-testid="detail-data"> {claimList.currentStatus} </p>
                    </CardContent>
                </div>
                <div className='card-width' >
                    <CardContent>
                        <b className='card-headings'  data-testid="date-h"> Fill Date </b>
                        < p data-testid="detail-data"> {claimList.fillDate} </p>
                    </CardContent>
                </div>
                <div className='card-width' >
                    <CardContent>
                        <b className='card-headings'  data-testid="count-h"> Count </b>
                        <p data-testid="detail-data">
                            <b>Paid: {claimList.paidCount} </b>
                            < br />
                            <b>Rejected: {claimList.rejectedCount} </b>
                            < br />
                            <b>Reversed: {claimList.reversedCount} </b>
                            < br />
                            <b>Captured: {claimList.capturedCount} </b>
                        </p>
                    </CardContent>
                </div>

            </CardContent>
            < br />
            <CardContent>
                <div className='card-width' >
                    <CardContent>
                        <b className='card-headings'  data-testid="pharmacy-h"> Pharmacy Name </b>
                        < p data-testid="detail-data"> {claimList.pharmacyName} </p>
                    </CardContent>
                </div>

                < div className='card-width' >
                    <CardContent>
                        <b className='card-headings' data-testid="pharmacy-id-h" > Pharmacy ID </b>
                        < p data-testid="detail-data"> {claimList.pharmacyId} </p>
                    </CardContent>
                </div>

            </CardContent>
        </>
    )
}

export default Details