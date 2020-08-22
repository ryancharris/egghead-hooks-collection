import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart() {
  const [apples, setApples] = useState(0);
  const [oranges, setOranges] = useState(0);
  return (
    <div className="Cart">
      <CartItem
        name="Apples"
        quantity={apples}
        add={() => setApples(apples + 1)}
        remove={() => {
          if (apples >= 1) {
            setApples(apples - 1);
          }
        }}
      />
      <CartItem
        name="Oranges"
        quantity={oranges}
        add={() => setOranges(oranges + 1)}
        remove={() => {
          if (oranges >= 1) {
            setOranges(oranges - 1);
          }
        }}
      />

      <section className="Cart__total">
        <span className="Cart__total-label">Total items:</span>
        <span className="Cart__total-label">{0}</span>
      </section>
    </div>
  );
}

export default Cart;
