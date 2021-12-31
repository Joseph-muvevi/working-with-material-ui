import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Layout from "./component/layout"

const theme = createTheme({
	palette: {
		primary: {
			main: "#3e2723"
		},
		secondary: {
			main: "##d84315"
		},
	},
	shape: {
		borderRadius: 4
	},
	typography: {
		fontFamily: "'Monda', sans-serif"
	}
})

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/">
							<Notes />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
					</Switch>
				</Layout>
			</Router>
		</ThemeProvider>
	);
}

export default App;
