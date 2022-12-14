import { ButtonsPlates } from "../FavPieces/ButtonsPlates";

export const PratosFavoritos = ({
  data,
  id,
  title,
  desc,
  preco,
  src,
  ingre,
}) => {
  return (
    <div key={id} className="text-white flex items-center gap-10 md:mb-16 mb-8">
      <div>
        <img src={src} className="max-w-[380px]" />
      </div>
      <div>
        <h2 className="text-4xl mb-2">{title}</h2>
        <p className="font-normal text-2xl mb-4">{desc}</p>
        <div className="flex items-center gap-8">
          {ingre.imageIngre.map((img, index) => (
            <img key={index} src={img} className="w-14" />
          ))}
        </div>
        <div className="flex items-center gap-6 md:mt-3 md:mb-10">
          {ingre.titleIngre.map((title, index) => (
            <span key={index} className="font-normal text-lg">
              {title}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-10">
          <span className="text-[#82F3FF] text-3xl font-Roboto">
            R$ {preco}
          </span>
          <ButtonsPlates data={data} />
        </div>
      </div>
    </div>
  );
};
