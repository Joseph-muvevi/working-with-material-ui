import React, {useState} from 'react';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from "@mui/styles";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	backgroundColor: 'white',
	padding: "20px",
	borderRadius: "10px",
	boxShadow: 24,
	p: 4,
  };

const useStyles = makeStyles((theme) => {
	return {
		modalButtonGroup: {
			paddingBottom: theme.spacing(1),
			paddingTop: theme.spacing(3),
		}
	}
})

export default function ModalComponent ({openModal, close, title, handleDelete, todo}){
	const [IsOpen, setIsOpen] = useState(true)
	const classes = useStyles()

	return (
		<div>
			<Modal
				open={openModal}
				onClose={IsOpen}
				onBackdropClick={close}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box style={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Confirm Action
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Are you sure you want to delete "{title}"
					</Typography>
					<div className={classes.modalButtonGroup}>
						<ButtonGroup variant="contained">
							<Button
								startIcon={<CancelIcon/>}
								onClick = {() => setIsOpen(false)}
							>
								Cancel
							</Button>
							<Button
								onCLick={() => handleDelete(todo.id)}
								color="error"
								startIcon={<DeleteIcon/>}
							>
								Delete
							</Button>
						</ButtonGroup>
					</div>
				</Box>
			</Modal>
		</div>
	)
}

