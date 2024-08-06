/* eslint-disable react/prop-types */

function CartItem({item}) {
    const {thumbnail,title,quantity,price}=item;
  return (
    <div className="CartItem">
      <img src={thumbnail} alt={title}/>
      <span>{title}</span>
      <input value={quantity}/>
      <span>${price}</span>  
    </div>
  )
}

export default CartItem
