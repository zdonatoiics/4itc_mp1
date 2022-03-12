import React from 'react';
import PropTypes from 'prop-types';
import styles from './NameHeader.module.css';

const NameHeader = (props) => (
  <div className={styles.NameHeader}>
    <div className="row"> 

      <div className="col-md-6">
        <img className="img-fluid img-thumbnail displayPic rounded" src={props.imageURL} alt="logo" />
      </div>

      <div className="col-md-6 center">
        <h1>{props.name}</h1>
      </div>

    </div>
  </div>
);

NameHeader.propTypes = {};

NameHeader.defaultProps = {};

export default NameHeader;
