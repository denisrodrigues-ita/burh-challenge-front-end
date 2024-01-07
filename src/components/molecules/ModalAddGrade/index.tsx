import React from "react";
import Image from "next/image";
import { Button } from "@/components/atoms";
import { PlusSvg } from "@/assets/icons";
import { bimestreEnum, disciplinaEnum } from "@/enums";
import { ModalAddGradeProps } from "./interface";
import { toast } from "react-toastify";
import { apiGrades } from "@/service";

const ModalAddGrade: React.FC<ModalAddGradeProps> = ({ bim }) => {
  const [disciplina, setDisciplina] = React.useState<disciplinaEnum | null>(
    null
  );
  const [nota, setNota] = React.useState<string | null>(null);
  const [showModal, setShowModal] = React.useState(false);

  const handleBim = (bim: bimestreEnum) => {
    switch (bim) {
      case bimestreEnum.PRIMEIRO:
        return "1";
      case bimestreEnum.SEGUNDO:
        return "2";
      case bimestreEnum.TERCEIRO:
        return "3";
      case bimestreEnum.QUARTO:
        return "4";
      default:
        return null;
    }
  };

  const handleSubmit = async () => {
    try {
      if (nota === null || nota === "" || isNaN(Number(nota))) {
        return toast.error("Nota inválida, insira um número entre 0 e 10");
      }

      const notaNumber = Number(nota);

      if (notaNumber < 0 || notaNumber > 10) {
        return toast.error("A nota deve estar entre 0 e 10");
      }

      const disciplinaEnumArray: string[] = Object.values(disciplinaEnum);
      if (!disciplinaEnumArray.includes(disciplina || "")) {
        return toast.error("Disciplina inválida");
      }

      const bimestreEnumArray: string[] = Object.values(bimestreEnum);
      if (!bimestreEnumArray.includes(bim || "")) {
        return toast.error("Bimestre inválida");
      }

      const data = {
        bimestre: bim,
        nota: notaNumber,
        disciplina: disciplina,
      };

      const { response } = await apiGrades.createGrade(data);

      if (response.status !== 200) return toast.error("Erro ao criar nota");

      location.reload();
    } catch (error) {
      toast.error("Erro ao criar nota");
    }
  };

  return (
    <>
      <Button
        style="primary"
        onClick={() => {
          setShowModal((prev) => !prev);
        }}
        type="button"
      >
        <p className="hidden lg:block text-burh-black-50 text-base font-semibold">
          Lançar nota
        </p>
        <Image src={PlusSvg} alt="Plus" className="w-6 h-5" />
      </Button>

      <div
        className={`${
          showModal ? "" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full flex bg-burh-black-50/80`}
      >
        <div className="relative p-4 max-h-full">
          <div className="relative bg-burh-black-50 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 rounded-t">
              <h3 className="text-[32px]">Bimestre {handleBim(bim)}</h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 space-y-4">
              <h4 className="text-lg leading-relaxed text-white">
                Disciplina.
              </h4>
            </div>

            <div className="p-4 grid grid-cols-[130px_130px] lg:grid-cols-4 gap-4">
              <Button
              active={disciplina === disciplinaEnum.BIOLOGIA ? true : false}
                onClick={() => {
                  setDisciplina(disciplinaEnum.BIOLOGIA);
                }}
                style="biologia"
                type="button"
              >
                Biologia
              </Button>
              <Button
              active={disciplina === disciplinaEnum.ARTES ? true : false}
                onClick={() => {
                  setDisciplina(disciplinaEnum.ARTES);
                }}
                style="artes"
                type="button"
              >
                Artes
              </Button>
              <Button
              active={disciplina === disciplinaEnum.GEOGRAFIA ? true : false}
                onClick={() => {
                  setDisciplina(disciplinaEnum.GEOGRAFIA);
                }}
                style="geografia"
                type="button"
              >
                Geografia
              </Button>
              <Button
                active={disciplina === disciplinaEnum.SOCIOLOGIA ? true : false}
                onClick={() => {
                  setDisciplina(disciplinaEnum.SOCIOLOGIA);
                }}
                style="sociologia"
                type="button"
              >
                Sociologia
              </Button>
            </div>

            <div className="p-4 flex flex-col lg:grid-cols-4 gap-4 w-[101px]">
              <p className="text-sm">Nota</p>
              <input
                className="rounded-md py-2 px-4 text-sm text-burh-gray-50 border border-burh-gray-100 bg-burh-black-50 text-center"
                type="text"
                onChange={(e) => setNota(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center p-4 rounded-b justify-end">
              <Button
                type="button"
                style="secondary"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddGrade;
