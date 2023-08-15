import {ReactNode} from "react";
// layouts
import DefaultLayout from "./default";

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
  variant?: "default";
};

export default function Layout({variant = "default", children}: Props) {
  if (variant === "default") {
    return <DefaultLayout> {children} </DefaultLayout>;
  }
  return <DefaultLayout> {children} </DefaultLayout>;
}
