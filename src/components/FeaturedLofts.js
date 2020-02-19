import React, { Component } from 'react'
import { LoftContext } from '../Context'

export default class FeaturedLofts extends Component {
    static contextType = LoftContext
    render() {

            const value = this.context;
            console.log(value)

            return <div> hello from featured lofts {value} </div>
        
    }
}
