import React from 'react'
import Searchable from 'react-searchable-dropdown';

class SearchableDD extends React.Component {
    state = {

        country: [
            { cid: '', cname: 'All' },
            { cid: "1", cname: "India" },
            { cid: "2", cname: "USA" },
            { cid: "3", cname: "Canada" }
        ],

        updatedCountry: []
    }

    componentDidMount() {
        let updatedCountry = []
        for (let index = 0; index < this.state.country.length; index++) {
            updatedCountry.push({ value: this.state.country[index].cid, label: this.state.country[index].cname })
        }
        this.setState({ updatedCountry })
    }

    render() {
        return (
            <>
                <div style={{ width: "30%" }}>
                    {this.state.updatedCountry.length !== 0 &&
                        <Searchable
                            value={['']}
                            multiple
                            hideSelected
                            options={this.state.updatedCountry}
                            onSelect={value => {
                                console.log(value);
                            }}
                        />}
                </div>

            </>
        )
    }
}

export default SearchableDD;