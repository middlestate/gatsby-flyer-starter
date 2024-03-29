import React from 'react'
// import Logo from '../../assets/img/equineadvantage_logo_white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({ logo, email, newsletter }) => {
  return (
    <footer id='contact' className='footer is-paddingless'>
      <div className='section is-ea-black'>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <p className='has-text-weight-bold has-text-light-grey is-size-2 is-size-4-mobile has-text-centered'>
              <u>LET'S STAY IN TOUCH</u>
            </p>
          </div>
        </div>
        <div className='columns is-centered is-mobile'>
          <div className='column is-half'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className='field is-grouped'>
                <p className='control'>
                  <a className='button is-ea-black has-text-white is-rounded is-inverted is-outlined' href={email}>
                    <span className='icon'>
                      <FontAwesomeIcon icon={['far', 'envelope']} />
                    </span>
                    <span className='has-text-white'>EMAIL US</span>
                  </a>
                </p>
                <p className='control'>
                  <a href={newsletter} className='button is-rounded is-ea-black has-text-white is-inverted is-outlined'>
                    <span className='icon'>
                      <FontAwesomeIcon icon='link' />
                    </span>
                    <span className='has-text-white'>NEWSLETTER</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='section is-ea-black'>
        <div className='columns is-centered'>
          <div className='column is-half'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <figure className='image is-128x128'>
                <img src={logo} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
