import React from 'react';

class MyJsx extends React.Component{
    render(){
        var i=11;
        return(
            <div>
                <h1>{i==10?'heading 1':'heading 2'}</h1>
            </div>
        );
    }
}

export default MyJsx;