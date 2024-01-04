"use client";

import React from "react";
import { PlusSvg } from "@/assets/icons";
import { disciplinaEnum, bimestreEnum } from "@/enums";
import Image from "next/image";
import Button from "@/components/atoms/Button/button";
import { apiGrades } from "@/service";

const Home: React.FC = () => {
  React.useEffect(() => {
    try {
      const fetchGrades = async () => {
        const { result, response } = await apiGrades.getGrades();
        console.log(result, response);
      };
      fetchGrades();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main className="flex flex-col gap-12">
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 1</h3>
          <Button onClick={() => {}} type="button">
            <Image src={PlusSvg} alt="Plus" className="w-6 h-5" />
          </Button>
        </div>
      </section>
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 2</h3>
          <Button onClick={() => {}} type="button">
            <Image src={PlusSvg} alt="Plus" className="w-6 h-5" />
          </Button>
        </div>
      </section>
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 3</h3>
          <Button onClick={() => {}} type="button">
            <Image src={PlusSvg} alt="Plus" className="w-6 h-5" />
          </Button>
        </div>
      </section>
      <section>
        <div className="flex justify-between">
          <h3>Bimestre 4</h3>
          <Button onClick={() => {}} type="button">
            <Image src={PlusSvg} alt="Plus" className="w-6 h-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
