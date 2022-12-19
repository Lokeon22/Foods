import close from "../assets/icons/close.svg";

export const ButtonRemoveCart = ({ indexItem, removeFromCart }) => {
  return (
    <p
      className="text-[#750310] cursor-pointer hover:text-red-800 text-sm"
      onClick={(e) => {
        e.preventDefault();
        removeFromCart(indexItem);
      }}
    >
      Excluir
    </p>
  );
};
