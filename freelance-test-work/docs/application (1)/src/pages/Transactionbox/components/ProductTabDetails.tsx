import React from "react";
const ProductTabDetails = (props) => {
    const {data} = props
    return(
<>
<div className="detail-padding">
    <table className="table" >
        <tr className="card-heading" >
            <th className="m-w-2" data-testid="Product-DrugName-heading"> Drug Name</th>
            <th className="m-w-2" data-testid="Product-ProductId-heading"> Product ID (NDC)</th>
            <th className="m-w-22" data-testid="Product-GPI-heading"> GPI</th>
            <th data-testid="Product-GI-heading"> Multi-Source Code</th>
        </tr>
        <tr>
            <td data-testid="Product-DrugName-value">{!!data && data.drug.drugName }</td>
            <td data-testid="Product-ProductId-value">{!!data && data.claimRequest.prescription.productServiceId }</td>
            <td data-testid="Product-GPI-value">{!!data && data.drug.gpi }</td>
            <td data-testid="Product-GI-value">{!!data && data.drug.genericIndicator }</td>
        </tr>
        <br />
        <tr className="card-heading">
            <th data-testid="Product-DisplayQuantity-heading"> Display Quantity</th>
            <th data-testid="Product-DaySupply-heading"> Day Supply</th>
            <th data-testid="Product-CompoundCode-heading"> Compound Code</th>
            <th data-testid="Product-ProductSelectionCode-heading"> Product Selection Code</th>
        </tr>
        <tr>
            <td data-testid="Product-DisplayQuantity-value">{!!data && data.claimRequest.prescription.quantityDispensed }</td>
            <td data-testid="Product-DaySupply-value">{!!data && data.claimRequest.prescription.daysSupply }</td>
            <td data-testid="Product-CompoundCode-value">{!!data && data.claimRequest.prescription.compoundCode }</td>
            <td data-testid="Product-ProductSelectionCode-value">{!!data && data.claimRequest.prescription.dispenseAsWrittenDawProductSelectionCode }</td>
        </tr>
    </table>
</div>
</>
    )
}
export default ProductTabDetails;
