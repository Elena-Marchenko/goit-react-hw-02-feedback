import React from 'react';
import css from './Statistics.module.css';

const Notification = ({ message }) => (
  <>
    <h3 className={css.message}>{message}</h3>
  </>
);
export default Notification;
