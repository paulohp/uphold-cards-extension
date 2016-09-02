import React, {Component} from 'react';
import {connect} from 'react-redux';

import Cards from '../card/Cards';
class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <Cards cards={this.props.cards} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { cards } = state;
  return {
    cards
  };
};

export default connect(mapStateToProps)(App);
