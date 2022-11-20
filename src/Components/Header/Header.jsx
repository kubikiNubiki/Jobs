import React, { Component } from 'react'
import "./header.css"
import Hlogo from '../../Components/img/lodo-header.jpg'
export default class Header extends Component {
  render() {
    function name(){
      let Name = 90;
      return Name;
    }
    return (
      <div className="container">
        <div className="main-header">
          <input type="search" name="Search" placeholder="Search" id='search'/>
        </div>
        <img src={Hlogo} alt="#" id='h-logo' />
        <div className="main-section">
          <h1>are you want working then join us</h1>
        <p className='text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur blanditiis, repellat similique vel maiores tenetur sed a. Facere quae, voluptatem rerum cum architecto, sed adipisci distinctio dicta eos asperiores accusantium?</p>
        </div>
      </div>
    )
  }
}
