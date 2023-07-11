import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <>
    <div className={css.section}>
      <h2 className={css.tittle}>{title}</h2>
      {children}
    </div>
  </>
);

export default Section;
