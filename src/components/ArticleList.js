import React from 'react'
import Article from './Article'

function ArticleList({ articles }) {
	return (
		<ul>
			<li><Article article = {articles[0]}/></li>
			<li><Article article = {articles[1]}/></li>
			<li><Article article = {articles[2]}/></li>
			<li><Article article = {articles[3]}/></li>
		</ul>
	)
}

export default ArticleList
