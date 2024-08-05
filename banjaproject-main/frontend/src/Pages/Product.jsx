import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breakcrum from '../Components/Breadcrums/Breakcrum';
import { useParams } from 'react-router-dom';
const Product = () => {
  const{all_product}=useContext(ShopContext);
  const{productId}= useParams();
  const product= all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
     <Breakcrum/> 
    </div>
  )
}

export default Product
