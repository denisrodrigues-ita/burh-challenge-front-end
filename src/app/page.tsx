"use client";

import React from "react";
import { apiGrades } from "@/service";
import { Cards, ModalAddGrade } from "@/components/molecules";
import { IGrades } from "@/interface";
import { bimestreEnum } from "@/enums";

const Home: React.FC = () => {
  const [grades, setGrades] = React.useState<IGrades[]>([]);

  React.useEffect(() => {
    try {
      const fetchGrades = async () => {
        const { result } = await apiGrades.getGrades();
        setGrades(result);
      };
      fetchGrades();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="flex flex-col gap-12 max-w-fit my-12 mx-auto">
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 1</h3>
          <ModalAddGrade bim={bimestreEnum.PRIMEIRO} />
        </div>
        <Cards grades={grades} bim={bimestreEnum.PRIMEIRO} />
      </section>
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 2</h3>
          <ModalAddGrade bim={bimestreEnum.SEGUNDO} />
        </div>
        <Cards grades={grades} bim={bimestreEnum.SEGUNDO} />
      </section>
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 3</h3>
          <ModalAddGrade bim={bimestreEnum.TERCEIRO} />
        </div>
        <Cards grades={grades} bim={bimestreEnum.TERCEIRO} />
      </section>
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 4</h3>
          <ModalAddGrade bim={bimestreEnum.QUARTO} />
        </div>
        <Cards grades={grades} bim={bimestreEnum.QUARTO} />
      </section>
    </main>
  );
};

export default Home;
