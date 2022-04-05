import React, {Component} from 'react';

class Test extends Component{
    render(){
        return(
            <React.Fragment>
                <img src="assets/pictures/index.png"></img>
            </React.Fragment>
        );
    }
}

export default Test;

// --------------------------------- STEPS --------------------------------
// 1. create a folder named "assets" under "public" directory
// 2. create a sub-folder named "pictures" under "assets" directory
// 3. store your public images in "pictures"
// 4. create your Components, and then just import the file as I have done here in Test Component