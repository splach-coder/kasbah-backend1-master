import hero from './hero'
import activitySection from './activitySection'
import roomSection from './roomSection'
import roomType from './roomType'
import roomsAndRatesPage from './roomsAndRatesPage'
import poolAndGardensPage from './poolAndGardensPage'
import poolPage from './poolPage'
import gardenPage from './gardenPage'
import restaurantAndBarPage from './restaurantAndBarPage'
import diningType from './diningType'
import diningPage from './diningPage'
import {lunchNonResidentsPage, menuItem} from './lunchNonResidentsPage'
import { roomConfiguration, familiesPage } from './familiesPage'
import menusAndDrinksPage from './menusAndDrinksPage'
import eventsPage from './eventsPage'
import offersPage from './offersPage'
import offer from './offer'
import contactPage from './contactPage'
import ratesPage from './ratesPage'
import infoCard from './objects/infoCard'
import rate from './objects/rate'
import pressPage from './pressPage'
import guestComment from './guestComment'
import pressReview from './pressReview'
import excursion from './excursion'
import excursionsPage from './excursionsPage'
import priceVariant from './objects/priceVariant'
import excursionPrice from './objects/excursionPrice'
import excursionPricesPage from './excursionPricesPage'
import galleryImage from './objects/galleryImage'
import excursionGalleryPage from './excursionGalleryPage'
import category from './category'
import post from './post'
import blogPage from './blogPage'
import sitemapPage from './sitemapPage'
import feature from './feature'
import homePage from './homePage'

export const schemaTypes = [
    // Homepage and main sections
    hero, 
    feature, 
    homePage, 
    category, 
    post, 
    blogPage, 
  
    // Rooms and accommodations
    roomsAndRatesPage,
    roomType, 
    roomConfiguration,
    rate, 
    ratesPage, 
    familiesPage, 
    priceVariant, 
  
    // Dining & restaurants
    restaurantAndBarPage, 
    diningPage, 
    diningType, 
    menusAndDrinksPage, 
    menuItem, 
    lunchNonResidentsPage, 
    offersPage, 
    offer, 
  
    // Excursions & activities
    excursionsPage, 
    excursion, 
    excursionPricesPage, 
    excursionPrice, 
    excursionGalleryPage, 
    activitySection, 
  
    // Leisure areas
    poolAndGardensPage, 
  
    // Gallery
    galleryImage, 
  
    // Reviews & press
    guestComment, 
    pressReview, 
    pressPage, 
  
    // Events
    eventsPage, 
  
    // Info pages
    infoCard, 
    contactPage, 
    sitemapPage
  ];
  