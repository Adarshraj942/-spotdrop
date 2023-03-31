import React from 'react'
import PageOne from '../CheckOutStep/PageOne'
import Navbar from '../../components/Navbar'
import Shopnavbar from '../../components/ShopNavbar/Shopnavbar'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/MediaFooter/MediaFooter'
import Footer from '../../components/Footer/Footer'
function Checkout() {
  return (
    <div>
        <Navbar />
        <MediaNavbar />
        <Shopnavbar />
        <PageOne />
        <MediaFooter />
        <Footer />
    </div>
  )
}

export default Checkout