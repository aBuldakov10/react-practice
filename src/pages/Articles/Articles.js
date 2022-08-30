import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import './Articles.scss';
import { authors, postsList } from '../../constants/constants';

const Articles = () => {
  const author = {};
  const searchParams = useSearchParams();
  const authorIdSearchParams = searchParams[0].get('authorId');

  const posts = authorIdSearchParams
    ? postsList.filter(({ authorId }) => authorId === +authorIdSearchParams)
    : postsList;

  authors.forEach(({ id, name }) => {
    author[id] = name;
  });

  return (
    <>
      {authorIdSearchParams ? (
        <Link className="reset-posts-filter" to={`/articles`}>
          Reset filter
        </Link>
      ) : (
        ''
      )}

      <ul className="posts-list">
        {posts.map(({ id, title, description, image, authorId }) => {
          return (
            <li className="posts-list__item post-preview" key={id}>
              <div className="post-preview__img-wrapper">
                <img
                  src={image}
                  className="post-preview__img"
                  alt={title}
                  title={title}
                />
              </div>

              <Link to={`/article/${id}`}>
                <p className="post-preview__title">{title}</p>
              </Link>

              <p className="post-preview__description">{description}</p>
              <p className="post-preview__author">
                Author:{' '}
                <Link to={`/author/${authorId}`}>{author[authorId]}</Link>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
