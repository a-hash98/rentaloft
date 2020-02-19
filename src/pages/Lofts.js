import React from 'react'
import HeroImage from '../components/HeroImage'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Lofts = () => {
    return <HeroImage hero='loftsHero'>
        <Banner  title="our lofts">
            <Link to='/' className='btn-primary'>
                return to hompage
            </Link>
        </Banner>
    </HeroImage>

}

export default Lofts
