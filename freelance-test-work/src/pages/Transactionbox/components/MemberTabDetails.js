import moment from "moment";

const MemberTabDetails = (props) => {
    const { data } = props
    return (
        <>
            <div className='detail-padding'>
                <table className='table'>
                    <tr className='card-headings' data-testid="carrier-h">
                        <th>Carrier</th>
                        <th>Account</th>
                        <th>Group</th>
                        <th>Plan Code</th>
                    </tr>
                    <tr>
                        <td>{data.clientMember.carrier}</td>
                        <td>{data.clientMember.account}</td>
                        <td>{data.clientMember.groupId}</td>
                        <td>{data.coverage.pharmacyBenifitPlanCode}</td>
                    </tr>
                    <tr className='card-headings' data-testid="member-h">
                        <th>Member Id</th>
                        <th>Member Name</th>
                        <th>Sex</th>
                        <th>Date of Birth (DOB)</th>
                    </tr>
                    <tr>
                        <td>{data.clientMember.memberId}</td>
                        <td>{data.clientMember.memberName}</td>
                        <td>{data.clientMember.gender}</td>
                        <td>{moment(data.clientMember.dateOfBirth).format("MM/DD/YYYY")}</td>

                    </tr>
                </table>
            </div>
        </>
    )
}
export default MemberTabDetails;