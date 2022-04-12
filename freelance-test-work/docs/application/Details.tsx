import React from 'react'
const Details = (props) => {
    const { claimList } = props
    return (
        <>
            <div className="initial-padding">
                <table className="table" data-testid="Details">
                    {/* <thead className="Detailstable-1-head" data-testid="DetailstableHead1"> */}
                        <tr className="card-heading">
                            <th className="m-w-2" data-testid="TransactionCard-claimNumber-heading">Claim Number</th>
                            <th className="m-w-2" data-testid="claim-status-heading">Current Status</th>
                            <th className="m-w-2" data-testid="claim-fillDate-heading">Fill Date</th>
                            <th data-testid="claim-count-heading">Count</th>
                            <th> {' '}</th>
                        </tr>
                    {/* </thead> */}
                    <tbody className="Detailstable-1-body" data-testid="DetailstableBody1">
                        <tr>
                            <td data-testid="TransactionCard-claimNumber">{!!claimList && claimList.claimNumber}</td>
                            <td data-testid="claim-current-status">{!!claimList && claimList.currentStatus}</td>
                            <td data-testid="claim-fillDate">{!!claimList && claimList.fillDate}</td>
                            <td rowSpan={3}>
                                <b data-testid="claim-paid-count" >Paid:{!!claimList && claimList.paidCount}</b>
                                <br />
                                <b data-testid="claim-rejected-count">Rejected:{!!claimList && claimList.rejectedCount}</b>
                                <br />
                                <b data-testid="claim-reversed-count">Reversed:{!!claimList && claimList.reversedCount}</b>
                                <br />
                                <b data-testid="claim-captured-count">Captured:{!!claimList && claimList.capturedCount}</b>
                                <br />
                            </td>
                            <td>{' '}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <table className="table" data-testid="Detailstable2">
                    <thead className="Detailstable-2-head" data-testid="DetailstableHead2">
                        <tr className="card-heading">
                            <th data-testid="claim-pharmacyId-heading">Pharmacy ID</th>
                            <th data-testid="claim-pharmacy-name-title">Pharmacy Name</th>
                        </tr>
                    </thead>
                    <tbody className="Detailstable-2-body" data-testid="DetailstableBody2">
                        <tr>
                            <td data-testid="claim-pharmacyId">{!!claimList && claimList.pharmacyId}</td>
                            <td data-testid="claim-pharmacyname">{!!claimList && claimList.pharmacyName}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default Details;