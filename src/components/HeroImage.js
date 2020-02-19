import React from 'react'

const HeroImage = ({children, hero}) => {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

HeroImage.defaultProps= {
    hero: 'defaultHero'
}

export default HeroImage
