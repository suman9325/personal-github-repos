import DataTable from "react-data-table-component";
const DisplayTable = (props) => {

    const {
        title,
        columns,
        data,
        defaultSortFieldId,
        pagination,
        onRowClicked
    } = props

    return (
        <div data-testid='table-data'>
            <DataTable
                title="Fake Data"
                columns={columns}
                data={data}
                defaultSortFieldId={1}
                pagination
                // selectableRows
                // onSelectedRowsChange = {(row) => rowSelect(row)        }
                onRowClicked={onRowClicked}
            />
        </div>

    )
}

export default DisplayTable;