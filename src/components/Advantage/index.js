import React from 'react'
import PropTypes from 'prop-types'

const Advantage = ({ gridItems }) => (
  <div className='section'>
    <div className='columns is-centered'>
      <div className='column is-half'>
        <h1 className='is-size-4 has-text-ea-black has-text-centered'><strong><u>WHAT MAKES EA DIFFERENT</u></strong></h1>
      </div>
    </div>
    <div className='column is-three-fifths is-offset-one-fifth'>
      <div className='columns is-multiline is-centered '>
        {gridItems.map(({ image, text }) => (
          <div key={image} className='column is-one-third'>
            {/* <div className='level-item'> */}
            {/* <figure className='image is-128x128' > */}
            <img alt={image} src={image} style={{ margin: 50 }} />
            {/* </figure> */}
            {/* </div> */}
            <p className='is-size-5 has-text-ea-black has-text-centered' style={{ paddingTop: 20 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

Advantage.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Advantage
