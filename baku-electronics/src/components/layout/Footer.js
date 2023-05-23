import React from 'react'
import '../../assets/scss/footer.scss';
import Image from '../../assets/images/visa.jpg'
import Image1 from '../../assets/images/fb.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='informations'>
                <div className='information'>
                  <p>Məlumat</p>
                </div>
                <div className='text1'>
                  <p>Kompaniyalar</p>
                </div>
                <div className='text2'>
                  <p>Müştəri kartı</p>
                </div>
                <div className='text3'>
                  <p>Brendlər</p>
                </div>
                <div className='text4'>
                  <p>Bloq</p>
                </div>
              </div>

              <div className='payment'>
                <div className='pay'>
                  <p>Ödəniş:</p>
                </div>
                <div className='image'>
                  <img src={Image} />
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='informations'>
                <div className='information'>
                  <p>Şirkət</p>
                </div>
                <div className='text1'>
                  <p>Şirkət haqqında</p>
                </div>
                <div className='text2'>
                  <p>Mağazalar</p>
                </div>
                <div className='text3'>
                  <p>Vakansiyalar</p>
                </div>
                <div className='text4'>
                  <p>Korporativ satışlar</p>
                </div>
              </div>

              <div className='payment'>
                <div className='pay'>
                  <p>Bizə qoşulun:</p>
                </div>
                <div className='image'>
                  <img src={Image1} />
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='informations'>
                <div className='information'>
                  <p>Alıcılara</p>
                </div>
                <div className='text1'>
                  <p>Çatdırılma və ödəniş</p>
                </div>
                <div className='text2'>
                  <p>Zәmanәt</p>
                </div>
                <div className='text3'>
                  <p>Servis mərkəzləri</p>
                </div>
                <div className='text4'>
                  <p>Nisyə alış</p>
                </div>
              </div>

              <div className='payment'>
                <div className='pay'>
                  <p>© 2018 - 2023 bakuelectronics.az</p>
                </div>
                <div className='image'>
                  <p>Məxfilik siyasəti</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='center'>
                <p>Məlumat Mərkəzi</p>
                <div className='time'>
                  <span>9:00 - 20:00 (hər gün)</span>
                </div>
                <div className='phone'>
                  <FontAwesomeIcon icon={faPhone} />
                  <div className='number'>
                    <p>143</p>
                  </div>
                </div>
                <div className='info'>
                    <p>info@bakuelectronics.az</p>
                </div>
                <div className='owner'>
                    <p>Saytın hazırlanması</p>
                    <span>Həsənov Ələkbər</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
