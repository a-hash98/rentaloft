import React, { Component } from 'react'
import items from './data'
import { removeComments } from '@babel/types';

const LoftContext = React.createContext()
// <Loftontext.Provider value={}

class LoftProvider extends Component {

    state= {  
        lofts:[],
        sortedLofts:[],
        featuredLofts:[],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }


    componentDidMount(){
        let lofts = this.formatData(items)
      
        let featuredLofts = lofts.filter(loft => loft.featured === true)
        let maxPrice = Math.max(...lofts.map(item => item.price))
        let maxSize = Math.max(...lofts.map(item => item.size))

        this.setState({
            lofts, featuredLofts, sortedLofts: lofts, loading: false,
            price: maxPrice, size: maxSize

        })
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)

            let loft = {...item.fields, id, images}
            return loft
        })
        return tempItems
    }

    getLoft = (slug) => {
        let tempLofts = [...this.state.lofts]
        const loft = tempLofts.find((loft => loft.slug === slug))
        return loft
    }

    handleChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, this.filterLofts)

    }
    
    filterLofts = () => {
        let{
            lofts, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state
        //capacity from string to integer
        capacity = parseInt(capacity)
        price = parseInt(price)
        minSize = parseInt(minSize)
        maxSize = parseInt(maxSize)
        
        let tempLofts = [...lofts]
        tempLofts = type !== 'all' ? tempLofts.filter(loft => loft.type === type) : lofts
        //filter by capacity (again)
        tempLofts = capacity !== 1 ? tempLofts.filter(loft => loft.capacity >= capacity) : tempLofts
        //filter by size
        tempLofts = minSize != 0 || maxSize != 0 ? tempLofts.filter(loft => loft.size >= minSize && loft.size <= maxSize) : tempLofts
        // filter by breakfast
        tempLofts = breakfast ? tempLofts.filter(loft => loft.breakfast === true) : tempLofts
        // filter by pets
        tempLofts = pets ? tempLofts.filter(loft => loft.pets === true) : tempLofts
        // //filter by price
        tempLofts = tempLofts.filter(loft => loft.price < price)
        console.log(price)
        this.setState({
            sortedLofts: tempLofts
        })
    }


    render() {
        return (
            <LoftContext.Provider value={{...this.state, getLoft: this.getLoft, handleChange: this.handleChange}}>
            {this.props.children}
            </LoftContext.Provider>
    
        )
    }

}

const LoftConsumer = LoftContext.Consumer



export { LoftProvider, LoftConsumer, LoftContext }
