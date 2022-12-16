import { ButtonRemoveCart } from "../ButtonRemoveCart";

export const PlatesPedidos = ({
  id,
  title,
  indexItem,
  pedido,
  removeFromCart,
}) => {
  return (
    <div className="text-white flex gap-4">
      <h2>{title}</h2>
      <ButtonRemoveCart
        pedido={pedido}
        id={id}
        indexItem={indexItem}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};
