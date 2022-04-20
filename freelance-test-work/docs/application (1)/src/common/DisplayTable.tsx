import DataTable from "react-data-table-component";
import React from "react";
const DisplayTable = (props) => {
    const {
        columns,
        data,
        onRowClicked,
        highlightOnHover,
        pointerOnHover
    } = props
    return (
        <div className="table-data">
            <DataTable
                columns={columns}
                data={data}
                defaultSortFieldId={1}
                onRowClicked={onRowClicked}
                highlightOnHover={highlightOnHover}
                pointerOnHover={pointerOnHover}
                defaultSortAsc={false}
            />
        </div>
    )
}
export default DisplayTable;