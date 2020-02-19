
import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

class Services extends Component {

    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "free cocktails",
                info: 'information about this service'
            },
            {
                icon:<FaHiking/>,
                title: "Hiking trails",
                info: 'information about this service'
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: 'information about this service'
            },
            {
                icon:<FaBeer/>,
                title: "Good Beer",
                info: 'information about this service'
            }

        ]
    }
    render() {
        return (
            <section className="services">
            <Title title='services' />
            <div className="services-center">
                {this.state.services.map((service, index) => {
                    return <article key={index} className="service">
                        <span>{service.icon}</span>
                        <h6>{service.title}</h6>
                        <p>{service.info}</p>
                    </article>
                })}
            </div>
            </section>
        )
    }
}

export default Services
