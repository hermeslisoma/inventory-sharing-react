import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Areas extends Component {
    render() {
        return (
            <div className='container Areas-container mt-5'>
                <div className="header d-flex flex-row">
                    <p className="display-4">Books Inventory</p>
                </div>
                
                <div className="inventories-container p-3">
                    <div className="card card-container">
                        <div className="card-body">
                            <h5 className="card-title">Bed roomBookShelf Area</h5>
                            <p className="card-text">1. List of books.</p>
                            <p className="card-text">2. List of books.</p>
                            <p className="card-text">3. List of books.</p>
                            <p className="card-text">4. List of books.</p>
                            <p className="card-text">5. List of books.</p>

                            <Link to="#" className="btn btn-warning">Add Item</Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
