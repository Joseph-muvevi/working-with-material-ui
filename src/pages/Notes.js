import { Container } from "@mui/material"
import axios from "axios"
import React, {useState, useEffect} from 'react'
import TodoCard from "../component/todocard"
import Masonry from 'react-masonry-css'

const breakpoints = {
	default: 3,
	1100: 2,
	700: 1
}

export default function Notes() {
	const [todos, setTodos] = useState([])
	const [openModal, setOpenModal] = useState(false)


	useEffect(() => {
		fetch("http://localhost:8080/todos")
			.then(res => res.json())
			.then(data => setTodos(data))
			// .then

	}, [todos])

	const handleDelete = async (id) => {
		axios({
			method: "delete",
			url: `http://localhost:8080/todos/${id}`
		})

		const newTodo = todos.filter(delTodo => setTodos(delTodo.id !== id))
		setTodos(newTodo)
	}
	return (
		<Container>
			<Masonry
				breakpointCols={breakpoints}
				className="my-masonry-grid"
				columnClassName="my-masonry-grid_column"
			>
				{
					todos.map((todo, index) => (
						<div key={index} item xs={12} md={6} lg={4} >
							<TodoCard handleDelete={handleDelete} todo={todo} openModal={openModal}/>
						</div>
					))
				}
			</Masonry>
		</Container>
	)
}

export const getElementTodosLength = async () => {
	const todos = await axios.get("http://localhost:8080/todos")
	console.log(todos)
}