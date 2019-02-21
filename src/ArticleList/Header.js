import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component
{
    constructor()
    {
        super();
        let today = new Intl.DateTimeFormat('en-US',
            {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }).format(new Date());
        this.state = {
            today: today,
            year: new Date().getFullYear()
        };
    }

    render()
    {
        return (
            <div className={styles.header}>
                <div className={styles.title}>
                    The INFO6150 News
                </div>
                <div>
                    <time dateTime={this.state.year}>{this.state.today}</time>
                </div>
            </div>
        )
    }
};

Header.propTypes = {
};

export default Header;
