var React = require('react');

var AccountBox = React.createClass({

    getInitialState: function() {
        return {
            showBox: false,
            account: this.props.accounts[0]
        };
    },

    showDiv: function(acc){
        console.log(acc);
        this.setState({showBox: !this.state.showBox});
        this.setState({account: acc});
    },

    render: function() {
        var allAccounts = this.props.accounts.map(function(acc, index){
            var deleteMe = function(){
                    this.props.onAccountDelete(acc.owner);
            }.bind(this);
            var clicky = function() {
                this.showDiv(acc);
            }.bind(this);
            return(
                    <div key={index}>
                        <p onClick={clicky} value={acc}>Name: {_.capitalize(acc.owner)}, Amount: £{acc.amount}</p>
                        <button onClick={deleteMe}>Delete</button>
                    </div>
                    )
            }.bind(this))

            var classNameForDiv = this.state.showBox ? "boxShow" : "boxHidden"
        return (
            <div>
                <h4>{this.props.type} Account Total: £{this.props.totalType}</h4>
                <div className={classNameForDiv}>{_.capitalize(this.state.account.owner)}: {this.state.account.info}</div>
                {allAccounts}
            </div>
        );
    }

});

module.exports = AccountBox;
