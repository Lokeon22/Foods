export const ButtonRemoveCart = ({ id, pedido, removeFromCart }) => {
  return (
    <button
      className="bg-blue-500 w-4 mb-2"
      onClick={(e) => {
        e.preventDefault();
        removeFromCart(id);
      }}
    >
      X
    </button>
  );
};
