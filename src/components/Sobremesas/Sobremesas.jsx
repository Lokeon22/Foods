import { ButtonsSobremesas } from "./ButtonsSobremesa";
import { HeartFavoritesSobremesas } from "./HeartFavoritesSobremesas";

export function Sobremesas({
  title,
  desc,
  preco,
  src,
  sobremesas,
  addSobremesasFavorites,
  removeSobremesasFavorites,
}) {
  return (
    <>
      <HeartFavoritesSobremesas
        addSobremesasFavorites={addSobremesasFavorites}
        removeSobremesasFavorites={removeSobremesasFavorites}
        sobremesas={sobremesas}
      />
      <img src={src} className="w-44 h-44 object-cover" />
      <h2 className="text-[22px] text-center font-Poppins font-semibold mt-4 mb-4">
        {title}
      </h2>
      <p className="text-xs font-Roboto font-normal text-center">{desc}</p>
      <span className="text-[#82F3FF] text-3xl font-Roboto mt-4 mb-4">
        R$ {preco}
      </span>
      <ButtonsSobremesas sobremesas={sobremesas} />
    </>
  );
}
