import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="title" animside={this.props.animside} parallaxdistance={this.props.parallaxdistance}>
          <h1 className="primary">
            <span>{this.props.defaultTitle}</span>
            <div className="over"></div>
          </h1>
          <h1 className="secondary">
            {this.props.secondaryTitle}
          </h1> 
      </div>
    );
  }
}

export default Title;