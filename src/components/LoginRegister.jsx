import explorer from "../assets/icons/explorer.svg";

export const LoginRegister = (props) => {
  return (
    <section className="absolute w-full h-full flex justify-center items-center">
      <div className="relative grid grid-cols-1 px-2 sm:grid-cols-2 gap-10 text-white max-[346px]:gap-2">
        <div className="flex justify-center items-center mb-2 md:mb-16">
          <img
            src={explorer}
            className="w-48 sm:w-80 sm:h-12 max-[346px]:w-40"
          />
        </div>
        <div className="w-full lg:w-[450px] bg-[#001119] px-4 py-5 lg:px-12 lg:py-12 flex flex-col justify-center rounded-lg max-[346px]:py-3">
          {props.children}
        </div>
      </div>
    </section>
  );
};
