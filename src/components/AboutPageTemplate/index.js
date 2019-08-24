import React, { Fragment } from 'react'
// import { Link } from 'gatsby'
import Content from '../Content'
import NavBar from '../NavBar'
import Quote from '../Quote'
import Footer from '../Footer'

const AboutPageTemplate = ({
  content,
  contentComponent,
  navbar,
  title,
  heading,
  subheading,
  heading_image,
  hero_image,
  product_image,
  advantages,
  partners,
  quote,
  footer,
  meta_title,
  meta_description,
}) => {
  const PostContent = contentComponent || Content
  return (
    <Fragment>
      <div className='section hero is-fullheight-with-navbar is-paddingless'>
        <div className='hero-head'>{/* <NavBar logo={navbar.logo} slug={navbar.brand_slug} /> */}</div>
        <div className='hero-body'>
          <div className='container content'>
            <div className='columns is-10 is-offset-1'>
              <div className='column is-half'>
                <h1 className='title is-size-2 has-text-weight-bold'>{heading}</h1>
                <h2 className='subtitle is-size-5 has-text-weight-normal'>{subheading}</h2>
              </div>
              <div className='column'>
                <img src={heading_image} alt={subheading} />
              </div>
            </div>
          </div>
        </div>
        <div
          className='hero-foot is-ea-black is-paddingless is-marginless'
          style={{
            position: 'relative',
            height: 642,
            overflow: 'hidden',
            backgroundPosition: 'center center',
          }}>
          <div
            style={{
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              top: 200,
              left: -300,
              transform: 'scale(2.5)',
              width: '100%',
              height: '100%',
              overflow: 'visible',
              backgroundImage: `url(${hero_image.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
      {/* Product Section */}
      <div className='section' style={{ marginBottom: 20 }}>
        <div className='container content'>
          <div className='columns is-centered-mobile'>
            <div className='column is-full '>
              <div className='tile is-ancestor is-paddingless is-marginless'>
                <div className='tile is-7 is-parent is-paddingless'>
                  <div className='tile is-child'>
                    {/* Product Image */}
                    <figure className='image is-3by2 is-hidden-mobile'>
                      <img style={{ paddingRight: 5 }} src={product_image} alt={subheading} />
                    </figure>
                  </div>
                </div>
                {/* Ingredients */}
                <div className='tile is-7 is-parent '>
                  <div className='tile is-child is-paddingless is-marginless'>
                    <div className='is-size-7' style={{ height: 450, width: 320, marginBottom: 120 }}>
                      <PostContent content={content} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Advantages */}
      <div className='section  is-block' style={{ paddingTop: 20 }}>
        <div className='columns is-multiline is-centered is-mobile'>
          {advantages.icon.map((images, keys) => (
            <div key={keys} className='column is-4-mobile is-1-desktop is-block'>
              <figure className='image is-64x64'>
                <img src={images.image} alt='an advantage icon' />
              </figure>
            </div>
          ))}
        </div>
      </div>
      {/* Partners */}
      <div className='section'>
        <div className='columns is-multiline is-centered is-mobile'>
          {!partners ||
            partners.logo.map((images, keys) => (
              <div key={keys} className='column is-4-mobile is-1-desktop is-block'>
                <figure className='image is-96x96'>
                  <img src={images.image} alt='an advantage icon' />
                </figure>
              </div>
            ))}
        </div>
      </div>
      {/* Quote */}
      <div className='section is-marginless is-paddingless'>
        {!quote || <Quote text={quote.text} name={quote.name} title={quote.title} image={quote.image} />}
      </div>
      {/* Footer */}
      <div className='section is-paddingless is-marginless' style={{ marginTop: 50, paddingTop: 50 }}>
        {/* <Footer logo={footer.logo} email={footer.email} newsletter={footer.newsletter} /> */}
      </div>
    </Fragment>
  )
}

export default AboutPageTemplate
