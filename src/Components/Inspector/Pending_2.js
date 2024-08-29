import React from 'react';
import './Pending_2.css';
import potato from '../Farmer/images/potato.jpg';
import { Link } from 'react-router-dom';

const Pending_2 = () => {
    return (
        <div className='auction-page'>
            <div className="product-details">
                <div className="product-image">
                    <img src={potato} alt="Potato" />
                </div>
                <div className="product-info">
                    <h1>Potato (আলু)</h1>
                    <div className="product-meta">
                        <p><strong>Categories:</strong> Vegetable</p>
                        <p><strong>Quantity:</strong> 2000 pc</p>
                        <p><strong>Current Price:</strong> 900tk</p>

                        <form>
                            <div className="place-bid">
                                <label htmlFor="bid-amount" className="bid-label">Place Your Rating:</label>
                                <input 
                                    type="number" 
                                    id="bid-amount" 
                                    name="bid-amount" 
                                    className="bid-input" 
                                    placeholder="Enter Rating" 
                                />
                                </div>
                            <div className="place-bid">
                                <label htmlFor="bid-amount" className="bid-label">Add Expiry Date:</label>
                                <input 
                                    type="number" 
                                    id="bid-amount" 
                                    name="bid-amount" 
                                    className="bid-input" 
                                    placeholder="Enter Expiry Date" 
                                />
                            <Link to = "/productforinspection_I">
                                <button type="submit" className="submit-bid-button">Submit</button>
                            </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pending_2;
