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
            // console.log(AppState.account.id)
        }
    }
    // 4
    render() {
        console.log(this.state.account)
        return (
            <div>
                <Header userData={this.state.account} userIsLoggedIn={this.state.isLoggedIn} />
                <span>Whatever normally goes into the user dasboard page; the table below for instance</span>
                <table className="table table-striped">
                    <tbody>
                        <tr>
                            <th scope="row ">User Id</th>
                            <td>{this.state.account.id}</td>
                        </tr>
                        <tr>
                            <th scope="row ">Full Name</th>
                            <td>{this.state.account.username}</td>
                        </tr>
                        <tr>
                            <th scope="row ">Email</th>
                            <td>{this.state.account.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Home