import React from 'react'
import HeroImage from "../components/HeroImage"
import Banner from "../components/Banner"
import { Link } from 'react-router-dom'

const Error = () => {

    return <HeroImage>
        <Banner title= "404" subtitle="Page not found.">
            <Link to="/" className="btn-primary">
                return Home
            </Link>
        </Banner>
    </HeroImage>
}

export default Error