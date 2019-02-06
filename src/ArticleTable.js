import React from 'react';
import PropTypes from 'prop-types';
import ArticleTableRow from './ArticleTableRow';

const ArticleTable = ({ articles }) => (

  <table border="1">
    <caption>This is a table of articles</caption>
    <thead>
    <tr>
      <th>Title</th>
      <th>Selected state</th>
      <th>Author</th>
      <th>Date</th>
      <th>Short Text</th>
    </tr>
    </thead>
    <tbody>

  {
    // this iterates through the articles JSON and
    // calls your ArticleTableRow component for each article
    Object.values(articles).map(article => {
      return <ArticleTableRow
        key={article.slug}
        title={article.title}
        date={article.pubDate}
        author={article.author}
        shortText={article.shortText}
      />
    })
  }
    </tbody>
  </table>

);

ArticleTable.propTypes = {
  articles: PropTypes.object.isRequired
}

export default ArticleTable;
