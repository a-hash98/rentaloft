import React from 'react'
import Loft from '../pages/Loft'

const LoftsList = ({lofts}) => {
    if(lofts.length === 0){
        return (
            <div className="empty-search">
                <h3>No loft apartments meet your search parameters.</h3>
            </div>

        )
    }
    return <section className="roomslist">
        <div className="roomslist-center">
          {
            lofts.map(item => {
                return <Loft id={item.id} loft={item}/>
            })
          }  
        </div>
    </section>
}

export default LoftsList
