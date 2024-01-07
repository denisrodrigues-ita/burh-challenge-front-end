import { bimestreEnum, disciplinaEnum } from "@/enums";

export interface IGrades {
  id: number;
  disciplina: disciplinaEnum;
  bimestre: bimestreEnum;
  nota: number;
  atualizadoEm: string;
  criadoEm: string;
}
