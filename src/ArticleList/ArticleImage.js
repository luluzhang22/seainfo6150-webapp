import React from 'react';
import PropTypes from 'prop-types';
import styles from './ArticleImage.module.css';

class ArticleImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            title: props.title
        };
    }

    render() {
        return (
            <img className={styles.image} src={this.state.url} alt={this.state.title}>
            </img>
        )
    }
}

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ArticleImage;
