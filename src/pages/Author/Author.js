import React from 'react';
import { useParams, Link } from 'react-router-dom';

import './Author.scss';
import { authors, postsList } from '../../constants/constants';

const Author = () => {
  const { id } = useParams();
  const author = authors.filter(({ id: authorId }) => {
    return authorId === +id;
  })[0];

  const authorPosts = postsList.filter(({ authorId }) => {
    return authorId === +id;
  });

  const link = new URL(location.origin);
  link.searchParams.append('authorId', author.id);

  if (!author) {
    return <h1 style={{ textAlign: 'center' }}>Author not found</h1>;
  }

  return (
    <div className="author">
      <div className="author__img-wrapper">
        <img
          src={author.photo}
          className="post__img"
          alt={author.name}
          title={author.name}
        />
      </div>

      <p className="author__title">{author.name}</p>

      <p className="author__description">{author.description}</p>

      <p className="author__recent-posts">
        <span>Recent author's posts: </span>
        {authorPosts.map(({ id, title }, index) => {
          return (
            <i key={id}>
              <Link to={`/article/${id}`}>{title}</Link>
              {authorPosts.length - 1 !== index ? ', ' : ''}
            </i>
          );
        })}

        <Link className="author__view-all" to={`/articles/${link.search}`}>
          View all
        </Link>
        {/*<Link to={`/articles/?authorId=${author.id}`}>*/}
        {/*  View all author's posts*/}
        {/*</Link>*/}
      </p>
    </div>
  );
};

export default Author;
