import React from 'react'
import HeroImage from "../components/HeroImage"
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'
import Services from '../components/Services'

const Home = () => {

    return (
    <>
    <HeroImage>
        <Banner title="Spectacular loft apartments" subtitle="starting at £1200">
            <Link to='/lofts' className="btn-primary">
                our lofts
            </Link>
        </Banner>
    </HeroImage>
    <Services />
    </>
    )
}

export default Home
