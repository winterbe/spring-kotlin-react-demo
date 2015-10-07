const React = require("react");
const $ = require("jquery");

/* eslint no-unused-vars: 0 */
const App = React.createClass({
    render() {
        return (
            <h1>Hello {this.state.name}</h1>
        );
    },

    getInitialState() {
        return {name: "World"};
    },

    componentDidMount() {
        $.ajax({
            url: 'hello',
            data: {name: 'React'}
        }).done(json => {
            this.setState({name: json.name});
        });
    }
});

React.render(
    <App/>,
    document.getElementById('app')
);