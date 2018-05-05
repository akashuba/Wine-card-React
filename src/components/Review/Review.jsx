import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteReview } from "../../AC";
//import store from "../../store"

class Review extends Component {

    state = {
        body: false,
    };

    render() {

        const { review } = this.props;
        return (
            <React.Fragment >
                <p className="review-item-title" >
                    <b>
                        {review.name}
                    </b>
                </p>
                <button onClick={this.handleDelete} >
                    delete
                </button>
                <button onClick={this.handleToggleBody} >
                  {this.state.body ? "close" : "open" }
                </button>
                <p className="review-item-comment">
                    {this.state.body && this.commentBody()}
                </p>
            </React.Fragment>
        );
    }

    commentBody() {
        return  this.props.review.comment;
    }

    handleToggleBody = () => {
        this.setState({
            body: !this.state.body,
        });
    }

    handleDelete = () => {
        this.props.deleteReviewDispatch(this.props.review.id);
    }

}

Review.propTypes = {
    review: PropTypes.object,
};

export default connect(null, { deleteReviewDispatch: deleteReview })(Review);
