import React, { Component } from "react";
import PropTypes from "prop-types";
import Review from "./Review";
import "./style.css";
import { connect } from "react-redux";

class ReviewList extends Component {
  static propTypes = {
    reviews: PropTypes.array
  };

  render() {
    const { reviews, any } = this.props;
    const reviewList = reviews.map(review => (
      <li key={review.id} className="review-item">
        {" "}
        <Review review={review} />{" "}
      </li>
    ));

    return (
      <React.Fragment>
        <section style={{ width: "60%" }}>{reviewList}</section>
        <div>{any}</div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { reviews: state.reviews };
}

export default connect(mapStateToProps)(ReviewList);
