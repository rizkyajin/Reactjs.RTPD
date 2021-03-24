import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Program Training and Development</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='New Deployed Bancassurance Financial Advisor'
              label='Roadmap NDBFA'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Assesment New BFA dan Junior BFA'
              label='Assesment BFA'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Sesi Coaching dan Mentoring BFA'
              label='Coaching and Mentoring'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Program pelatihan petugas penjualan BRILife seluruh Indonesia'
              label='Nasional Program'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Program Development Region'
              label='PDR'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
