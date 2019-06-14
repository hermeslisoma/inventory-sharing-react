import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Areas.scss'
import AddArea from './AddArea';
import  AddItem  from './AddItem';


export default class Areas extends Component {
    render() {
        return (
            <div className='container Areas-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">Books Inventory</p>
                    <AddArea className="modalAddInventory" buttonLabel='Add Area' />
                </div>
                
                <div className="inventories-container p-3">
                    <div className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title">Bed roomBookShelf Area</h5>
                                <ul>
                                <li className="card-text" value="List of books">Book</li>
                                <li className="card-text" value="List of books">Book</li>
                                <li className="card-text" value="List of books">Book</li>
                                <li className="card-text" value="List of books">Book</li>
                                <li className="card-text" value="List of books">Book</li>
                                </ul>

                            <Link to="#" ><AddItem className="modalAddInventory" buttonLabel='AddItem' /></Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
