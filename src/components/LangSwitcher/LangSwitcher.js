import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { languages } from './lang';

const LangSwitcher = ({ lng }) => {
  const [lang, setLang] = useState('en');
  const navigate = useNavigate();

  useEffect(() => {
    setLang(lng);
  }, []);

  return (
    <div className="lang-switcher">
      <button
        onClick={() => {
          setLang('en');
          navigate('/en');
        }}
      >
        en
      </button>
      <button
        onClick={() => {
          setLang('ru');
          navigate('/ru');
        }}
      >
        ru
      </button>
      <h1>{languages[lang].title}</h1>
      <h2>{languages[lang].subtitle}</h2>
      <div>
        <p>{languages[lang].text_top}</p>
        <br />
        <p>{languages[lang].text_middle}</p>
        <br />
        <p>{languages[lang].text_bottom}</p>
      </div>
    </div>
  );
};

export default LangSwitcher;
