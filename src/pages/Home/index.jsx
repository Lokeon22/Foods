import { Header } from "../../components/Header";
import { SaboresIni } from "../../components/SaboresIni";
import { TitleCategory } from "../../components/TitleCategory";
import { PrincipalPlates } from "../../components/PrincipalPlates";

export const Home = () => {
  return (
    <section className="max-w-[1400px] h-full mx-auto my-0  text-white">
      <Header />
      <SaboresIni />
      <section className="max-w-[1120px] mx-auto my-0 px-3 py-3 xl:px-0 xl:py-0 font-Poppins font-medium">
        <TitleCategory title="Pratos Principais" />
        <PrincipalPlates />
      </section>
    </section>
  );
};
