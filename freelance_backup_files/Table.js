import React from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import axios from 'axios'

class Table extends React.Component {

    state = {
        userData: [],
        columns: [
            {
                id: 1,
                name: "User ID",
                selector: (row) => <a href="#" onClick={() => this.handleDetails(row.title)} style={{ "text-decoration": "none" }}>{row.userId}</a>,
                sortable: true,
                reorder: true
            },
            {
                id: 2,
                name: "ID",
                selector: (row) => row.id,
                sortable: true,
                reorder: true
            },
            {
                id: 3,
                name: "Title",
                selector: (row) => row.title,
                sortable: true,
                left: true,
                reorder: true
            },
            {
                id: 4,
                name: "Action",
                selector: (row) => <>
                    <button onClick={()=>this.handleEdit(row.id)}>Edit</button>
                    &nbsp;&nbsp;
                    <button onClick={()=>this.handleDelete(row.id)}>Delete</button>
                </>,
                sortable: true,
                left: true,
                reorder: true
            }
        ]
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({ userData: res.data })
                // console.log(res.data);
            })
            .catch(err => {

            })
    }

    handleDetails = (title) => {
        console.log(title);
    }


    render() {
        return (
            <>
                <DataTable
                    title="Fake Data"
                    columns={this.state.columns}
                    data={this.state.userData}
                    defaultSortFieldId={1}
                    pagination
                    selectableRows
                />
            </>
        );
    }
}

export default Table;
