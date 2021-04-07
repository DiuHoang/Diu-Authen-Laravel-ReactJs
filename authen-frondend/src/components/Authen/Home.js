import React, { Component } from 'react'
import Header from './Header';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            account: {}
        }
    }
    // check if user is authenticated and storing authentication data as states if true
    componentWillMount() {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({ isLoggedIn: AppState.isLoggedIn, account: AppState.account });
        }
    }
    render() {
        return (
            <div>
                <Header userData={this.state.account} userIsLoggedIn={this.state.isLoggedIn} />
                <span>Whatever normally goes into the home/index page; A Plea To Heal The World for instance</span>
            </div>
        )
    }
}
export default Home