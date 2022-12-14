import explorerfooter from "../assets/icons/explorer-footer.svg";

export const Footer = () => {
  return (
    <section className="w-full mt-auto mb-2 md:mb-1 bg-[#00111A] flex flex-wrap justify-between items-center xl:px-32 xl:py-5 px-4 py-4 gap-2 max-[340px]:justify-center">
      <img src={explorerfooter} className="w-24 sm:w-32 md:w-48" />
      <h2 className="font-sans text-xs sm:text-sm">
        © 2022 - Todos os direitos reservados.
      </h2>
    </section>
  );
};
