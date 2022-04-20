import moment from "moment";
import React from "react";
const MemberTabDetails = (props) => {
    const { data } = props
    return (
        <>
            <div className="detail-padding">
                <table className="table" >
                    <tr className="card-heading" >
                        <th className="m-w-2" data-testid="Member-Carrier-heading"> Carrier</th>
                        <th className="m-w-2" data-testid="Member-Account-heading"> Account</th>
                        <th className="m-w-22" data-testid="Member-Group-heading"> Group</th>
                        <th data-testid="Member-PlanCode-heading"> Plan Code</th>
                    </tr>
                    <tr>
                        <td data-testid="Member-Carrier-value">{!!data && data.clientMember.carrier}</td>
                        <td data-testid="Member-Account-value">{!!data && data.clientMember.account }</td>
                        <td data-testid="Member-Group-value">{!!data && data.clientMember.groupId }</td>
                        <td data-testid="Member-PlanCode-value">{!!data && data.coverage.pharmacyBenefitPlanCode }</td>
                    </tr>
                    <br />
                    <tr className="card-heading">
                        <th data-testid="Member-MemberId-heading"> Member ID</th>
                        <th data-testid="Member-MemberName-heading"> Member Name</th>
                        <th data-testid="Member-sex-heading"> Gender</th>
                        <th data-testid="Member-DOB-heading"> Date of Birth (DOB)</th>
                    </tr>
                    <tr>
                        <td data-testid="Member-MemberId-value" >{!!data && data.clientMember.memberId }</td>
                        <td data-testid="Member-MemberName-value">{!!data && data.clientMember.memberName }</td>
                        <td data-testid="Member-sex-value">{!!data && data.clientMember.gender }</td>
                        <td data-testid="Member-DOB-value">{!!data && moment(data.clientMember.dateOfBirth).format("MM/DD/YYYY") }</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default MemberTabDetails;