import React from 'react'
//set up default image
import defaultImage from '../images/room-1.jpeg'
import { Link } from 'react-router-dom'

const Loft = ({loft}) => {
    const { name, slug, images, price } = loft 

    return (
        <article className="loft">

        <div className="img-container">
            <img src={images[0] || defaultImage } alt="standard loft" />
            <div className="price-top">
                <h6>${price}</h6>
                <p>per month</p>
            </div>
            <Link to={`/lofts/${slug}`} className="btn-primary room-link">
                Facilities
            </Link>
        </div>
        <p className="room-info"> {name} </p>

        </article>
    )
}

export default Loft
