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
                // console.log(lofts)
                // console.log('inside lofts container')
                return (
                    <div>
                        {/* <LoftsFilter lofts={lofts} /> */}
                        <LoftsFilter lofts={lofts} />
                        <LoftsList lofts={sortedLofts} />
                    </div>
                )
            }
        }

        </LoftConsumer>
            
    )
}

export default LoftsContainer
