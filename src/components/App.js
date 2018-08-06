import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'
// import '../reset.css'
import '../index.css'

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			reverted: false
		}
	}

	render() {
		return (
			<div>
				<div className='jumbotron'>
					<h1>Article List</h1>
					<button className = 'btn btn-primary' onClick = {this.revert}>Revert</button>
				</div>
				<ArticleList articles = {this.state.reverted ? articles.reverse() : articles} />
			</div>
		)
	}

	revert = () => {
		this.setState({
			reverted: !this.state.reverted
		})
	}
}
