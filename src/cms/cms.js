import CMS from 'netlify-cms-app'
import '../assets/sass/styles.sass'
import HomePagePreview from './preview-templates/HomePagePreview'
import BrandPagePreview from './preview-templates/BrandPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('brand', BrandPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
