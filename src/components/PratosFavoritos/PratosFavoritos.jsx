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
    <div
      key={id}
      className="text-white flex flex-col md:flex-row items-center gap-10 md:mb-16 mb-8"
    >
      <div>
        <img src={src} className="max-w-[300px] md:max-w-[380px]" />
      </div>
      <div>
        <h2 className="text-xl md:text-3xl lg:text-4xl mb-2">{title}</h2>
        <p className="font-normal text-normal md:text-xl lg:text-2xl mb-4">
          {desc}
        </p>
        <div className="flex items-center justify-center md:justify-start gap-8 md:gap-7 lg:gap-8">
          {ingre.imageIngre.map((img, index) => (
            <img key={index} src={img} className="w-10 md:w-12 lg:w-14" />
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 md:gap-3 lg:gap-6 md:mt-3 md:mb-10">
          {ingre.titleIngre.map((title, index) => (
            <span key={index} className="font-normal text-normal md:text-lg">
              {title}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start md:gap-10 gap-5 md:mt-0 mt-4 max-[346px]:gap-2">
          <span className="text-[#82F3FF] md:text-3xl text-2xl font-Roboto">
            R$ {preco}
          </span>
          <ButtonsPlates data={data} />
        </div>
      </div>
    </div>
  );
};
