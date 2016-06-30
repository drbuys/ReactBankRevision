var React = require('react');

var FormBox = React.createClass({

    getInitialState: function() {
        return {
            owner: "",
            amount: 0,
            type: "Personal",
            info: ""
        };
    },

    handleSelectChange: function(e){
        e.preventDefault();
        var newType = e.target.options[e.target.selectedIndex].value;
        this.setState({type: newType});
    },

    handleOwnerChange: function(e){
        this.setState({owner: e.target.value});
    },

    handleAmountChange: function(e){
        this.setState({amount: e.target.value});
    },

    handleInfoChange: function(e){
        this.setState({info: e.target.value});
    },

    handleSubmit: function(e){
        e.preventDefault();
        this.props.newAccount(this.state);
    },

    render: function() {
        return (
            <div>
                <h3>Create a New Account</h3>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.owner}
                        onChange={this.handleOwnerChange}
                    />
                    <input
                        type="number"
                        placeholder="Opening balance"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    />
                    <select value={this.state.type} onChange={this.handleSelectChange}>
                        <option value="Personal">Personal</option>
                        <option value="Business">Business</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Account Info"
                        value={this.state.info}
                        onChange={this.handleInfoChange}
                    />
                    <input type="submit" value="Add Account"/>
                </form>
            </div>

        );
    }

});

module.exports = FormBox;
