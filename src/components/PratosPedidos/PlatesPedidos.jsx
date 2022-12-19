import { useEffect, useState } from "react";
import { ButtonRemoveCart } from "../ButtonRemoveCart";

export const PlatesPedidos = ({
  id,
  title,
  src,
  preco,
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
    <div className="flex items-center gap-2 mb-5">
      <div>
        <img src={src} className="w-[72px]" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg">{title}</h2>
          <span className="text-gray-400 text-sm">R$ {preco}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <ButtonRemoveCart
            pedido={pedido}
            id={id}
            indexItem={indexItem}
            removeFromCart={removeFromCart}
          />
          <span className="text-gray-500 text-xs">{dateplate}</span>
        </div>
      </div>
    </div>
  );
};
