import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

import { Link, Route, Switch } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Signup from './components/signup';
import Signin from './components/signin';
import Logout from './components/logout';
import CreateCard from './components/createCard';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Component } from 'react';
import userService from './services/userService';
import BizSignup from './components/bizSignup';
import ProtectedRoute from './components/common/protectedRoute';
import MyCards from './components/myCards';
import UpdateCard from './components/updateCard';
import Delete from './components/delete';
import EditUser from './components/editUser';
import AllCards from './components/allCards';
import Favorites from './components/favorites';


class App extends Component {
    state = {}

    async componentDidMount() {
        const user = userService.getCurrentUser();
        if (user) {
           this.setState({ user });
           let {data : { email }} = await userService.getCurrentUserDetails();
           if (email) this.setState( { email});
        }
    }

    render() {

        const { user } = this.state;
        const { email } = this.state;

        return (
            <React.Fragment>
                <ToastContainer />
                <header>
                    <Navbar user={user} />
                </header>
                {user && <Link to= "/edit-user"> <p className = "change colors text-right mx-5 mt-4" > <i className="fas fa-user"></i>  { email}</p></Link>}
                <main style={{ minHeight: 900 }}>
                    <Switch>
                        <ProtectedRoute path="/edit-user" component={EditUser} />
                        <ProtectedRoute path="/my-cards/delete/:id" component={Delete} biz={true} />
                        <ProtectedRoute path="/my-cards/edit/:id" component={UpdateCard} biz={true} />
                        <ProtectedRoute path="/my-cards" component={MyCards} biz={true} />
                        <ProtectedRoute path="/all-cards" component={AllCards} />
                        <ProtectedRoute path="/favorites" component={Favorites} />
                        <ProtectedRoute path="/create-card" component={CreateCard} biz={true} />
                        <Route path='/biz-signup' component={BizSignup} />
                        <Route path='/logout' component={Logout} />
                        <Route path='/about' component={About} />
                        <Route path='/signin' component={Signin} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/' component={Home} />
                    </Switch>
                </main>
                <footer>
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}

export default App;
