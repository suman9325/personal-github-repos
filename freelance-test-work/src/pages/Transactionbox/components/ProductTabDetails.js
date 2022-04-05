import moment from "moment";

const ProductTabDetails = (props) => {
    const { data } = props
    return (
        <>
            <div className='detail-padding'>
                <table className='table'>
                    <tr className='card-headings' data-testid="drug-h">
                        <th>Drug Name</th>
                        <th>Product Id</th>
                        <th>GPI</th>
                        <th>Generic Indicator</th>
                    </tr>
                    <tr>
                        <td>{data.drug.drugName}</td>
                        <td>{data.claimRequest.prescription.productServiceId}</td>
                        <td>{data.drug.gpi}</td>
                        <td>{data.drug.genericIndicator}</td>
                    </tr>
                    <tr className='card-headings' data-testid="display-h">
                        <th>display quantity</th>
                        <th>day supply</th>
                        <th>compound code</th>
                        <th>product selection code</th>
                    </tr>
                    <tr>
                        <td>{data.claimRequest.prescription.quantityDispensed}</td>
                        <td>{data.clientMember.daysSupply}</td>
                        <td>{data.clientMember.compoundCode}</td>
                        <td>{data.clientMember.dispenseAsWrittenDawProductSelectionCode}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default ProductTabDetails;