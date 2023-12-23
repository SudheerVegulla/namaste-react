import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    // console.log(cartItems);
    const handleClearCart = () => {
        dispatch(clearCart());  
    }
    return (
        <div className="text-center p-4 m-4">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="flex justify-end">
            <button className="p-2 m-2 bg-black text-white rounded-lg " onClick = {handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-6/12 mx-auto bg-gray-200 rounded-lg p-2 m-2">
            {cartItems.length === 0 && <h1>Cart is empty .Add items to cart</h1>}
            <ItemList items = {cartItems}/>
            </div>
        </div>
    )
}

export default Cart;