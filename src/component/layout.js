import React from 'react'
import { makeStyles } from "@mui/styles"
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';
import moment from "moment"
import AvatarIcon from "../Image/scp96.png"

import { 
	Drawer, 
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	AppBar,
	Toolbar,
	Avatar
} from "@mui/material"
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
	return {
		root: {
			display: "flex"
		},
		page: {
			backgroundColor: "#f5f5f5",
			width: "100%",
			padding: theme.spacing(3)
		},
		drawer: {
			width: drawerWidth
		},
		logo: {
			padding: theme.spacing(2)
		},
		appbar: {
			display: "flex",
			width: `calc(100% - ${drawerWidth}px) !important`
		},
		toolbar: theme.mixins.toolbar,
		date: {
			flexGrow: "1 !important"
		},
		avatar: {
			marginLeft: theme.spacing(2),
			borderRadius: "5px !important"
		},
		paperDrawer: {
			width: drawerWidth
		},
		active: {
			backgroundColor: "#e0e0e0 !important"
		}
	}
})


const Layout = ({children}) => {
	const classes = useStyles()
	const history = useHistory()
	const location = useLocation()

	const menuItems = [
		{
			link: "/",
			icon: <ListIcon color="primary"/>,
			text: "All todos"
		},
		{
			link: "/create",
			icon: <AddBoxIcon color="primary"/>,
			text: "Add Todo"
		},
	]

	return (
		<div className={classes.root}>
			{/* App bar */}

			<AppBar elevation={1} className={classes.appbar}>
				<Toolbar>
					<Typography className={classes.date} variant="h6">
						{moment().format("MMMM Do YY")}
					</Typography>
					<Typography variant="h6">Jose</Typography>
					<Avatar className={classes.avatar} src={AvatarIcon} />
				</Toolbar>
			</AppBar>

			{/* side Drawer */}
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				classes={{paper: classes.paperDrawer}}
			>
				<div>
					<Typography className={classes.logo} variant="h5">
						My todo App
					</Typography>
					
					<List>
						{
							menuItems.map((item, index) => (
								<ListItem 
									button 
									key={index}
									onClick={() => history.push(item.link)}
									className={location.pathname === item.link && classes.active}
								>
									<ListItemIcon>{item.icon}</ListItemIcon>
									<ListItemText>{item.text}</ListItemText>
								</ListItem>
							))
						}
					</List>

				</div>
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	)
}

export default Layout
