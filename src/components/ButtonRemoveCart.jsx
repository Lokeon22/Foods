export const ButtonRemoveCart = ({ id, pedido, indexItem, removeFromCart }) => {
  return (
    <button
      className="bg-blue-500 w-4 mb-2"
      onClick={(e) => {
        e.preventDefault();
        removeFromCart(indexItem);
      }}
    >
      X
    </button>
  );
};
