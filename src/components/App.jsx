import React, { Component } from "react";
import PropTypes from "prop-types";
import ReviewList from "./Review";
import Counter from "./Counter";
import { Provider } from "react-redux";
import store from "../store";

function TitileElem() {
  return <h1> Title text </h1>;
}

class App extends Component {
  static propTypes = {
    reviews: PropTypes.array
  };
  constructor(any) {
    super(any);
    this.any = any;
  }

  render() {
    return (
      <React.Fragment>
        <TitileElem />
        <Counter />
        <Provider store={store}>
          <ReviewList any={this.any} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
