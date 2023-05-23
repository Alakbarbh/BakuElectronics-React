import React from 'react'
import '../../assets/scss/home.scss';
import images from '../../assets/images/headerlogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown, faPhone, faUser,faHeart ,faScaleBalanced,faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    return (
        <div>
            <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='logo-search'>
                            <div className='logo'>
                                <img src={images} />
                            </div>
                            <div className='search'>
                                <input placeholder='Axtarış' />
                                <div className='search-icon'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-6'>

                    <div className='row'>
                        <div className='col-6'>
                            <div className='texts'>
                                <div className='text1'>
                                    <p className='text-danger'>Kampaniyalar</p>
                                    <div className='border'></div>
                                </div>
                                <div className='text2'>
                                    <p>Mağazalar</p>
                                    <div className='border'></div>
                                </div>
                                <div className='text3'>
                                    <div className='icon'>
                                        <p>Digər</p>
                                        <div className='down-icon'>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                    <div className='border'></div>
                                </div>

                            </div>
                        </div>

                        <div className='col-6'>
                            <div className='phone'>
                                <div className='number'>
                                    <h2>143</h2>
                                </div>
                                <div className='phone-icon'>
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>

                                <div className='icons'>
                                    <div className='icon1'>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div className='icon2'>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </div>
                                    <div className='icon3'>
                                        <FontAwesomeIcon icon={faScaleBalanced} />
                                    </div>
                                    <div className='icon4'>
                                        <FontAwesomeIcon icon={faCartShopping} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default Navigation
