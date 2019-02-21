import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import ArticleImage from './ArticleImage'

class ArticleListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            date: props.date,
            year: props.year,
            author: props.author,
            shortText: props.shortText,
            url: props.url
        };
    }

    render() {
        return (
            <li className={styles.articleItem}>
                <div>
                    <ArticleImage url={this.state.url} title={this.state.title}/>
                </div>
                <div className={styles.articleContent}>
                    <div className={styles.title}>
                        {this.state.title}
                    </div>
                    {this.state.shortText}
                    <div className={styles.author}>
                        <address>By: {this.state.author}</address>
                        <time dateTime={this.state.year} className={styles.date}>{this.state.date}</time>
                    </div>
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
    shortText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

export default ArticleListItem;
