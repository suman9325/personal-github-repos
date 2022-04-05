import React from 'react';

class MyKeys extends React.Component{

    constructor() {
        super();
          
        this.state = {
           data:[
              {
                 component: 'First...',
                 id: 1
              },
              {
                 component: 'Second...',
                 id: 2
              },
              {
                 component: 'Third...',
                 id: 3
              }
           ]
        }
     }

    render(){
        return(
            <div>
                 {this.state.data.map((i) => <li>
                     key = {i.component}
                 </li> )}
            </div>
        );
    }
}

export default MyKeys;