import React, { Component } from 'react'
import { LoftContext } from '../Context'
import Loading from './Loading'

export default class FeaturedLofts extends Component {
    static contextType = LoftContext
    render() {

            const { featuredLofts } = this.context

            return <div> hello from featured lofts 
            <Loading />
            </div>
    }
}
