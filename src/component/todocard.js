import React from 'react'
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
	const classes = useStyles(todo)

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
						onClick={() => handleDelete(todo.id)}
						aria-label="delete">
						<DeleteIcon />
					</IconButton>
				}
			/>
			<CardContent>
				<Typography variant="body2">
					{todo.details}
				</Typography>
			</CardContent>
		</Card>
	)
}

export default TodoCard
