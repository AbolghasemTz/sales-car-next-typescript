import { MouseEventHandler } from "react";

export interface CustomVuttonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;    
  btnType?: "button" | "submit" 
}
