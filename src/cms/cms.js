import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import MainPagePreview from './preview-templates/MainPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('home', MainPagePreview)
CMS.registerPreviewTemplate('products', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
