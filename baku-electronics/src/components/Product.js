import React from 'react'
import '../assets/scss/product.scss';
import Image from '../assets/images/kondisioner1.jpg'
import Image3 from '../assets/images/kondisioner2.jpg'
import Image1 from '../assets/images/ptiminutka.jpg'
import Image2 from '../assets/images/ptiminutka2.jpg'
import Image4 from '../assets/images/ptiminutka4.jpg'
import Image5 from '../assets/images/soyuducu1.jpg'
import Image6 from '../assets/images/soyuducu2.jpg'
import Image7 from '../assets/images/soyuducu3.jpg'
import Image8 from '../assets/images/soyuducu4.jpg'
import Image9 from '../assets/images/soyuducu5.jpg'
import Image10 from '../assets/images/soyuducu6.jpg'
import Image11 from '../assets/images/soyuducu7.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Product() {
  return (
    <div>
      <div className='container'>
        <div className='category'>
          <div className='row'>
            <div className='col-4'>
              <div className=''>Kampaniyada iştirak edən məhsullar</div>
              <ul className='list-group'>
                <li><span>Kondisionerlər</span><span>(32)</span></li>
                <li><span>Paltaryuyan maşınlar</span>(61)<span></span></li>
                <li><span>Kombi</span><span>(19)</span></li>
                <li><span>Soyuducular </span><span>(71)</span></li>
                <li><span>Tozsoranlar </span><span>(46)</span></li>
                <li><span>Qabyuyan maşınlar</span>(28)<span></span></li>
                <li><span>Bişirmə panelləri</span><span>(31)</span></li>
                <li><span>Quraşdırılan sobalar</span><span>(29)</span></li>
                <li><span>Aspiratorlar</span><span>(35)</span></li>
                <li><span>Mətbəx plitələri</span><span>(3)</span></li>
                <li><span>Qəhvə dəmləyən, qəhvə maşınları</span><span>(34)</span></li>
                <li><span>Tosterlər</span><span>(44)</span></li>
                <li><span>Blenderlər</span><span>(95)</span></li>
                <li><span>Mikserlər</span><span>(30)</span></li>
                <li><span>Elektrik çaydanlar və termopotlar</span><span>(64)</span></li>
                <li><span>Qəhvə üyüdücüləri</span><span>(3)</span></li>
                <li><span>Ətçəkən maşınlar </span><span>(29)</span></li>
                <li><span>Elektromaşa</span><span>(8)</span></li>
                <li><span>Fenlər</span><span>(10)</span></li>
                <li><span>Ütülər və buxar generatorları </span><span>(79)</span></li>
                <li><span>Mətbəx kombaynları</span><span>(42)</span></li>
                <li><span>Çörək bişirən</span><span>(8)</span></li>
                <li><span>Buxarlı bişiricilər</span><span>(1)</span></li>
                <li><span>Şirəçəkənlər </span><span>(24)</span></li>
                <li><span>Saç qırxan</span><span>(8)</span></li>
                <li><span>Trimmerlər</span><span>(15)</span></li>
                <li><span>Epilyatorlar</span><span>(7)</span></li>
                <li><span>Mikroiqlim</span><span>(9)</span></li>
                <li><span>Ev və ofis telefonları</span><span>(17)</span></li>
                <li><span>Smartfonlar, mobil telefonlar</span><span>(257)</span></li>
                <li><span>Qapaqlar</span><span>(25)</span></li>
                <li><span>Mətbəx aksesuarları</span><span>(35)</span></li>
                <li><span>Tavalar</span><span>(125)</span></li>
                <li><span>Qazanlar</span><span>(44)</span></li>
                <li><span>Tava qazan dəstləri</span><span>(29)</span></li>
                <li><span>Boşqablar və salat qabları </span><span>(14)</span></li>
                <li><span>Kronşteyn və divar asılqanları </span><span>(15)</span></li>
                <li><span>Mətbəx tərəziləri</span><span>(3)</span></li>
                <li><span>Kombi radiatorları</span><span>(5)</span></li>
                <li><span>Şəbəkə avadanlığı</span><span>(5)</span></li>
                <li><span>Döşəmə tərəziləri</span><span>(2)</span></li>
                <li><span>Yemək dəstləri</span><span>(5)</span></li>
                <li><span>Televizorlar</span><span>(52)</span></li>
                <li><span>Bişirmə üçün qablar</span><span>(19)</span></li>
                <li><span>Multistayler</span><span>(1)</span></li>
                <li><span>Notbuklar</span><span>(113)</span></li>
                <li><span>Ev kinoteatrları və saundbarlar</span><span>(13)</span></li>
                <li><span>Mikrodalğalı sobalar</span><span>(5)</span></li>
                <li><span>Fotoaparatlar</span><span>(5)</span></li>
                <li><span>Dondurucu kameralar</span><span>(1)</span></li>
                <li><span>Xarici toplayıcı disklər HDD və SSD</span><span>(1)</span></li>
                <li><span>Elektrik üzqırxan</span><span>(11)</span></li>
                <li><span>Elektrik sobalar</span><span>(1)</span></li>
                <li><span>Printerlər</span><span>(9)</span></li>
                <li><span>Kartriclər</span><span>(3)</span></li>
                <li><span>USB və AUX kabellər</span><span>(25)</span></li>
                <li><span>Notbuk üçün çantalar</span><span>(15)</span></li>
                <li><span>Su qızdırıcıları, qazanlar, kolonkalar</span><span>(2)</span></li>
                <li><span>Buxar dolabı</span><span>(2)</span></li>
                <li><span>Çəngəl-bıçaq dəstləri</span><span>(7)</span></li>
                <li><span>Quruducu maşınlar</span><span>(4)</span></li>
                <li><span>Çaydan və termoslar</span><span>(4)</span></li>
                <li><span>Musiqi mərkəzləri</span><span>(8)</span></li>
                <li><span>Planşetlər</span><span>(37)</span></li>
                <li><span>Samovarlar</span><span> (1)</span></li>
                <li><span>Xarici akkumulyatorlar, Power Bank</span><span>(14)</span></li>
                <li><span>Qulaqlıqlar</span><span>(54)</span></li>
                <li><span>Elektrik diş fırçaları, irriqatorlar</span><span>(5)</span></li>
                <li><span>Adapterlər</span><span>(12)</span></li>
                <li><span>Klaviatura və kompüter siçanları</span><span>(16)</span></li>
                <li><span>Tək divanlar</span><span>(21)</span></li>
                <li><span>Vitrin</span><span>(11)</span></li>
                <li><span>Masa</span><span>(24)</span></li>
                <li><span>Döşəklər</span><span>(29)</span></li>
                <li><span>Alt TV stendlər</span><span> (31)</span></li>
                <li><span>Yataq yanı tumbalar</span><span>(11)</span></li>
                <li><span>Dolablar</span><span>(8)</span></li>
                <li><span>Iş masası</span><span>(4)</span></li>
                <li><span>Üst TV stendlər</span><span>(25)</span></li>
                <li><span>Komod və makiyaj masası</span><span>(13)</span></li>
                <li><span>Konsollar</span><span>(22)</span></li>
                <li><span>Kreslolar</span><span>(12)</span></li>
                <li><span>Kitab dolabı </span><span>(4)</span></li>
                <li><span>Künc divanlar</span><span>(1)</span></li>
                <li><span>Dəstlər</span><span>(1)</span></li>
                <li><span>Velosipedlər</span><span>(17)</span></li>
                <li><span>Hamam üçün tekstil</span><span>(1)</span></li>
                <li><span>Smart saatlar və fitnes qolbaqları</span><span>(7)</span></li>
                <li><span>Elektrosamokatlar</span><span>(12)</span></li>
                <li><span>Dispenserlər</span><span>(1)</span></li>
                <li><span>Uzatma kabelləri və başlıqlar </span><span>(2)</span></li>
                <li><span>Elektroskuter</span><span>(2)</span></li>
                <li><span>Müxtəlif</span><span>(4)</span></li>
                <li><span>Müxtəlif</span><span>(5)</span></li>
                <li><span>Smartfon üçün qeympadlar, triqqerlər </span><span>(1)</span></li>
                <li><span>Çay və qəhvə dəstləri</span><span> (5)</span></li>
                <li><span>Qiroskuterlər və siqveylər</span><span> (1)</span></li>
                <li><span>Masaüstü kompüterlər</span><span> (1)</span></li>
                <li><span>Konvektorlar</span><span> (1)</span></li>
                <li><span>Yaddaş kartları</span><span>(3)</span></li>
                <li><span>Fleş toplayıcı</span><span>(3)</span></li>
                <li><span>Fritozlar</span><span>(3)</span></li>
                <li><span>Moped</span><span>(18)</span></li>
                <li><span>Gödəkçə</span><span>(5)</span></li>
                <li><span>Əlcək</span><span>(2)</span></li>
                <li><span>Bot</span><span>(2)</span></li>
                <li><span>Kamuflyaj</span><span>(1)</span></li>
                <li><span>Yorğanlar</span><span>(1)</span></li>
                <li><span>Yastıqlar</span><span>(1)</span></li>
                <li><span>Veb kameralar</span><span>(3)</span></li>
                <li><span>Selfi çubuqları və ştativlər</span><span>(1)</span></li>
                <li><span>Ekşn kameralar</span><span>(3)</span></li>
                <li><span>Monitorlar</span><span>(3)</span></li>
                <li><span>Monobloklar</span><span>(3)</span></li>
                <li><span>Video oyunlar</span><span>(8)</span></li>
                <li><span>Ağıllı ev</span><span>(1)</span></li>
                <li><span>Dolab</span><span>(6)</span></li>
                <li><span>Portativ dinamiklər və akustik sistemlər </span><span>(42)</span></li>
                <li><span>Müxtəlif </span><span>(1)</span></li>
                <li><span>Tikiş maşınları </span><span>(1)</span></li>
              </ul>
            </div>



            <div className='col-8'>
              <div className='row'>
                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image} />
                    </div>
                    <div className='sale'>
                      <span>300₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kondisioner LG A12CMH.NGGF-KIT, 12000 BTU / 30-40 m2, inverter</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1899.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 106 ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image1} />
                    </div>
                    <div className='sale'>
                      <span>300₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kombi DemirDöküm Atron 24 SM-KIT</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1499.99₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 84  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image2} />
                    </div>
                    <div className='sale'>
                      <span>350₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kombi DemirDöküm Atron 28 SM-KIT</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1699.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 95  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image3} />
                    </div>
                    <div className='sale'>
                      <span>450₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kondisioner LG I12CFH.NGGF-KIT, 12000 BTU, İnverter</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1749.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 98  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image3} />
                    </div>
                    <div className='sale'>
                      <span>400₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kondisioner LG I12CFH.NGGF-KIT, 12000 BTU, İnverter</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1649.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 92  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image3} />
                    </div>
                    <div className='sale'>
                      <span>550₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kondisioner LG I12CFH.NGGF-KIT, 12000 BTU, İnverter</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>2399.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 134   ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image4} />
                    </div>
                    <div className='sale'>
                      <span>300₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kombi DemirDöküm Nitron Plus 24 SM-KIT</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1599.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 89   ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image4} />
                    </div>
                    <div className='sale'>
                      <span>400₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kombi DemirDöküm Nitron Plus 30 SM-KIT, 30 kW</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1999.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 112   ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image5} />
                    </div>
                    <div className='sale'>
                      <span>270₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kondisioner LG I12CFH.NGGF-KIT, 12000 BTU, İnverter</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1519.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 85  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image6} />
                    </div>
                    <div className='sale'>
                      <span>600₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Soyuducu LG GR-X257CSAV Side by Side Refrigerator</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>5999.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 334 ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image7} />
                    </div>
                    <div className='sale'>
                      <span>250₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>import Image6 from '../assets/images/soyuducu2.jpg'</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1499.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 84  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image8} />
                    </div>
                    <div className='sale'>
                      <span>300₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Soyuducu BOSCH KGN36NL30U</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1599.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 89  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image9} />
                    </div>
                    <div className='sale'>
                      <span>400₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Kondisioner LG I12CFH.NGGF-KIT, 12000 BTU, İnverter</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1899.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 106  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image10} />
                    </div>
                    <div className='sale'>
                      <span>350₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Soyuducu BOSCH KGN36XW30U</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>1799.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 100  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image11} />
                    </div>
                    <div className='sale'>
                      <span>350₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Soyuducu BOSCH KGN49LB30U</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>2499.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 139  ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-4'>
                  <div className='products'>
                    <div className='image'>
                      <img src={Image11} />
                    </div>
                    <div className='sale'>
                      <span>430₼</span>
                      <p>Nağd alışa</p>
                      <div className='sales'>
                        <p1>Endirim</p1>
                      </div>
                    </div>
                    <div className='star-icon'>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <div className='comment'>0 rəy</div>
                    </div>
                    <div className='name'>
                      <p>Soyuducu BOSCH KGN56LB30U</p>
                    </div>
                    <div className='price-moon'>
                      <div className='price'>
                        <p>Qiymət</p>
                        <div className='manat'>
                          <span>2799.99 ₼</span>
                        </div>
                      </div>
                      <div className='moon'>
                        <p>
                          Hissə-hissə ödəniş
                        </p>
                        <div className='moons'>
                          <span>
                            18 ay 156   ₼
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <ul className='paginates'>
                <li className='paginate'>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Product
