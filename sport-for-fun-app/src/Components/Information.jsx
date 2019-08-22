import React from 'react';
import './Information.scss'

import Banner from './Information/Banner';
import Details from './Information/Details';
import Slideshow from './Information/Slideshow';
import Description from './Information/Description';

import * as cinter from  "./HomePage/CityDB.json";

 export default class Information extends React.Component {

   constructor(props) {
     super(props);
     console.log("i am 2",this.props);

     this.state = {
       id: this.props.match.params.id,
       Info : undefined,
       centerName:undefined ,
       img1:undefined ,
       img2:undefined ,
       img3:undefined ,
       contact: undefined,
       comments:undefined,
       website:undefined,
       visitors:undefined,
       address:undefined,
       addressLink:undefined,
       openingHours:undefined,
       activities:undefined,
       BannerImg: undefined,

     };
   }

componentDidMount() {
  this.setState({
    description: cinter.default.cities[this.props.match.params.city].centers[this.state.id -1 ].description,
    centerName: cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].centerName,
    sportKind: cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].sportKind,
    img1:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].images[0] ,
    img2:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].images[1] ,
    img3:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].images[2] ,
    contact: cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].contact,
    website:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].website,
    comments:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].comments,
    visitors:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].visitors,
    address:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].address,
    addressLink:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].addressLink,
    openingHours:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].openingHours,
    activities:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].activities,
    BannerImg:cinter.default.cities[this.props.match.params.city].centers[this.state.id -1].BannerImg,
  });
}
   render() {
     console.log("i am",this.props.match.params.id);
       return (
       <div>
        <Banner
          img1={this.state.BannerImg}
          sportKind={this.state.sportKind}
          />
          <div className="Image">
           <Slideshow
             img1={this.state.img1}
             img2={this.state.img2}
             img3={this.state.img3}

             />
          </div>
          <div className="Deta">
           <Details
              contact={this.state.contact}
              website={this.state.website}
             comments={this.state.comments}
             visitors={this.state.visitors}
             address={this.state.address}
             openingHours={this.state.openingHours}
             activities={this.state.activities}
             addressLink={this.state.addressLink}


             />
          </div>
          <div className="Des">
           <Description
             des={this.state.description}
             centerName={this.state.centerName}
             />
          </div>


       </div>

     );
   }

 }
