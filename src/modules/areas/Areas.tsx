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
                    <div className="card card-container ">
                        <div className="card-header d-flex pt-3">
                            <h5 className="card-title mr-auto ">Bed roomBookShelf Area</h5> 
                            <AddItem className="modalAddInventory" />
                        </div>
                        <div className="card-body">
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Java core 
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Spring for dummies
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        React forever
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>

                            
                        </div>
                    </div>
                    <div className="card card-container ">
                        <div className="card-header d-flex pt-3">
                            <h5 className="card-title mr-auto ">Living room </h5> 
                            <AddItem className="modalAddInventory" />
                        </div>
                        <div className="card-body">
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Bootstrap
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Spring framework
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Vue.js
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>

                            
                        </div>
                    </div>
                    <div className="card card-container ">
                        <div className="card-header d-flex pt-3">
                            <h5 className="card-title mr-auto ">Office</h5> 
                            <AddItem className="modalAddInventory" />
                        </div>
                        <div className="card-body">
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Html and css
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Angular 6
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="d-flex align-items-center ">
                                        Javascript
                                        <div className="ml-auto d-flex align-items-center my-3">
                                            <EditButton/><DeleteButton />
                                        </div>
                                    </div>
                                </div>

                            
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
