import React from 'react';
import MainNav from './main-nav';
import AuthNav from './auth-nav';
import Logo from 'components/Logo/logo';

class LoginComponent extends React.Component {

    render(){
        return(
            <>
            <div>
                <div className="navbar-brand logo">
                    <Logo/>
                </div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <div className="container">
                    <MainNav />
                    <AuthNav />
                    </div>
                </nav>
            </div>
            </>
        )
    }
}


export default LoginComponent;