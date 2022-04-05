import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";


const FunctionComp2 = () => {

    const [tableData, setTableData] = useState([])

    const handleAction = (id) => {
        return (
            <div>
                <input type="button" value="EDIT" onClick={(e) => handleEdit(e,id)} />
                <input type="button" value="DELETE" onClick={(e) => handleDelete(e,id)} />
            </div>

        )
    }

    const handleDelete = (e, id) => {
        console.log('del id', id);
        axios.post("https://reqres.in/api/users/", {id: id} )
        .then(res => {
            
        })
        .catch(err => {

        })
    }

    const handleEdit = (e, id) => {
        console.log('edit id', id);
        axios.post("https://reqres.in/api/users/", {id: id} )
        .then(res => {
            
        })
        .catch(err => {

        })
    }

    const columnData = [
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
            selector: row => handleAction(row.id),
            sortable: true,
        },
    ]

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                // this.setState({ tableData: res.data })
                setTableData(res.data)
            })
            .catch(err => {
                console.log('error', err);
            })
    }, [])

    useEffect(() => {
        console.log('tableData', tableData);
    }, [tableData])

    return (
        <>
            <div>
                <DataTable
                    title="User Data"
                    columns={columnData}
                    data={tableData}
                    pagination
                />
            </div>
        </>
    );
}

export default FunctionComp2;