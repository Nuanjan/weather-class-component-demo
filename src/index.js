import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        // referrence of react component to make sure it get call.
        super(props);

        this.state = {
            lat: null,
            errorMsg: ''
        };
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords)
                this.setState({lat : position.coords.latitude})
            },
            (err) => this.setState({errorMsg: err.message})
        );
    
        if(this.state.errorMsg && !this.state.lat) return <div>Error: {this.state.errorMsg}</div>
        if(!this.state.errorMsg && !this.state.lat) return <div>Loading...</div>         
        
         return <div>Latitude: {this.state.lat}</div>

    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);