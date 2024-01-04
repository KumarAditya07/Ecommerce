import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'



const Home = () => {
  return (
    <Layout>
      <HeroSection></HeroSection>
      <Filter></Filter>
      <ProductCard></ProductCard>
      <Track></Track>
      <Testimonial></Testimonial>
    </Layout>
  )
}

export default Home
