import { ButtonsPlates } from "../components/FavPieces/ButtonsPlates";

export const PratosFavoritos = ({ data, id, title, desc, preco, src }) => {
  return (
    <div key={id} className="text-white flex items-center gap-10 md:mb-16 mb-8">
      <div>
        <img src={src} className="max-w-[380px]" />
      </div>
      <div>
        <h2 className="text-4xl mb-2">{title}</h2>
        <p className="font-normal text-2xl">{desc}</p>
        <ul className="font-normal text-lg flex items-center gap-4 md:mt-7 md:mb-11">
          <li>
            <span>alface</span>
          </li>
          <li>
            <span>tomate</span>
          </li>
          <li>
            <span>rabanete</span>
          </li>
          <li>
            <span>pão naan</span>
          </li>
        </ul>
        <div className="flex items-center gap-10">
          <span className="text-[#82F3FF] text-3xl font-Roboto">R${preco}</span>
          <ButtonsPlates data={data} />
        </div>
      </div>
    </div>
  );
};
