import React from "react";

class EditUser extends React.Component {

    state = {
        user_id: 2,
        user: null,
        form_data: {
            email: "",
            first_name: "",
            last_name: ""
        }
    }

    componentDidMount() {
        // if (!!this.props.location && this.props.location.user_id) {
        //     this.setState({ user_id: this.props.location.user_id }, () => {
        //         this.getUserDetails()
        //     })
        // }
        // else{
        //     this.props.history.goBack()
        // }
        this.getUserDetails()
    }

    getUserDetails = () => {
        axios.get("https://reqres.in/api/users/" + this.state.user_id)
            .then(res => {
                this.setState({ form_data: res.data.data })
            })
            .catch(err => {

            })
    }

    handleChange = (e) => {
        let form_data = this.state.form_data
        form_data[e.target.name] = e.target.value
        this.setState({ form_data })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('new data', this.state.form_data);
        // axios.post("url", this.state.form_data)
    }

    render() {
        return (
            <>
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
                    <div>
                        <label>Avatar</label>
                        <img src={!!this.state.form_data ? this.state.form_data.avatar : ""} height={100} width={100} />
                    </div>

                    <input type="submit" value="UPDATE" onClick={this.handleSubmit} />
                </form>
            </>

        );
    }
}