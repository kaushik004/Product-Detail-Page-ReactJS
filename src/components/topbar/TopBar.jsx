import React from 'react';
import classes from './TopBar.module.css';

const TopBar = () => {
    return(
        <header className="App-header">
            <nav className={classes.topbar}>
                <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazone Logo" />
            </nav>
        </header>
    );
};

export default TopBar;