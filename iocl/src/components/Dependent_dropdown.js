import React from 'react'
import axios from 'axios';

class DependentDropdown extends React.Component {
    state = {
        country: [
            { id: "1", name: "India" },
            { id: "2", name: "USA" },
            { id: "3", name: "Canada" }
        ],

        countryState: [
            { cid: '1', sid: '1', name: "WB" },
            { cid: '1', sid: '2', name: "Delhi" },

            { cid: '2', sid: '1', name: "USA-1" },
            { cid: '2', sid: '2', name: "USA-2" },

            { cid: '3', sid: '1', name: "Canada-1" },
            { cid: '3', sid: '2', name: "Canada-2" },
        ],

        stateOnCountry : [],
        countryId: '',
        stateId: ''
    }

    

    componentDidMount() {
    }

    handleCountryChange = (e) => {
        
        let stateOnCountry = this.state.countryState.filter(item => item.cid == e.target.value)
        this.setState({stateOnCountry})
    }

    handleStateChange = (e) =>{

    }

    render() {
        return (
            <>
                <label>Country</label>
                <select name="country" onChange={this.handleCountryChange}>
                    <option value={''}>Select</option>
                    {this.state.country.map((item, index) => {
                        return (
                            <option key={index} value={item.id}>{item.name}</option>
                        );
                    })
                    }
                </select>

                <label>State</label>
                <select name="stateOnCountry" onChange={this.handleStateChange}>
                    <option value={''}>Select</option>
                    {this.state.stateOnCountry.map((item, index) => {
                        return (
                            <option key={index} value={item.sid}>{item.name}</option>
                        );
                    })
                    }
                </select>
            </>
        );
    }
}

export default DependentDropdown;


