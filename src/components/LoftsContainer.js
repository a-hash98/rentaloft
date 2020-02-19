import React from 'react'
// import LoftsFilter from './LoftsFilter'
import LoftsList from './LoftsList'
import LoftsFilter from './LoftsFilter'
import { LoftConsumer } from '../Context'


const LoftsContainer = () => {
    return (
        <LoftConsumer>
        {
            (value) => {
                const {loading, sortedLofts, lofts} = value
                return (
                    <div>
                        {/* <LoftsFilter lofts={lofts} /> */}
                        <LoftsList lofts={sortedLofts} />
                        <LoftsFilter />
                    </div>
                )
            }
        }

        </LoftConsumer>
            
    )
}

export default LoftsContainer
