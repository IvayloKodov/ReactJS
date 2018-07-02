import React, { Component } from 'react'
import Car from './Car'
import Data from '../../data'

class Cars extends Component {
    constructor (props) {
        super(props);

        this.state = {
            cars: []
        }
    }

    componentDidMount () {
        Data.getCars()
                .then( cars => {
                    this.setState({
                        cars: cars
                    })
                })
    }

    render () {
        let cars = this.state.cars.map(car =>
            <Car key={car.id} car={car}/>
          )
 
        return <table><tbody>{cars}</tbody></table>
    }
}

export default Cars;