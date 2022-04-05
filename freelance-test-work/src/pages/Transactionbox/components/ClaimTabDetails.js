import moment from "moment";

const ClaimTabDetails = (props) => {
    const { data } = props
    const printMessage = (msg) => {
        let m = ''
        let limit = 15
        for (let index = 0; index < msg.length; index++) {
            if (index < limit) {
                m = m + msg[index]
            }
            else {
                m = m + "\n"
                limit = limit + 15
                index--
            }
        }
        return m;
    }
    return (
        <>
            <div className='detail-padding'>
                <table className='table'>
                    <tr className='card-headings' data-testid="bin-h">
                        <th>BIN</th>
                        <th>PCN</th>
                        <th style={{ width: "20%" }}>SUBMITTED DATE</th>
                        <th>COB</th>
                        <th>LOCAL MESSAGE</th>
                    </tr>
                    <tr data-testid="bin-data">
                        <td>{data.claimRequest.header.binNumber}</td>
                        <td>{data.claimRequest.header.processControlNumber}</td>
                        <td>{moment(data.submitDate).format("MM/DD/YYYY")}</td>

                        <td>{data.additionalFields.cob}</td>
                        <td rowSpan={5} data-testid="message">
                            <ul>
                                {data.claimResponseStatus.claimResponseMessageInformations.map(msg => {
                                    return (
                                        <li>
                                            {printMessage(msg.additionalMessageInformation)}
                                            
                                        </li>
                                    );
                                })}

                            </ul>
                        </td>
                    </tr>

                    <tr className='card-headings' data-testid="rx-h">
                        <th>Rx Number</th>
                        <th>Refill</th>
                        <th>Transaction Code</th>
                    </tr>
                    <tr data-testid="rx-data">
                        <td>{data.claimRequest.prescription.prescriptionServiceReferenceNumber}</td>
                        <td>{data.claimRequest.prescription.fillNumber}</td>
                        <td>{data.claimRequest.header.transactionCode}</td>
                    </tr>
                    <tr className='card-headings' data-testid="pa-h">
                        <th style={{ width: "20%" }}>PA Reason Code</th>
                        <th style={{ width: "20%" }}>PA Number</th>
                        <th>Claim Status</th>
                        <th style={{ width: "20%" }}>Reject Code</th>
                    </tr>
                    <tr>
                        <td>{data.additionalFields.paReasonCode}</td>
                        <td>{data.additionalFields.paNumber}</td>
                        <td>{data.claimResponseStatus.transactionResponseStatus}</td>
                        <td>
                            {data.claimResponseStatus.claimResponseRejects.map(rc => {
                                return (
                                    <>{rc.rejectCode}{" | "}
                                    </>
                                );
                            })
                            }
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default ClaimTabDetails;