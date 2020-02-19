import React, { Component } from 'react'
import items from './data'

const LoftContext = React.createContext()
// <Loftontext.Provider value={}

class LoftProvider extends Component {

    state= {  
        lofts:[],
        sortedLofts:[],
        featuredLofts:[],
        loading: true
    }


    componentDidMount(){
        let lofts = this.formatData(items)
      
        let featuredLofts = lofts.filter(loft => loft.featured === true)
        this.setState({
            lofts, featuredLofts, sortedLofts: lofts, loading: false

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

    render() {
        return (
            <LoftContext.Provider value={{...this.state, getLoft: this.getLoft}}>
            {this.props.children}
            </LoftContext.Provider>
    
        )
    }

}

const LoftConsumer = LoftContext.Consumer



export { LoftProvider, LoftConsumer, LoftContext }
