import React from 'react';
import $ from 'jquery';
import ImagesList from './imagesList.jsx';
import ImagesDefault from './imagesDefault.jsx';
import styles from './styles.css.js';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.scroll = this.scroll.bind(this);
    this.buttonRef = React.createRef();
    this.topRef = React.createRef();
    this.state = {
      show: false,
      specialAmenities: {},
      essentialAmenities: {},
      totalAmenities: {},
      toShow: 0,
      total: 0,
      urls: {},
      showState: false,
    };
  }

  componentDidMount() {
    var that = this;
    $.ajax({
      url: `${document.URL}/amenities/`
    }).done((data) => {
      data.special = {};
      data.essential = {};
      for (let amenity in data.amenities) {
        if (data.isSpecial[amenity]) {
          data.special[amenity] = data.amenities[amenity];
        } else {
          data.essential[amenity] = data.amenities[amenity];
        }
      }
      var total = { ...data.special, ...data.essential };
      var count = 0;
      for (var key in total) {
        total[key] ? count++ : null;
      }
      var toShow = (count < 1) ? count : Math.floor(count*0.6);
      that.setState({
        specialAmenities: data.special,
        essentialAmenities: data.essential,
        totalAmenities: total,
        toShow: toShow,
        total:count,
        urls: data.URLs,
      });
    });
  }

  toggleModal () {
    if (!this.state.show) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'scroll';
    }
    this.scroll();
    this.setState({
      show: !this.state.show,
    });
  }

  scroll () {
    var that = this;
    window.scrollTo({
      top: that.topRef.current.offsetTop,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div ref={this.topRef}>
        <ImagesList special={this.state.specialAmenities} essential={this.state.essentialAmenities} 
          images={this.state.urls} toggle={this.toggleModal} show={this.state.show}
          scroll={this.scroll}/>
        <ImagesDefault total={this.state.totalAmenities} toShow={this.state.toShow}
          images={this.state.urls} />
        <button style={styles.initialButton} ref={this.buttonRef}
        onMouseOver={() => this.buttonRef.current.style.textDecoration='underline'} 
        onMouseOut={() => this.buttonRef.current.style.textDecoration='none'}
        onClick={this.toggleModal}>Show All {this.state.total} Amenities</button>
      </div>
    );
  }
}

export default Amenities;