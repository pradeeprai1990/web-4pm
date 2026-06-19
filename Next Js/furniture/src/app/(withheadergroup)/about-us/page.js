import React from 'react'
import MainHeading from '../components/common/MainHeading'
import TeamSection from '../components/about-components/TeamSection'
export const metadata = {
 
};
export default function AboutUs() {
  metadata.title="About Us - E-commerce App"
  metadata.description="Learn more about our E-commerce App and our dedicated team. We are passionate about providing the best online shopping experience, offering a wide range of products, secure payments, and fast delivery. Meet the people behind the scenes who make it all possible!"
  return (
    <div>
        <MainHeading title="About Us"/>
        <TeamSection/>
    </div>
  )
}
