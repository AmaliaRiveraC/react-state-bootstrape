import React from 'react';
import Items from './items.jsx';

export default class Lista extends React.Component {
	render(){
		let arregloLi = this.props.textoElementos.map(
		(textoItem) => {
			return <Items textoElementos={textoItem}/>
		})
		return(
			<div className="border col-3">
				<h1>{this.props.tituloLista}</h1>
				<ul>
					{arregloLi}
				</ul>
			</div>
		);
	}
}