import React from "react";
import axios from 'axios';

class FileUpload extends React.Component {

    state = {
        file: "",
        multipleFile: []
    }
    handleChange = (e) => {
        let file_data = new FormData()
        file_data.append("avatar", e.target.files[0].name)
        console.log(e.target.files);

    }
    handleMultipleFileChange = (e) => {
        if (e.target.files.length > 0) {
            let formData = new FormData();
            for (let i = 0; i < e.target.files.length; i++) {

                if (e.target.files[i].size > '200'){

                }
                else{
                    formData.append('multipleFile[' + i + ']', e.target.files[i],
                    e.target.files[i].name);
                }
                    
            }



            axios.post("https://reqres.in/api/login", formData)
                .then(response => {

                })
                .catch(err => {
                    console.log(err);
                    console.log('filedata', formData);
                })
        }
    }
    render() {
        return (
            <>
                <label>Single File Upload</label>
                <input type="file" name="file" onChange={this.handleChange} />
                <br /><br /><br />

                <label>Multiple File Upload</label>
                <input type="file" name="multipleFile[]" onChange={this.handleMultipleFileChange} multiple />
            </>
        );
    }
}

export default FileUpload