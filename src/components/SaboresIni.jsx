import frutas from "../assets/icons/frutas.svg";

export const SaboresIni = () => {
  return (
    <div className="max-w-[1120px] h-64 bg-[#00111A] rounded-lg mx-auto mt-20 md:mt-40 mb-24 md:mb-16 grid grid-cols-1 md:grid-cols-2 items-center">
      <img
        src={frutas}
        className="relative xl:-top-[104px] xl:right-14 w-full xl:h-full h-64"
      />
      <div className="font-Poppins text-[#E1E1E6] bg-[#00111A] flex flex-col justify-center items-center text-center">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-[40px]">
          Sabores inigualáveis
        </h2>
        <p className="text-sm md:font-normal xl:mb-16">
          Sinta o cuidado do preparo com ingredientes selecionados
        </p>
      </div>
    </div>
  );
};
