import React, { Component } from 'react'
import inventory from '../../statics/images/inventory.jpg'
export default class Home extends Component {
    render() {
        return (
            <div className='container Home-container' >
                <div className="display-3 mt-4">Inventory App</div>
                <div className='my-5 lead'>
                    <p>Inventory System to keep track of anything that you want keep track of books, medicine, catalogs. </p>
                    <p>Just go to the inventory tap and create one, and start to have evething organizewd and simple. </p>
                    
                </div>
                <div className="imageContainer"><img src={inventory} alt="" className="img-fluid img-thumbnail"/></div>
            </div>
        )
    }
}
 