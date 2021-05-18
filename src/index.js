import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = {lat: null, errorMsg: ''};

    // for one time rendering
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords)
                this.setState({lat : position.coords.latitude})
            },
            (err) => this.setState({errorMsg: err.message})
        );
    }

    // for many time rendering
    componentDidUpdate() {
        console.log('My component was just update')
    }
    render() {
    
        if(this.state.errorMsg && !this.state.lat) return <div>Error: {this.state.errorMsg}</div>
        if(!this.state.errorMsg && !this.state.lat) return <div>Loading...</div>         
        
         return <SeasonDisplay lat={this.state.lat}/>

    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);