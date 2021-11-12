import React, { Component } from 'react';
import './DataEntry.css';

export default class DataEntryForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             fName: "",
             address:"",
             address_2:"",
             city:"",
             province:"",
             postalCode:""
        }

        // this.readFirstName = this.readFirstName.bind(this)
    }

    provinces = ["Alberta" , "British Columbia" , "Manitoba" , "New Brunswick" , "Bewfoundland and Labrador" , "Nova Scotia" , "Ontario" , "Prince Edward Island" , "Quebec" , "Saskatchewan"]
    
    display = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })

    }

    viewOutput = () => {
        this.setState({
            show:true
        })
    }
    
    render() {
        return (
            <div>
                <form id="dataForm" onSubmit={this.display}>
                    <h1>Data Entry Form</h1>
                    <div id="info">
                        <h6>Email</h6>
                        <h6>Name</h6>
                        <input onChange={this.display} name = "email" placeholder="Enter your email" type="email" />
                        <input onChange={this.display} name = "fName" placeholder="Enter your name" type="text" />
                    </div>
                    <h6>Address</h6>
                    <input onChange={this.display} name="address" className="address" placeholder="1234 Main St" type="text" />
                    <h6>Address 2</h6>
                    <input onChange={this.display} name="address_2" className="address" placeholder="Apartment, studio, or floor" type="text" />
                    <div id = "info_2">
                        <h6>City</h6>
                        <h6>Province</h6>
                        <h6>Postal Code</h6>
                        <input onSelect={this.display} name="city" type="text" />
                        <select onChange={this.display} name="province">
                            <option value = "" >Choose</option>
                            {
                                this.provinces.map(v => {
                                    return(<option value = {v}>{v}</option>)
                                    
                                })
                            }
                        </select>
                        <input onChange={this.display} name="postalCode" type="text" />
                    </div>
                    <br/>
                    <input type = "checkbox" id="terms"/>
                    <label for = "terms">Agree Terms &amp; Condition?</label>
                    <br/>
                    <br/>
                    <button type="button" onClick = {this.viewOutput}>Submit</button>
                    
                </form>

                <div id= "output">
                    <label>Email : </label>
                    <h6>{this.state.email}</h6>

                    <label>Full Name : </label>
                    <h6 >{this.state.fName}</h6>

                    <label>Address : </label>
                    <h6>{this.state.address}</h6>

                    <label>City : </label>
                    <h6>{this.state.city}</h6>

                    <label>Province : </label>
                    <h6>{this.state.province}</h6>

                    <label>Postal Code : </label>
                    <h6>{this.state.postalCode}</h6>
                </div>
            </div>

        )
    }
}
