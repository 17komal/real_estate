import React from "react";

const Card = ({ properties }) => {
    return (

        <div className="card">
            <h2></h2>
            {properties.map((property) => (
                <h2 key={property.id}>{property.name}</h2>
              
            ))}
        </div>
   
    )


}
export default Card;