export const PlatesPedidos = ({ id, title, index, pedido }) => {
  return (
    <div key={index} className="text-white">
      <h2>{title}</h2>
    </div>
  );
};
