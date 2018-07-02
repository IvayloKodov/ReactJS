import React, { Component } from 'react'

class Car extends Component {
    render () {
        let car = this.props.car;

        return (
            <tr>         
              <td>{car.make} {car.model}</td>
            </tr>
        )
    }
}

export default Car;