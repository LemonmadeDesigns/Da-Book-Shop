// CSS
import "./shop.css"

export default function Basket(props) {

  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1 checkout-1">
      <h2 className="h-2">Cart Items</h2>
      <div className="flex-space-around">
        <div className="checkout-item">BOOK</div>
        <div className="checkout-item">TITLE</div>
        <div className="checkout-item">PRICE</div>
        <div className="checkout-item">AMOUNT</div>
      </div>

      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row checkout-row">
            <div className="col-1 even-out">
              <img className="col-1 even-out-cover" src={item.cover} alt="" />
            </div>

            <div className="col-1 even-out">
              <div className="title-col">
                <h3 className="checkout-h3">{item.title}</h3>
                <p className="checkout-p">{item.desc}</p>
              </div>

            </div>

            <div className="col-1 even-out">
              {item.qty} x ${item.price.toFixed(2)}
            </div>

            <div className="col-1 even-out">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <span className="p-1">{item.qty}</span>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

          </div>
        ))}
        <h2 className="h-2">TOTALS</h2>
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row row-element">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row row-element">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
            </div>
            <div className="row row-element">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="row row-element">
              <div className="col-2">
                <strong className="total-price">Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong className="total-price">${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button id="checkout-2" onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
