import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Areas.scss'
import AddArea from './AddArea';
import  AddItem  from './AddItem';
import EditButton from './ActionButtons/EditButton';
import DeleteButton from './ActionButtons/DeleteButton';


export default class Areas extends Component {
    render() {
        return (
            <div className='container Areas-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">Books Inventory</p>
                    <AddArea className="modalAddArea" buttonLabel='Add Area' />
                </div>
                
                <div className="areas-container p-3">
                    <div className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title">Bed roomBookShelf Area</h5>
                                <ul>
                                <li className="card-text d-flex" value="List of books">Book <div className="ml-auto d-flex"><EditButton/><DeleteButton/></div></li>
                                <li className="card-text d-flex" value="List of books">Book <div className="m1-auto d-flex"><EditButton/><DeleteButton/></div></li>
                                <li className="card-text d-flex" value="List of books">Book <div className="m1-auto d-flex"><EditButton/><DeleteButton/></div></li>
                                <li className="card-text d-flex" value="List of books">Book <div className="m1-auto d-flex"><EditButton/><DeleteButton/></div></li>
                                <li className="card-text d-flex" value="List of books">Book <div className="m1-auto d-flex"><EditButton/><DeleteButton/></div></li>
                                </ul>

                            <Link to="#" ><AddItem className="modalAddInventory" buttonLabel='AddItem' /></Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
