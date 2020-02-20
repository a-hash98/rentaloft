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

                <div className="form-group">
                   <label htmlFor="price">room price: ${price}</label>
                    <input type="range" name="price" min='0' max='1000' defaultValue={price} onChange={handleChange}                    
                    className="form-control" />

                </div>

                <div className="form-group">
                   <label htmlFor="size">room size:</label>
                    <div className="size-inputs">
                        <input type= "number" name="minSize" id="size" defaultValue={minSize}
                        onChange={handleChange} className='size-input' />
                    </div>
                    <div className="size-inputs">
                        <input type= "number" name="maxSize" id="size" defaultValue={maxSize}
                        onChange={handleChange} className='size-input' />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>

                    <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>







           </form> 
        </section>    

        

    )

}
export default LoftsFilter
