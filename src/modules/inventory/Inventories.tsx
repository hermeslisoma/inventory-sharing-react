import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Inventories.scss'
import AddInventory from './AddInventory';
import ShareButton from './ActionsButtons/ShareButton';
import EditButton from './ActionsButtons/EditButton';
import DeleteInventory from './ActionsButtons/DeleteInventory';

export default class Inventories extends Component {
    
    render() {
        return (
            <div className='container Inventories-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">My inventories</p>
                    <AddInventory className="modalAddInventory" buttonLabel='Add Inventory' />
                </div>
                
                <div className="inventories-container p-3">
                    <div className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title">Books Inventory </h5>
                            <div className="actions my-2 d-flex justify-content-around align-items-center">
                                <ShareButton />
                                <EditButton/>
                                <DeleteInventory/>

                            </div>
                            
                            <p className="card-text">Just to keep track of the books in my library.</p>
                            <Link to="/areas" className="btn btn-warning">see Inventory</Link>
                        </div>
                    </div>
                    <div className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title">Medicine inventory </h5>
                            <div className="actions my-2 d-flex justify-content-around align-items-center">
                                <ShareButton />
                                <EditButton/>
                                <DeleteInventory/>

                            </div>
                            <p className="card-text">Medicines that i have to.</p>
                            <Link to="/areas" className="btn btn-danger">see Inventory</Link>
                        </div>
                    </div>
                    <div className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title">Important URLs </h5>
                            <div className="actions my-2 d-flex justify-content-around align-items-center">
                                <ShareButton />
                                <EditButton/>
                                <DeleteInventory/>

                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/areas" className="btn btn-success">see Inventory</Link>
                        </div>
                    </div>
                    <div className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title">Photos</h5>
                            <div className="actions my-2 d-flex justify-content-around align-items-center">
                                <ShareButton />
                                <EditButton/>
                                <DeleteInventory/>

                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn btn-primary">see Inventory</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
