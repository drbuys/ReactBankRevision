var React = require('react');
var AccountBox = require('./AccountBox.jsx');
var sampleAccounts = require('../sample_accounts.js');
var FormBox = require('./FormBox.jsx');
var _ = require('lodash');

var BankBox = React.createClass({
    getInitialState: function() {
        return {
            accounts: sampleAccounts
        };
    },

    // setAccounts: function(){
    //     this.setState({accounts: sampleAccounts})
    // },

    // componentDidMount: function() {
    //     console.log(this.separateAccountsByType('Personal'));
    // },

    separateAccountsByType: function(accountType){
        var accs = this.state.accounts.filter(function(account){
            return account.type === accountType
        })
        return accs;
    },

    totalByAccountType: function(accountType){
        var total = 0;
        for(var account of this.state.accounts){
            if(account.type === accountType){
            total += parseInt(account.amount);
            }
        }
        return total.toLocaleString();
    },

    totalOfAllAccounts: function(){
        var total = 0;
        for(var account of this.state.accounts){
            total += parseInt(account.amount);
        }
        return total.toLocaleString();
    },

    createNewAccount: function(account){
        console.log(account);
        console.log(this.state.accounts);
        var newAccounts = this.state.accounts
        newAccounts.push(account);
        this.setState({accounts: newAccounts});
    },

    deleteAccount: function(owner){
        var filteredAccounts = this.state.accounts.filter(function(account){
            return account.owner != owner;
        });
        this.setState({accounts: filteredAccounts});
    },

    render: function() {
        return (
            <div>
                <h3>Bank</h3>
                <p>Total money: £{this.totalOfAllAccounts()}</p>
                <AccountBox
                    //showMe={this.}
                    onAccountDelete={this.deleteAccount}
                    type={"Personal"}
                    accounts={this.separateAccountsByType('Personal')}
                    totalType={this.totalByAccountType('Personal')}
                />
                <AccountBox
                    onAccountDelete={this.deleteAccount}
                    type={"Business"}
                    accounts={this.separateAccountsByType('Business')}
                    totalType={this.totalByAccountType('Business')}
                />
                <FormBox newAccount={this.createNewAccount}/>
            </div>
        );
    }

});

module.exports = BankBox;
