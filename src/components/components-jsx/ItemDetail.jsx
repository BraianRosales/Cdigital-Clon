import React from 'react';

const ItemDetail = ({item}) => {
  return (
   <>
        <h1>{item.description}</h1>
        {item.image}
        {item.price}
   </>
  )
     
};

export default ItemDetail;
 
