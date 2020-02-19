import React from 'react'
import { useContext } from 'react'
import { LostContext } from '../Context'
import Title from '../components/Title'

const uniqueOptions = (items, type) => {
    return [...new Set(items.map(item => item[type]))]
}
const LoftsFilter = () => {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = comtext
    }
    return (
        <section className="filter-container">
           <Title title='search lofts' />
           <form className="filter-form">
               <div className="form-group">
                   <label htmlFor="type">loft type</label>
                   <select name="type" id="" value={type} className="form-control" onChange={handleChange}>

                   </select>
           </form>
        </section>    
    )
}

export default LoftsFilter
