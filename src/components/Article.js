import React, {Component} from 'react'

class Article extends Component {
	state = {
		isOpen: true
	}

	render() {
		const {article} = this.props
		console.log(this.props);
		const body = this.state.isOpen && <section>{article.text}</section>
		return (
			<div className='section'>
				<h2>
					{article.title}
					<button onClick={this.handleClick}>
						{this.state.isOpen ? 'close' : 'open'}
					</button>
				</h2>
				{body}
				<h3>{new Date(article.date).toLocaleString()}</h3>
			</div>
		)
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

export default Article
