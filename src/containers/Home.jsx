import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import parallax1 from '../assets/static/asia-2181888_1920.jpg';
import parallax2 from '../assets/static/navigation-1048294_1920.jpg';
import parallax3 from '../assets/static/city-3126072_1920.jpg';
import '../assets/styles/components/Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className='bg_img_01'>
          
          <div>
            <div className='caption_01'>
              <span>CLICK 01</span>
            </div>
          </div>

          <div className='bg_txt_01'>
            <h3 className='h3'>Demo</h3>
            <p>Scrolling test</p>
          </div>

        </div>

        <div className='bg_img_02' />

        <div className='bg_img_03' />
      </div>
    );
  }
}

export default Home;
