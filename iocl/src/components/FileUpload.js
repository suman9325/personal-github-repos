import React from "react";
import axios from 'axios';
import $ from "jquery";

class FileUpload extends React.Component {

    state = {
        file: "",
        fileSrc: "",
        multipleFile: [],
        multipleFileSrc: [],
        showCount:0
    }
    handleChange = (e) => {

        // console.log(e.target.value);
        this.setState({ fileSrc: URL.createObjectURL(e.target.files[0]) })

        let file_data = new FormData()
        let ext = e.target.files[0].name.substring(e.target.files[0].name.lastIndexOf(".") + 1, e.target.files[0].name.length)

        if (e.target.files[0].size <= 10000000) {
            // console.log("valid");

            if (ext == "pdf") {
                // console.log("ok");
                file_data.append("avatar", e.target.files[0].name)
                axios.post("url", file_data)
                    .then(res => {

                    })
                    .catch(err => {

                    })
            }
            else {
                // console.log(" not ok");
            }
        }
        else {
            // console.log("invalid");
        }



    }
    handleMultipleFileChange = (e) => {
        let multipleFileSrc = []
        if (e.target.files.length > 0) {

            let formData = new FormData();

            this.setState({showCount: e.target.files.length})

            for (let i = 0; i < e.target.files.length; i++) {

                multipleFileSrc.push(URL.createObjectURL(e.target.files[i]))

                formData.append('multipleFile[' + i + ']', e.target.files[i],
                e.target.files[i].name);

            }
            this.setState({ multipleFileSrc })

            // axios.post("https://reqres.in/api/login", formData)
            //     .then(response => {

            //     })
            //     .catch(err => {
            //         // console.log(err);
            //         // console.log('filedata', formData);
            //     })
        }
    }

    removeImage = () => {
        this.setState({ fileSrc: "" })
        $("#singleFile").val("")
    }

    removeMultiImage = (e, index) => {
        let multipleFileSrc = this.state.multipleFileSrc
        multipleFileSrc.splice(index, 1)
        this.setState({showCount: multipleFileSrc.length}, ()=>{
            $("#showCount").val(multipleFileSrc.length)
        })
        
        this.setState({ multipleFileSrc })
    }

    render() {
        return (
            <>
                <label>Single File Upload</label>
                <input type="file" name="file" onChange={this.handleChange} id="singleFile" />
                {!!this.state.fileSrc &&
                    <>
                        <button onClick={this.removeImage}><i className="fa fa-times" aria-hidden="true"></i></button>
                        <img src={this.state.fileSrc} alt="" height={250} width={250} />
                    </>

                }

                <br /><br /><br />

                <label>Multiple File Upload</label>
                <input type="file" name="multipleFile[]" onChange={this.handleMultipleFileChange} multiple id="multipleFile" />
                <span id="showCount">{this.state.showCount}</span>

                {this.state.multipleFileSrc.length > 0 &&
                    <>
                        {this.state.multipleFileSrc.map((path, index) => {
                            return (
                                <div key={index} style={{ float: "left" }}>
                                    <button onClick={(e) => this.removeMultiImage(e, index)}><i className="fa fa-times" aria-hidden="true"></i></button>
                                    <img src={path} alt="" height={250} width={250} />
                                </div>
                            )
                        })

                        }
                    </>
                }
            </>
        );
    }
}

export default FileUpload