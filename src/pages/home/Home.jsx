import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'



const Home = () => {
  return (
    <Layout>
      <HeroSection></HeroSection>
      <Filter></Filter>
      <ProductCard></ProductCard>
    </Layout>
  )
}

export default Home
