import React, { Component } from 'react';
import { connect } from 'react-redux';
import Title from './Title';

class Titles extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const renderTitles = this.props.data.map((title, index) => (
      <Title 
        key={index} 
        defaultTitle={title.defaultTitle} 
        secondaryTitle={this.props.secondaryTitle[index]}
        animside={title.animside}
        parallaxdistance={title.parallaxdistance} />
    ));
    return (
      <div className="titles">
        {renderTitles}
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    secondaryTitle: state.secondaryTitle
  }
}

export default connect(mapStateToProps, null)(Titles);