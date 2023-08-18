import {useState} from "react";
import {Box} from "@mui/material";
import Main from "./Main";
import Header from "./header";
import NavBar from "./navbar/NavBar";

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({children}: Props) {

  const renderContent = () => {

    return (
      <>
        <Header />

        <Box
          sx={{
            display: {lg: "flex"},
            height: "100%",
          }}
        >
          <NavBar />

          <Main sx={{height:"100%"}}>{children}</Main>
        </Box>
      </>
    );
  };

  return renderContent();
}
