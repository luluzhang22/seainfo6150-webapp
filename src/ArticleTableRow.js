import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      title: props.title,
      date: props.date,
      author: props.author,
      shortText: props.shortText
    };
  }

  onClick() {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {

    let selectedStatus;
    if (this.state.selected) {
      selectedStatus = 'Yes';
    }
    else {
      selectedStatus = 'No';
    }

    // paste this onClick handler into your checkbox;
    // you should not have to modify this code in any way
    // onClick={this.onClick.bind(this)}
    //
    return (
        <tr>
            <td><input type="checkbox" onClick={this.onClick.bind(this)}/>{this.state.title}</td>
            <td>{selectedStatus}</td>
            <td><address>{this.state.author}</address></td>
            <td><time dateTime="2018">{this.state.date}</time></td>
            <td>{this.state.shortText}</td>
        </tr>
    );
  }

}

ArticleTableRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
