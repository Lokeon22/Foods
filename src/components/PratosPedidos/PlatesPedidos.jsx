import { useEffect, useState } from "react";
import { ButtonRemoveCart } from "../ButtonRemoveCart";

export const PlatesPedidos = ({
  id,
  title,
  src,
  indexItem,
  pedido,
  removeFromCart,
}) => {
  const [dateplate, setDateplate] = useState();

  useEffect(() => {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    const buyProductDay = dd + "/" + mm + "/" + yyyy;
    setDateplate(buyProductDay);
  }, []);

  return (
    <section>
      <div>
        <img src={src} className="w-32" />
        <h2>{title}</h2>
      </div>
      <ButtonRemoveCart
        pedido={pedido}
        id={id}
        indexItem={indexItem}
        removeFromCart={removeFromCart}
      />
      <h2>{dateplate}</h2>
    </section>
  );
};
