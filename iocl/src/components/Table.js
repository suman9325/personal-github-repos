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
                    name: 'Emp userId',
                    selector: row => row.userId,
                    sortable: true,
                },
                {
                    name: 'Employee id',
                    selector: row => row.id,
                    sortable: true,
                },
                {
                    name: 'Action',
                    selector: row => this.handleAction(row.id),
                    sortable: true,
                },
            ],

            form_data: {
                id: "",
                email: "",
                first_name: "",
                last_name: ""
            },
        }
    }

    handleAction = (id) => {
        return (
            <div>
                <input type="button" value="EDIT" onClick={() => this.handleEdit(id)} data-toggle="modal" data-target="#myModal" />
                <input type="button" value="DELETE" onClick={() => this.handleDelete(id)} />
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

    handleChange = (e) => {

        let form_data = this.state.form_data
        form_data[e.target.name] = e.target.value
        this.setState({ form_data })
    }

    handleDelete = (id) => {
        console.log('del id', id);
        axios.post("https://reqres.in/api/users/", {id: id} )
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
            axios.post("https://reqres.in/api/users/", {uid: this.state.form_data.id} )
                .then(res => {
                    this.setState({
                        // form_data: res.data.data,
                    })
                })
                .catch(err => {

                })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('new data', this.state.form_data);
        axios.post("url", this.state.form_data)
    }

    render() {
        return (
            <>
                <div className="datatable">

                    <DataTable
                        title="User Data"
                        columns={this.state.columnData}
                        data={this.state.tableData}
                        pagination
                    />
                </div>

                <React.Fragment>
                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Modal Header</h4>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div>
                                            <label>Email</label>
                                            <input type="email" name="email" value={this.state.form_data.email} onChange={this.handleChange} />
                                        </div>
                                        <div>
                                            <label>First Name</label>
                                            <input type="text" name="first_name" value={this.state.form_data.first_name} onChange={this.handleChange} />
                                        </div>
                                        <div>
                                            <label>Last Name</label>
                                            <input type="text" name="last_name" value={this.state.form_data.last_name} onChange={this.handleChange} />
                                        </div>
                                        <input type="submit" value="UPDATE" onClick={this.handleSubmit} />
                                    </form>
                                </div>
                                {/* <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </React.Fragment>

            </>
        );
    }
}

export default Table;