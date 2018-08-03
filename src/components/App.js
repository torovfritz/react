import React from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'

function App() {
	return (
		<div>
			<ArticleList articles = {articles} />
		</div>
	)
}

export default App
