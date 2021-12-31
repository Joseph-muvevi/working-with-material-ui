import React, {useState} from 'react'
import {
	Typography,
	Button,
	Container,
	TextField,
	ButtonGroup,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Radio
} from "@mui/material"
import PublishIcon from '@mui/icons-material/Publish';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@mui/styles"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

const useStyles = makeStyles({
	field: {
		marginTop: "15px !important",
		marginBottom: "15px !important",
		display: 'block !important',
	  }
})

export default function Create() {
	const classes = useStyles()
	const history = useHistory()

	const [title, setTitle] = useState("")
	const [details, setDetails] = useState("")
	const [priority, setPriority] = useState("medium")
	const [titleErrors, setTitleErrors] = useState(false)
	const [detailsErrors, setDetailsErrors] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()

		
		if (title === ""){
			return setTitleErrors(true)
		}
		setTitleErrors(false)

		if (details === ""){
			return setDetailsErrors(true)
		}
		setDetailsErrors(false)

		if (title && details) {
			axios({
				method: "post",
				headers: {"Content-type": "application/json"},
				url:"http://localhost:8080/todos",
				data: {
					title: title,
					details: details,
					priority: priority,
				
				}
			})
				.then(history.push("/"))
				.catch(err => console.log(err))

		}
	}

	return (
		<div>
			<Container>
				<Typography
					variant="h6"
					component="h2"
					gutterBottom
					color="GrayText">
					Create New Todo
				</Typography>

				<form
					onSubmit={handleSubmit}
					autoComplete="off"
					noValidate>
					<TextField
						className={classes.field}
						onChange = {e => setTitle(e.target.value)}
						label="Todo title here..."
						variant="outlined"
						fullWidth
						error={titleErrors}
						color="primary"/>

					<TextField
						onChange={e => setDetails(e.target.value)}
						className={classes.field}
						label="Todo details here..."
						variant="outlined"
						fullWidth
						multiline
						rows={4}
						error={detailsErrors}
						color="primary"/>

					<FormControl className={classes.field}>
						<FormLabel>Priority</FormLabel>
						<RadioGroup value={priority} onChange={e => setPriority(e.target.value)}>
							<FormControlLabel value="high" label="High" control={<Radio/>}/>
							<FormControlLabel value="medium" label="Medium" control={<Radio/>}/>
							<FormControlLabel value="low" label="Low" control={<Radio/>}/>
						</RadioGroup>
					</FormControl>

					<ButtonGroup>
						<Button
							className={classes.btn}
							variant="contained"
							type="submit"
							startIcon={<PublishIcon/>}
							color="primary">
							Submit
						</Button>
						<Button
							startIcon={<DeleteIcon/>}
							variant="contained"
							type="reset"
							color="error">
							Clear
						</Button>
					</ButtonGroup>
				</form>
			</Container>
		</div>
	)
}
