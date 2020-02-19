import React, { Component } from 'react'

const LoftContext = React.createContext()
// <Loftontext.Provider value={}

class LoftProvider extends Component {

    state={

    }

    render() {
        return (
            <LoftContext.Provider value={"hello"}>
            {this.props.children}
            </LoftContext.Provider>
    
        )
    }

}

const LoftConsumer = LoftContext.Consumer



export { LoftProvider, LoftConsumer, LoftContext }
