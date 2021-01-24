import React from 'react';

const MainNav = () => (
    <>
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            <div>
                <a href="">Lost my password</a>
                <hr/>
                <a href="">Don't have an account</a>
            </div>
        </form>
    </>
);

export default MainNav;