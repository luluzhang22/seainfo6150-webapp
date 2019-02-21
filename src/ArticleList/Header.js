import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component
{
    constructor()
    {
        super();
        var today = new Date();
        var todayDate = new Intl.DateTimeFormat('en-US', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }).format(today);
        this.state = {
            todayDate: todayDate
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
                    <time dateTime={this.state.todayDate}>{this.state.todayDate}</time>
                </div>
            </div>
        )
    }
};

Header.propTypes = {
};

export default Header;
