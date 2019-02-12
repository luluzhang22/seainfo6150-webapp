import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';

class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            date: props.date,
            year: props.date,
            author: props.author,
            shortText: props.shortText
        };
    }

    render() {
        return (
            <li className={styles.articleItem}>
                <div className={styles.title}>
                    {this.state.title}
                </div>
                {this.state.shortText}
                <div className={styles.author}>
                    <address>By: {this.state.author}</address>
                    <time dateTime="2018" className={styles.date}>{this.state.date}</time>
                </div>
            </li>
        );
    }

}

ArticleListItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    shortText: PropTypes.string.isRequired
};

export default ArticleListItem;
