import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import ListaTarefas from './components/ListaTarefas';

function App() {

	const [tarefas, setTarefas] = useState([])
	const [name, setName] = useState("")

	useEffect(()=>{
		console.log(tarefas)
	}, [tarefas])


	function addTarefas(tarefa){
		setTarefas([...tarefas, tarefa])
	}

	function handleSubmit(e){
		e.preventDefault();
		addTarefas(name)
		setName("")
		console.log("Form submited");
		
	}

	function lixo(index){
		const novasTarefas = tarefas.filter((_, i) => i!== index);
		setTarefas(novasTarefas);
	}

	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container fluid className="ps-4">
					<Navbar.Brand href="#home">ToDo List</Navbar.Brand>
				</Container>
			</Navbar>
			<Container className="mt-5">
				<Row className="justify-content-center">
					<Col xs={10} sm={10} md={8}>
						<form onSubmit={handleSubmit} className="xs-10 sm-10 md-8">
								<label htmlFor="ftext">Digite a Tarefa</label><br/>
								<input 
									type="text" 
									id="ftext" 
									placeholder="Tarefa" 
									value={name}
									name="name" onChange={(e)=>setName(e.target.value)}/><br/>
								<button className="mt-2" type="submit">Adicione Tarefa</button>
						</form>
					</Col>
				</Row>

				<Row className="justify-content-center mt-3">
					<Col xs={10} sm={10} md={8}>
						<ListaTarefas ListaTarefas={tarefas} lixo={lixo}/>
					</Col>
				</Row>
			</Container>
		

		
		</div>
  );
}

export default App;