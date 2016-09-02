import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    return (
      <div>
        {this.props.cards.map(card => <span>{card.label}</span>)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let { cards } = state;
  return {
    cards
  };
};

export default connect(mapStateToProps)(App);
