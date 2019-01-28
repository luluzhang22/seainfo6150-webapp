import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, date, author, children }) => (
    <div>
        <article>
            <h1>
                {title}
            </h1>
            <address>
                {author},<time dateTime={date}>{date}</time>
            </address>
            {children}
        </article>
    </div>
);

Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default Article;
