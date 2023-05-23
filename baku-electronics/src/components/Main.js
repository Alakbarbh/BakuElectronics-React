import React from 'react'
import '../assets/scss/main.scss';
import Image from '../assets/images/background.jpg'
import Product from './Product';
function Main() {
  return (
    <div>
      <div className='border'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <div className='image'>
              <img src={Image} />
            </div>
          </div>
          <div className='col-6'>
            <div className='all-companies'>
              <p>Bütün kompaniyalar</p>
            </div>
            <div className='independence'>
              <p>Müstəqillik Günü münasibətilə sənə xüsusi təkliflərimiz var!</p>
            </div>
            <div className='smart1'>
              <p>15-31 may tarixləri arasında alış-verişlərdə müstəqilsən! </p>
            </div>
            <div className='smart2'>
              <p1>Nağd alışda 50 %-dək endirim!</p1>
            </div>
            <div className='smart3'>
              <p2>Məişət texnikası, TV və kondisioner 0 0 0 18 AY </p2>
            </div>
            <div className='smart4'>
              <p3>Smart-saat və aksesuarlar 0 0 18 AY </p3>
            </div>
            <div className='detail'>
              <p>Ətraflı</p>
            </div>
            <div className='company'>
              <p>Kampaniyanın sonuna qalıb</p>
            </div>
            <div className='date'>
              <p>08gün:04saat:17dəq</p>
            </div>
          </div>
        </div>
     <Product/>
      </div>
    </div>
  )
}

export default Main
