import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './components/lista.jsx';
import {Button, Grid, Row, Col, FormGroup, FormControl, Image} from 'react-bootstrap';

class App extends Component {
	//constructor va a definir el comportamiento de la clase
	constructor(){
		super();
		this.state = {
			itemListaSuper: '',
			arregloListaSuper: [],
			itemListaMaterias: '',
			arregloListaMaterias: [],
			itemListaDeudas: '',
			arregloListaDeudas: []
		}
		this.manejarCambioListaSuper = this.manejarCambioListaSuper.bind(this);
		this.manejarCambioListaMaterias = this.manejarCambioListaMaterias.bind(this);
		//this.manejarCambioListaDeudas = this.manejarCambioListaDeudas.bind(this);
		
		this.agregarAListaSuper = this.agregarAListaSuper.bind(this);
		this.agregarAListaMaterias = this.agregarAListaMaterias.bind(this);
		this.agregarAListaDeudas = this.agregarAListaDeudas.bind(this);
	}
	
	agregarAListaSuper(){
		this.state.arregloListaSuper.push(this.state.itemListaSuper);
		this.setState({itemListaSuper: " "})
	}
	
	agregarAListaMaterias(){
		this.state.arregloListaMaterias.push(this.state.itemListaMaterias);
		this.setState({itemListaMaterias: " "})
	}
	
	agregarAListaDeudas(){
		this.state.arregloListaDeudas.push(this.state.itemListaDeudas);
		this.setState({itemListaDeudas: " "})
	}
	
	
	manejarCambioListaSuper(event){
		let inputValue = event.target.value;
		this.setState({itemListaSuper:inputValue})
	}
	
	manejarCambioListaMaterias(event){
		let inputValue = event.target.value;
		this.setState({itemListaMaterias:inputValue})
	}
	
	manejarCambioListaDeudas(event){
		let inputValue = event.target.value;
		this.setState({itemListaDeudas:inputValue})
	}
	
	
	render() {
		return (
			<Grid>
				<Row>
					<Col xs={6} md={4}>
						<h3>Input Super Mercado</h3>
						  <FormGroup bsSize="small">
      					  <FormControl type="text" placeholder="Small text" value={this.state.itemListaSuper} onChange={this.manejarCambioListaSuper}  />
						</FormGroup>
						<Button bsStyle="info" onClick={this.agregarAListaSuper}>Enviar</Button>
//						<Lista tituloLista="Super Mercado" textoElementos={this.state.arregloListaSuper}/>
					</Col>
					<Col xs={6} md={4}>
						<h3>Input Lista Materias</h3>
						<input value={this.state.itemListaMaterias} onChange={this.manejarCambioListaMaterias} type="text" />
						<Button bsStyle="info" onClick={this.agregarAListaMaterias}>Enviar</Button>
						<Lista tituloLista="Materias aprobadas" textoElementos={this.state.arregloListaMaterias}/>
					</Col>
					<Col xs={6} md={4}>
						<h3>Input Lista Deudas</h3>
						<input value={this.state.itemListaDeudas} onChange={this.manejarCambioListaDeudas} type="text" />
						<Button bsStyle="info" onClick={this.agregarAListaDeudas}>Enviar</Button>
						<Lista tituloLista="Deudas" textoElementos={this.state.arregloListaDeudas}/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default App;
