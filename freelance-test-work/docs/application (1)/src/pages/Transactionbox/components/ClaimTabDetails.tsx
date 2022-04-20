import moment from "moment-timezone";
import React from "react";
const ClaimTabDetails = (props) => {
    const { data } = props
    return (
        <>
            <div className="detail-padding">
                <table className="table" >
                    <tr className="card-heading" data-testid="bin-h">
                        <th className="m-w-2" data-testid="claimDetails-BIN-heading" > BIN</th>
                        <th className="m-w-2" data-testid="claimDetails-PCN-heading" > PCN</th>
                        <th className="m-w-22" data-testid="claimDetails-submitDate-heading" > Submit Date</th>
                        <th className="m-w-2" data-testid="claimDetails-COB-heading" > COB</th>
                        <th data-testid="claimDetails-LocalMSG-heading" > Local Message({!!data && data.claimResponseStatus.additionalMessageInformationCount})</th>
                    </tr>
                    <tr data-testid="bin-data">
                        <td data-testid="claimDetails-BIN-value" >{!!data && data.claimRequest.header.binNumber}</td>
                        <td data-testid="claimDetails-PCN-value">{!!data && data.claimRequest.header.processorControlNumber}</td>
                        <td data-testid="claimDetails-submitDate-value">{!!data && moment.utc(data.submitDate).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format("MM/DD/YYYY")}</td>
                        <td data-testid="claimDetails-COB-value" >{!!data && data.additionalFields.cob}</td>
                        <td rowSpan={5} data-testid="message">
                            {data &&
                                <>{
                                    data.claimResponseStatus.claimResponseMessageInformations.map(msg => {
                                        return (
                                            <>
                                                {!!(msg.additionalMessageInformation) && <div className="message">
                                                    - {msg.additionalMessageInformation.replace(/.{40}/g, '$&\n')}
                                                </div>}
                                            </>
                                        );
                                    })
                                }
                                </>
                            }
                        </td>
                    </tr>
                    <br />
                    <tr className="card-heading" data-testid="rx-h">
                        <th data-testid="claimDetails-RxNumber-heading"> Rx Number</th>
                        <th data-testid="claimDetails-Refill-heading"> Refill</th>
                        <th data-testid="claimDetails-TransactionCode-heading"> Transaction Code</th>
                    </tr>
                    <tr data-testid="rx-h">
                        <td data-testid="claimDetails-RxNumber-value">{!!data && data.claimRequest.prescription.prescriptionServiceReferenceNumber}</td>
                        <td data-testid="claimDetails-Refill-value">{!!data && data.claimRequest.prescription.fillNumber}</td>
                        <td data-testid="claimDetails-TransactionCode-value">{!!data && data.claimRequest.header.transactionCode}</td>
                    </tr>
                    <br />
                    <tr className="card-heading" data-testid="pa-h">
                        <th data-testid="claimDetails-PAreasonCode-heading"> PA Reason Code</th>
                        <th data-testid="claimDetails-PAnumber-heading"> PA Number</th>
                        <th data-testid="claimDetails-claimStatus-heading"> Claim Status</th>
                        <th data-testid="claimDetails-rejectCode-heading"> Reject Code</th>
                    </tr>
                    <tr>
                        <td data-testid="claimDetails-PAreasonCode-value">{!!data && data.additionalFields.paReasonCode}</td>
                        <td data-testid="claimDetails-PAnumber-value">{!!data && data.additionalFields.paNumber}</td>
                        <td data-testid="claimDetails-claimStatus-value">{!!data && data.claimResponseStatus.transactionResponseStatus}</td>
                        <td data-testid="claimDetails-rejectCode-value">
                            {data && data.claimResponseStatus.claimResponseRejects.map((rc) => rc.rejectCode).join(" | ")}
                        </td>
                    </tr>
                </table>
            </div >
        </>
    )
}
export default ClaimTabDetails;