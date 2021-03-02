import React from 'react'
import { Button } from '@material-ui/core'
import './App.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { db } from './Firebase'
import { useState } from 'react'

function Products(props) {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [location, setLocation] = useState('')
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);

    const sendDetails = (event) => {
        event.preventDefault();
        db.collection("orders").add({
            name: name,
            number: number,
            location: location
        })
        setName('')
        setNumber('')
        setLocation('')
    }
    
    return (
        <div className="page">
            <img className="product" src={props.src} alt="product"/>
            <p className="price">{props.price}</p>
            <Button variant="contained" color="secondary" onClick={() => setOpen(o => !o)}>Purchase</Button>
            <Popup
            position="top center" modal nested
            open={open} closeOnDocumentClick onClose={closeModal}>
                <div>
                <a className="close" onClick={closeModal}>&times;</a>
                    <form action="" onSubmit={sendDetails}>
                    <p>Please fill in the following information for your order to be successful</p>
                        <input type="text" placeholder="Full Names" value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <input type="text" placeholder="Phone Number" value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <input type="text" placeholder="Location" value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <Button variant="outlined" color="primary" type="submit">Submit</Button>
                    </form>
                </div>
            </Popup>
                
        </div>
    )
}

export default Products
