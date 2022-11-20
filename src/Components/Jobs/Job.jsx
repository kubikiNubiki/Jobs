import React from 'react';
import './Jobs.css'
export default function Job(props){

    const {Title, Company, Location, Description } = props;

    return(
       <div  key={id} className="card">
            <div className="card-company">
                {Company}
            </div>
            <div className="card-title">
                {Title}
            </div>
            <div className="card-location">
                {Location}
            </div>
            <div className="card-description">
                {Description}
            </div>
        </div>
      
    )
}