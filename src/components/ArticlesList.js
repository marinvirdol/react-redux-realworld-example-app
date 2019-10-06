import React from 'react';
import ArticlePreview from './ArticlePreview';

const ArticlesList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">No article to display</div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug}/>
          );
        })
      }
    </div>
  );
};

export default ArticlesList;