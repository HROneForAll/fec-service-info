import React from 'react';
import $ from 'jquery';
import ImagesList from './imagesList.jsx';
import ImagesDefault from './imagesDefault.jsx';
import styles from './styles.css.js';

class Amenities extends React.Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      show: false,
      specialAmenities: {},
      essentialAmenities: {},
      totalAmenities: {},
      toShow: 0,
      urls: {},
      showState: false,
    };
  }

  componentDidMount() {
  	var index = Math.floor(Math.random() * 100);
    var that = this;
    $.ajax({
      url: document.URL + '/amenities/'
    }).done((data) => {
      var total = Object.assign(data.room[0].amenities.special,data.room[0].amenities.essential);
      that.setState({
        specialAmenities: data.room[0].amenities.special,
        essentialAmenities: data.room[0].amenities.essential,
        totalAmenities: total,
        toShow: Math.floor(Object.keys(total)*0.4),
        urls: data.URLs[0],
      });
    });
  }

  toggleModal () {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div>
        <ImagesList special={this.state.specialAmenities} essential={this.state.essentialAmenities} 
          images={this.state.urls} toggle={this.toggleModal} show={this.state.show}/>
        <ImagesDefault total={this.state.totalAmenities} toShow={this.state.toShow}
          images={this.state.urls} />
        <button onClick={this.toggleModal}>Show All {Object.keys(this.state.totalAmenities).length} Amenities</button>
      </div>
    );
  }
}

export default Amenities;