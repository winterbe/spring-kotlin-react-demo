const React = require("react");

class App extends React.Component {
    render() {
        return (
            <h1>Hello React</h1>
        )
    }
}

React.render(
    <App/>,
    document.getElementById('app')
);