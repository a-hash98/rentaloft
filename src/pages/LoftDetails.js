import React, { Component } from 'react'
import defaultImage from '../images/room-1.jpeg'
import HeroImage from '../components/HeroImage'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { LoftContext } from '../Context'
import { runInThisContext } from 'vm';

class LoftDetails extends Component {

    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultImage
        }
        }
    static contextType = LoftContext

    render() {
        const { getLoft } = this.context
        const loft = getLoft(this.state.slug)

        if (!loft){
            return (
                <div className="error">
                <h3> Loft not found. </h3>
                <Link to='/lofts' className= 'btn-primary'>Browse lofts</Link>
                </div>
            )
        }
        
        const { name, descriptiom, capacity, size, price, extras, breakfast, pets, images } = loft
        return (
            
        <HeroImage hero='loftsHero'>
            <Banner title={`${name} loft`}>
                <Link to='/lofts'>Browse lofts</Link>
            </Banner>
        </HeroImage>
        
        )
    }
}

export default LoftDetails