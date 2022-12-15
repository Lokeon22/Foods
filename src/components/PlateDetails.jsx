import { ButtonsPlates } from "./FavPieces/ButtonsPlates";

export const PlateDetails = ({ data, id, title, desc, preco, src, ingre }) => {
  return (
    <section
      key={id}
      className="grid justify-center items-center grid-col-3 lg:grid-cols-5 md:mb-16 mb-8"
    >
      <div className="lg:grid col-span-1 lg:col-span-2 lg:mb-0 mb-8 flex lg:justify-start justify-center">
        <img
          src={src}
          className="max-w-[280px] md:max-w-[300px] lg:max-w-[380px]"
        />
      </div>
      <div className="col-span-1 lg:col-span-2">
        <h2 className="text-xl md:text-3xl lg:text-4xl mb-2">{title}</h2>
        <p className="font-normal text-normal md:text-xl lg:text-2xl mb-4">
          {desc}
        </p>
        <div className="flex items-center justify-start gap-3 md:gap-3 lg:gap-6 md:mt-3 md:mb-10">
          {ingre.titleIngre.map((title, index) => (
            <span
              key={index}
              className="font-normal text-normal md:text-lg text-gray-300"
            >
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
      <div className="flex flex-row justify-start lg:flex-col lg:mt-0 mt-3 gap-8 pl-2 max-[768px]:hidden">
        {ingre.imageIngre.map((img, index) => (
          <img key={index} src={img} className="w-10 md:w-12 lg:w-14" />
        ))}
      </div>
    </section>
  );
};
