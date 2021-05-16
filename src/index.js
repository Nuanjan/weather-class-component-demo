import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        // referrence of react component to make sure it get call.
        super(props);

        this.state = {lat: null};
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
);