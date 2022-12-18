import { useState } from "react";
import { TitleCategory } from "./TitleCategory";
import pix from "../assets/icons/pix.svg";
import creditcard from "../assets/icons/creditcard.svg";
import qrcode from "../assets/icons/qrcode.svg";

export const PagamentoPixCard = () => {
  const [pixstyle, setPixstyle] = useState(true);
  const [cardstyle, setCardstyle] = useState(false);
  const [creditinfos, setCreditinfos] = useState(false);

  const editStylePixCard = () => {
    setPixstyle(!pixstyle);
    setCardstyle(!cardstyle);
    setCreditinfos(!creditinfos);
  };

  return (
    <>
      <TitleCategory title="Pagamento" className="text-3xl mb-8" />
      <section className="font-Roboto font-normal flex justify-center items-center">
        <div
          className="w-64 flex justify-center items-center gap-2 px-4 py-6 bg-blue-500  cursor-pointer"
          style={pixstyle ? { border: "1px solid white" } : null}
          onClick={editStylePixCard}
        >
          <img src={pix} className="w-6 h-6" />
          <h2>PIX</h2>
        </div>
        <div
          className="w-64 flex justify-center items-center gap-2 px-4 py-6 bg-blue-500 cursor-pointer"
          style={cardstyle ? { border: "1px solid white" } : null}
          onClick={editStylePixCard}
        >
          <img src={creditcard} className="w-6 h-6" />
          <h2>Crédito</h2>
        </div>
      </section>
      <div className="flex items-center justify-center mt-12">
        <img
          src={qrcode}
          style={
            creditinfos
              ? { display: "none" }
              : { width: "270px", height: "270px" }
          }
        />
        <form
          style={creditinfos ? { display: "block" } : { display: "none" }}
          className="grid grid-cols-3 font-Roboto text-[#C4C4CC]"
        >
          <div className="col-span-1 flex flex-col mb-9">
            <label htmlFor="numerocartao" className="mb-2">
              Número do Cartão
            </label>
            <input
              id="numerocartao"
              type="number"
              placeholder="0000 0000 0000 0000"
              className="py-3 px-4 bg-transparent border border-gray-500 rounded-md outline-none appearance-none"
            />
          </div>
          <section className="col-span-1 flex justify-center items-center gap-5 text-[#C4C4CC]">
            <div className="flex flex-col">
              <label htmlFor="validade" className="mb-2">
                Validade
              </label>
              <input
                id="validade"
                type="number"
                placeholder="07/25"
                className="py-3 px-4 bg-transparent border border-gray-500 rounded-md outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cvc" className="mb-2">
                CVC
              </label>
              <input
                id="cvc"
                type="number"
                placeholder="000"
                className="py-3 px-4 bg-transparent border border-gray-500 rounded-md outline-none"
              />
            </div>
          </section>
          <button className="bg-[#750310] text-white hover:text-[#C4C4CC] col-span-1 w-full py-3 px-4 mt-9 rounded-md hover:bg-[#66030f] hover:duration-300">
            Finalizar pagamento
          </button>
        </form>
      </div>
    </>
  );
};
