import React from "react";
import { IGrades } from "@/interface";
import { CardsProps } from "./interface";
import { disciplinaEnum } from "@/enums";
import Image from "next/image";
import { ChartIcon, TrashSvg } from "@/assets/icons";
import { formatDate, handleCapitalize } from "@/utils";
import { Button } from "@/components/atoms";
import { apiGrades } from "@/service";
import { toast } from "react-toastify";
import { Toast } from "@/components/molecules";

const Cards: React.FC<CardsProps> = ({ grades, bim }) => {
  const gradesFilter = grades.filter(
    (grade: IGrades) => grade.bimestre === bim
  );

  const handleCard = (grade: IGrades) => {
    switch (grade.disciplina) {
      case disciplinaEnum.ARTES:
        return "bg-burh-blue-50";
      case disciplinaEnum.BIOLOGIA:
        return "bg-burh-pink-50";
      case disciplinaEnum.GEOGRAFIA:
        return "bg-burh-orange-50";
      case disciplinaEnum.SOCIOLOGIA:
        return "bg-burh-purple-50";
      default:
        return null;
    }
  };

  const handleColor = (nota: number) => {
    if (nota < 6) return "text-burh-red-50";
    if (nota < 8) return "text-burh-yellow-100";
    if (nota <= 10) return "text-burh-green-50";
  };

  const handleDelete = async (id: number) => {
    try {
      const { response } = await apiGrades.deleteGrade(id);
      if (response.status !== 200) {
        throw new Error("Erro ao deletar");
      }
      location.reload();
    } catch (error) {
      toast.error("Erro ao deletar nota!");
    }
  };

  return (
    <div className="grid grid-cols-[repeat(2,190px)] lg:grid-cols-[repeat(4,190px)] gap-8 mt-8">
      {gradesFilter.map((grade: IGrades) => (
        <div key={grade.id} className="flex items-start gap-2">
          <div
            className={`flex flex-col py-4 w-[157px] h-[146px] rounded-[20px] justify-between ${handleCard(
              grade
            )}`}
          >
            <div className="flex flex-col gap-2 pl-4">
              <span className="text-lg font-medium leading-[18px]">
                {handleCapitalize(grade.disciplina)}
              </span>
              <span className="text-xs">{formatDate(grade.criadoEm)}</span>
            </div>
            <span
              className={`bg-burh-black-50/70 text-xs px-4 py-2 flex  gap-2 ${handleColor(
                grade.nota
              )}`}
            >
              <ChartIcon
                color={grade.nota < 6 ? "red" : grade.nota < 8 ? "yellow" : "green"}
              />
              {/* <Image src={ChartSvg} alt="grafico" fill={false}/> */}
              Nota: {grade.nota}
            </span>
          </div>
          <Button
            style="none"
            type="button"
            onClick={() => {
              handleDelete(grade.id);
            }}
          >
            <Image src={TrashSvg} alt="lixeira" />
          </Button>
        </div>
      ))}
      <Toast />
    </div>
  );
};

export default Cards;
