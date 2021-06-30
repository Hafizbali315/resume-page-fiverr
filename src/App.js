import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ResumePage from './pages/resumePage'

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" component={ResumePage} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
