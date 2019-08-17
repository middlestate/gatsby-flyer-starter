import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import ProductsPreview from './preview-templates/ProductsPreview'
import HighlightsPagePreview from './preview-templates/HighlightsPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('products', ProductsPreview)
CMS.registerPreviewTemplate('highlights', HighlightsPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
