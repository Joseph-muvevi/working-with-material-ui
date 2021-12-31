import React, {useState} from 'react'
import {
	Card,
	CardHeader,
	CardContent,
	IconButton,
	Avatar, 
	Typography
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@mui/styles";
import ModalComponent from "./modal";

const useStyles = makeStyles({
	cardAvatar: {
		backgroundColor : (todo) => {
			if (todo.priority === "high"){
				return "#d50000 !important"
			}
			if (todo.priority === "medium"){
				return "#3e2723 !important"
			}
			if (todo.priority === "low"){
				return "#00e676 !important"
			}
		}
	}
})

const TodoCard = ({todo, handleDelete}) => {
	const [openModal, setOpenModal] = useState(false)
	const classes = useStyles(todo)

	const handleClose = () => {
		return setOpenModal(false)
	}

	const handleModalDelete = (todo) => {
		handleDelete(todo.id)
		return setOpenModal(false)
	}

	return (
		<Card elevation={3}>
			<CardHeader
				avatar = {
					<Avatar className={classes.cardAvatar} aria-label="recipe">
						{todo.title[0]}
					</Avatar>
				}
				title={todo.title}
				subheader={todo.priority}
				action = {
					<IconButton  
						onClick={() => setOpenModal(true)}
						aria-label="delete">
						<DeleteIcon />
					</IconButton>
				}
			/>
			<ModalComponent todo={todo} handleDelete={handleModalDelete} title={todo.title} close={handleClose} openModal={openModal}/>
			<CardContent>
				<Typography variant="body2">
					{console.log(openModal)}
					{todo.details}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default TodoCard
