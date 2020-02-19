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

    
    let options = getUniqueOptions(lofts, "type")
    options = ["all", ...options]
    options = options.map((item, index) => {
          return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
           <Title title='search lofts' />
        <form className="filter-form">
               <div className="form-group">
                   <label htmlFor="type">loft type</label>
                   <select name="type" id="" value={type} className="form-control" onChange={handleChange}>
                    {options}
                   </select>
                </div>
           </form> 
        </section>    
    )

}
export default LoftsFilter
