import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Article.scss';
import { postsList } from '../../constants/constants';
import { authors } from '../../constants/constants';

const Article = () => {
  const { id } = useParams();
  const article = postsList.filter(({ id: articleId }) => {
    return articleId === +id;
  })[0];

  const author = authors.filter(({ id }) => {
    return id === article.authorId;
  })[0];

  if (!article) {
    return <h1 style={{ textAlign: 'center' }}>Post not found</h1>;
  }

  return (
    <div className="post">
      <div className="post__img-wrapper">
        <img
          src={article.image}
          className="post__img"
          alt={article.title}
          title={article.title}
        />
      </div>

      <p className="post__title">{article.title}</p>

      <p className="post__description">{article.description}</p>

      <div className="post__author">
        <img
          src={author.photo}
          className="post__author-img"
          alt={author.name}
          title={author.name}
        />
        <Link to={`/author/${author.id}`} className="post__author-name">
          {author.name}
        </Link>
      </div>
    </div>
  );
};

export default Article;
