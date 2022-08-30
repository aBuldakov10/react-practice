import React from 'react';
import { Link } from 'react-router-dom';

import './Authors.scss';
import { authors } from '../../constants/constants';

const Authors = () => {
  return (
    <ul className="authors-list">
      {authors.map(({ id, name, description, photo }) => {
        return (
          <li className="authors-list__item authors-preview" key={id}>
            <div className="authors-preview__img-wrapper">
              <img
                src={photo}
                className="authors-preview__img"
                alt={name}
                title={name}
              />
            </div>

            <Link to={`/author/${id}`} className="authors-preview__title">
              {name}
            </Link>

            <p className="authors-preview__description">{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Authors;
