import './Cart.css';
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./icons";
import { useCart } from "../hooks/useCart";


function CartItem  (thumbnail, price, title, quantity, addToCart) {     
    return(
        <li>
                <img 
                    src= {thumbnail}
                    alt= {title}
                    className='cart-item-thumbnail'
                />
                <div>
                 <strong>{title}</strong> - ${price}
                 </div>

                <footer>
                <small >
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
                </footer>
        </li>
    )
}

export function Cart () {

    const cartCheckboxId = useId();
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor="cart">
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                          key={product.id}
                          addToCart={() => addToCart(product)}
                          {...product}
                        />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}