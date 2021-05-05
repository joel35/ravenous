import React from 'react';
import './Business.css';

export default class Business extends React.Component {
    render() {
        let business = this.props.business;

        return (
            <div className="Business">
                <div className="image-container">
                    <img src={business.imageSrc} alt=''/>
                </div>
                <h2>{business.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{business.address1}</p>
                        <p>{business.address2}</p>
                        <p>{business.address3}</p>
                        <p>{business.city}</p>
                        <p>{business.state} {business.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{business.category}</h3>
                        <h3 className="rating">{business.rating} stars</h3>
                        <p>{business.reviewCount} reviews</p>
                    </div>
                </div>
            </div>
        );
    };
};