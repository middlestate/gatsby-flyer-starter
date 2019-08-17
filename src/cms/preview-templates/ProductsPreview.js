import React from 'react'
import PropTypes from 'prop-types'
import ProductsPageTemplate from '../../components/ProductsPageTemplate'

const ProductPreview = ({ entry, widgetFor }) => {
  return (
    <div className='container content'>
      <div className='columns'>
        <div className='column is-10 is-offset-1'>
          <ProductsPageTemplate
            content={widgetFor('body')}
            product_image={entry.getIn(['data', 'product_image'])}
            meta_title={entry.getIn(['data', 'meta_title'])}
            meta_description={entry.getIn(['data', 'meta_description'])}
            title={entry.getIn(['data', 'title'])}
            heading={entry.getIn(['data', 'heading'])}
            subheading={entry.getIn(['data', 'subheading'])}
            slug={entry.getIn(['data', 'slug'])}
          />
        </div>
      </div>
    </div>
  )
}

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProductPreview
