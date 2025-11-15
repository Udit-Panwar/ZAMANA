import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { NavLink } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext);
  return (
     <NavLink className='text-gray-700 cusror-pointer' to={`/product/${id}`}>
         <div className='overflow-hidden'>
           <img className='hover:scale-110 transition ease-in-out'src={image[0]} alt="" />
         </div>
         <p className='pt-3 pb-1 text-sm'>{name}</p>
         <p className='text-sm font-medium'>{currency}{price}</p>
     </NavLink>
  )
}

export default ProductItem
