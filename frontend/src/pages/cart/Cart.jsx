import {useSelector} from 'react-redux'
import CartItem from './CartItem';
import '../../styles/Cart.css'
function Cart() {
    const cartData=useSelector((state)=>state.cart)
    const cart=cartData.cart;

    const totalAmount=cartData.totalAmount;
    const totalQuantity=cartData.totalQuantity;
    console.log(totalAmount,totalQuantity);
  return (
    <div className='Cart'>
        <h2>cart</h2>
      <div>
        {
            cart.map((item)=>(<CartItem key={item.id} item={item}/>))
        }
      </div>
      <div>
        <div className='total'>
            <ul>
                <li>total amount {totalAmount}</li>
                <li>total quantity {totalQuantity}</li>
            </ul>
        </div>
        <div className='placeOrder'>

        </div>
      </div>
    </div>
  )
}

export default Cart
