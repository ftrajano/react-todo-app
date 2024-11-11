import React from 'react'
import { Trash2 } from 'lucide-react'


const ListaTarefas = (props) => {

	const listaTarefas = props.ListaTarefas.map((tarefa, index)=>{
		return <li key={index}>{tarefa} <Trash2 size={12} onClick={()=>{props.lixo(index)}}/></li>
	})
	return (
		<>
			<ol>
				{listaTarefas}
			</ol>
		</>
	)
}

export default ListaTarefas;