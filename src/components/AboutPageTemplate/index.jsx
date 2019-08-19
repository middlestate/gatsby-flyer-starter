import React, {Fragment} from 'react'
// import { Link } from 'gatsby'
import Content from '../Content'
import NavBar from '../NavBar'
import Quote from '../Quote'
import Footer from '../Footer'

const AboutPageTemplate = ({
  content,
  contentComponent,
  nav_logo,
  title,
  heading,
  subheading,
  heading_image,
  hero_image,
  product_image,
  ingredients,
  advantages,
  quote,
  footer_logo,
  email,
  newsletter,
  meta_title,
  meta_description,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Fragment>
      <NavBar logo={nav_logo} />
      <div>
        <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>{meta_title}</h1>
        <h2 className='subtitle is-size-6 has-text-weight-light is-italic'>{meta_description}</h2>
        <img src={heading_image} alt={subheading} />
        <img src={hero_image.image} />
        <div className='columns is-multiline is-mobile is-centered'>
          <div className='column is-5 is-half-mobile'>
            <figure className='image is-256x256 is-hidden-mobile'>
              <img style={{ paddingRight: 55 }} src={product_image} alt={subheading} />
            </figure>
          </div>
          <div className='column is-4 is-half-mobile'>
            <div className='is-size-7' style={{ height: 700, width: 320, float: 'right' }}>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </div>
      <Footer
        logo={footer_logo}
        email={email}
        newsletter={newsletter}
      />
    </Fragment>
  )
}

export default AboutPageTemplate