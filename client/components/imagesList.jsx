import React from 'react';
import styles from './styles.css.js';

const imagesList = (props) => {

  return (
    <div style={props.show ? styles.modalShow : styles.modalHide}>
      <section style={styles.imageList}>
        <div style={{display: 'block', paddingBottom: '50px'}}>
          <button style={styles.modalButton}onClick={() => {
            props.scroll();
            props.toggle();
          }}>{`<`}</button>
        </div>
        <div style={styles.modalEntry}>
          <h1 style={styles.presentTextHeader}>Special to this loft</h1>
          <p style={styles.presentTextHeader}>This home has these unique amenities</p>
          {Object.keys(props.special).map((amenity) => (
            props.special[amenity]
              ? <div key={amenity} style={styles.modalEntry}>
                <p style={styles.presentText}>{amenity}</p>
                <img name={amenity} src={props.images[amenity]} style={styles.presentImage}></img>
              </div> 
              : null
          ))}
          <h1 style={styles.presentTextHeader}>Essential Amenities</h1>
          <p style={styles.presentTextHeader}>This Airbnb Plus home comes with these amenities</p>
          {Object.keys(props.essential).map((amenity) => (
            props.essential[amenity] 
              ? <div key={amenity} style={styles.modalEntry}>
                <p style={styles.presentText}>{amenity}</p>
                <img name={amenity} src={props.images[amenity]} style={styles.presentImage}></img>
              </div> 
              : null
          ))}
          <h1 style={styles.presentTextHeader}>Not available</h1>
          <p style={styles.presentTextHeader}>This home doesn't have these amenities</p>
          {Object.keys(props.special).map((amenity) => (
            props.special[amenity] 
              ? null 
              : <div key={amenity} style={styles.modalEntry}>
                <p style={styles.notPresentText}>{amenity}</p>
                <img name={amenity} src={props.images[amenity]} style={styles.notPresentImage}></img>
              </div>
          ))}
          {Object.keys(props.essential).map((amenity) => (
            props.essential[amenity] 
              ? null 
              : <div key={amenity} style={styles.modalEntry}>
                <p style={styles.notPresentText}>{amenity}</p>
                <img name={amenity} src={props.images[amenity]} style={styles.notPresentImage}></img>
              </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default imagesList;