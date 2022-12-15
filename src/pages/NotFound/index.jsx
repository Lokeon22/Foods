import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="absolute w-full h-full flex justify-center items-center text-white">
      <div>
        <h2 className="text-3xl">Pagina não encontrada</h2>
        <Link to="/home">
          <p className="text-xl mt-2 hover:text-gray-400 hover:duration-300">
            Voltar
          </p>
        </Link>
      </div>
    </section>
  );
};
