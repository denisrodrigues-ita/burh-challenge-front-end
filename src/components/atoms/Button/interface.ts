export interface ButtonProps {
  onClick: () => void;
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  style:
    | "none"
    | "primary"
    | "secondary"
    | "artes"
    | "biologia"
    | "sociologia"
    | "geografia";
}
