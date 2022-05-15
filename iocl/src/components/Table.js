import DataTable from "react-data-table-component";
import React from "react";
import axios from "axios";

class Table extends React.Component {

    constructor() {
        super();
        this.state = {
            tableData: [],
            searchText: "",
            columnData: [
                {
                    name: 'Employee id',
                    selector: row => row.id,
                    sortable: true,
                },
                {
                    name: 'Title',
                    selector: row => row.title,
                    sortable: true,
                },
                {
                    name: 'Action',
                    selector: row => this.handleAction(row.id),
                    sortable: true,
                },
            ],

            sortedIds: "",

            form_data: {
                id: "",
                email: "",
                first_name: "",
                last_name: ""
            },
        }
    }

    count=0

    handleAction = (id) => {
        return (
            <div>
                <input type="button" value="EDIT" style={{ width: 60 }} onClick={() => this.handleEdit(id)} />&nbsp;
                <input type="button" value="DELETE" style={{ width: 60 }} onClick={() => this.handleDelete(id)} />
            </div>

        )
    }

    componentDidMount() {
        this.getData()

    }
    getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({ tableData: res.data })
            })
            .catch(err => {
                console.log('error', err);
            })
    }

    handleDelete = (id) => {
        console.log('del id', id);
        axios.post("https://reqres.in/api/users/", { id: id })
            .then(res => {
                this.setState({
                    // form_data: res.data.data,
                })
            })
            .catch(err => {

            })
    }

    handleEdit = (id) => {
        let form_data = this.state.form_data
        form_data.id = id
        this.setState({ form_data }, () => {
            // For GET
            axios.get("https://reqres.in/api/users/" + this.state.form_data.id)
                .then(res => {
                    this.setState({
                        // form_data: res.data.data,
                    })
                })
                .catch(err => {

                })

            // For POST
            axios.post("https://reqres.in/api/users/", { uid: this.state.form_data.id })
                .then(res => {
                    this.setState({
                        // form_data: res.data.data,
                    })
                })
                .catch(err => {

                })
        })
    }


    rowCheck = (row) => {
        // console.log('row', row.selectedRows);
        let rowArr = row.selectedRows
        let sortedIds = []
        for (let index = 0; index < rowArr.length; index++) {
            sortedIds.push(rowArr[index].id)
        }
        this.count= sortedIds.length
        this.setState({ sortedIds: sortedIds.join() })
    }

    handleTableSubmit = () => {
        if (this.state.sortedIds == "") {
            console.log('Sorry');

        } else {
            console.log('API', this.count);

        }
    }

    render() {
        return (
            <>
            Count= {}
                <div className="datatable">

                    <DataTable
                        title="User Data"
                        columns={this.state.columnData}
                        data={this.state.tableData}
                        pagination
                        selectableRows
                        onSelectedRowsChange={this.rowCheck}
                    />
                </div>

                <input type="submit" value="SUBMIT" onClick={this.handleTableSubmit} />


            </>
        );
    }
}

export default Table;