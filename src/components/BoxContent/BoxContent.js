import React from 'react';
import styles from './BoxContent.module.css';

const BoxContent = (props) => (
  <div className={styles.BoxContent}>
    <h4>{props.content[0]}</h4>
    <p>{props.content[1]}</p>
    <p>{props.content[2]}</p>
    <p>{props.content[3]}</p>
    <p>{props.content[4]}</p>
  </div>
);

export default BoxContent;
