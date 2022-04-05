import React from "react";
import axios from 'axios';
import $ from "jquery";

class MultipleFile extends React.Component {

    state = {
        multipleFile: [],
        multipleFileSrc: [],
        showCount: 0,
        removeIndex: []
    }
    handleMultipleFileChange = (e) => {
        let multipleFileSrc = []
        let multipleFile = []
        if (e.target.files.length > 0) {
            this.setState({ showCount: e.target.files.length })

            for (let i = 0; i < e.target.files.length; i++) {
                multipleFile.push(e.target.files[i])
                multipleFileSrc.push(URL.createObjectURL(e.target.files[i]))
            }
            this.setState({ multipleFileSrc, multipleFile }, () => {
                console.log('initial file', this.state.multipleFile);
            })

        }
    }


    removeMultiImage = (e, index) => {
        let multipleFileSrc = this.state.multipleFileSrc
        let removeIndex = this.state.removeIndex
        multipleFileSrc.splice(index, 1)
        removeIndex.push(index)
        this.setState({ showCount: multipleFileSrc.length, multipleFileSrc, removeIndex })
    }

    fileSelect = () => {
        $("#multipleFile").click()
    }

    handleSubmit = () => {
        let formData = new FormData();
        let multipleFile = this.state.multipleFile
        for (let i = 0; i < this.state.removeIndex.length; i++) {
            multipleFile.splice(this.state.removeIndex[i], 1)
        }

        this.setState({ multipleFile }, () => {
            for (let i = 0; i < this.state.multipleFile.length; i++) {
                formData.append('multipleFile[' + i + ']', this.state.multipleFile[i], this.state.multipleFile[i].name);
            }
            console.log('final file', this.state.multipleFile);
            axios.post("url", formData)
        })



    }

    render() {
        return (
            <>


                <label>Multiple File Upload</label>
                <br />
                <input type="file" name="multipleFile[]" onChange={this.handleMultipleFileChange} multiple id="multipleFile" style={{ display: "none" }} />
                <button type="button" onClick={this.fileSelect}>Click</button>
                <span id="showCount">{this.state.showCount} file(s) choosen</span>
                <br /><br />
                <button type="button" onClick={this.handleSubmit}>Submit</button>
                <br /><br />
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

export default MultipleFile