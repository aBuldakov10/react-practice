import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

import LangSwitcher from '../components/LangSwitcher/LangSwitcher';

const Home = () => {
  const { lng } = useParams();
  const languages = ['en', 'ru'];
  const correctLang = languages.includes(lng);

  if (!correctLang) {
    return <Navigate to="/en" />;
  }

  return (
    <div>
      <LangSwitcher lng={lng} />
    </div>
  );
};

export default Home;
