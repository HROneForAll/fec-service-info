import React from 'react';
import styles from './styles.css.js';

const imagesDefault = (props) => {
  var count = 0;
  var toMap = {};
  for (var key in props.total) {
    if (props.total[key] && count <= props.toShow) {
      toMap[key] = props.total[key];
      count++;
    }
  }
  return (
    <div style={styles.container}>
      <h1 style={styles.headfonts}>Amenities</h1>
      {Object.keys(toMap).map((amenity) => (
        <div key={amenity} style={{height: '104px', width: '156px'}}>
          <img style={styles.initialImage} name={amenity} src={props.images[amenity]}></img>
          <div style={styles.initialText}>{amenity}</div>
        </div>
      ))}
    </div>
  );
};
export default imagesDefault;

