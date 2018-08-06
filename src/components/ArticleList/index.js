import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({ articles }) {
  const articleElements = articles.map((article, index) =>
    <li className='article-list__li card' key={article.id}><Article article = {article} defaultOpen = {index === 0}/></li>
  )
	return (
		<ul>
      {articleElements}
		</ul>
	)
}
