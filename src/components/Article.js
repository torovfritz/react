import React, {Component, PureComponent} from 'react'

export default class Article extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			isOpen: props.defaultOpen
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (
	// 		this.state.isOpen !== nextState.isOpen
	// 	)
	// }

	componentWillMount() {
		console.log('mounting');
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
			isOpen: nextProps.defaultOpen
		})
	}

	componentsWillUpdate() {
		console.log('will update');
	}

	render() {
		const {article} = this.props
		const body = this.state.isOpen && <p className='card-text'>{article.text}</p>
		return (
			<div className='card-body'>
				<h5 className='card-title'>
					{article.title}
				</h5>
				<h6 className='card-subtitle mb-2 text-muted'>{article.id}</h6>
				{body}
				<a href='#' className='link' onClick={this.handleClick}>
					{this.state.isOpen ? 'close' : 'open'}
				</a>
			</div>
		)
	}

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}
