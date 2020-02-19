import React from 'react'
import { useContext } from 'react'
import { LoftContext } from '../Context'
import Title from '../components/Title'

const getUniqueOptions = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
const LoftsFilter = ({lofts}) => {

    const context = useContext(LoftContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context

    
    let types = getUniqueOptions(lofts, "type")
    types = ["all", ...types]
    types = types.map((item, index) => {
          return <option value={item} key={index}>{item}</option>
    })
    let guests = getUniqueOptions(lofts, "capacity")
    guests = guests.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
  })

    return (
        //TYPE FILTER
        <section className="filter-container">
           <Title title='search lofts' />
        <form className="filter-form">
               <div className="form-group">
                   <label htmlFor="type">loft type</label>
                   <select name="type" id="" value={type} className="form-control" onChange={handleChange}>
                    {types}
                   </select>
                </div>
                <div className="form-group">
                   <label htmlFor="capacity">guests</label>
                   <select name="capacity" id="" value={capacity} className="form-control" onChange={handleChange}>
                    {guests}
                   </select>
                </div>
           </form> 
        </section>    

        //GUEST FILTER

    )

}
export default LoftsFilter
