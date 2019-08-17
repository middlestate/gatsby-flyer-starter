import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

const ProductsPageTemplate = ({
  content,
  contentComponent,
  product_image,
  meta_title,
  meta_description,
  tags,
  title,
  heading,
  subheading,
}) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {meta_title}
      </h1>
      <h2 className='subtitle is-size-6 has-text-weight-light is-italic'>{meta_description}</h2>
      <img src={product_image} alt={subheading} />
      <PostContent content={content} />
      <div style={{ marginTop: `4rem` }}>
        <h4>Tags</h4>
        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null
          }
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default ProductsPageTemplate
