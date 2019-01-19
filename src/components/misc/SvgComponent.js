import React, { Component } from 'react'; 

export class SvgComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <img className={this.props.class} src={require(`../../static/svg/${this.props.name}.svg`)} />
        );
    }
} 