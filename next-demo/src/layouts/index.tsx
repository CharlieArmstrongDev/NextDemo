import {ReactNode} from "react";
import DefaultLayout from "./default";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: "default";
};

export default function Layout({variant = "default", children}: Props) {

  //Can accomodate for other page layouts.
  if (variant === "default") {
    return <DefaultLayout> {children} </DefaultLayout>;
  }
  return <DefaultLayout> {children} </DefaultLayout>;
}
