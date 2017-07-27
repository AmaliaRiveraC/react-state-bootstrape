import React, { Component } from 'react';

export default class Items extends Component {
	render(){
		return(
			<li className="item text-left">{this.props.textoElementos}</li>
		)
	}
}