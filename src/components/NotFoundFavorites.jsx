import sad from "../assets/icons/sad.svg";

export const NotFoundFavorites = () => {
  return (
    <div>
      <h2 className="text-center text-2xl text-gray-500 mb-4">
        Nenhum prato favorito
      </h2>
      <img src={sad} className="mx-auto my-0 w-40 opacity-10  invert" />
    </div>
  );
};
