import React, { Component } from 'react'
import Title from './Title'
import Loft from '../pages/Loft'
import { LoftContext } from '../Context'
import Loading from './Loading'
 

export default class FeaturedLofts extends Component {
    static contextType = LoftContext
    render() {

            let { loading, featuredLofts } = this.context
            featuredLofts = featuredLofts.map(loft => {
                return <Loft id={loft.id} loft={loft} />
            })
            return (
                <section className="featured-rooms">
                    <Title title="featured lofts"/>
                    <div className="featured-rooms-center">
                        {loading ? <Loading /> : featuredLofts }
                    </div>

                </section>
            )
    }
}
