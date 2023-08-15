import {useState} from "react";
import {Box} from "@mui/material";
import Main from "./Main";
import Header from "./header";

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({children}: Props) {

  const renderContent = () => {
    // if (condition) {
    //   return (
    //     <>
    //      Alter Layout
    //     </>
    //   );
    // }

    return (
      <>
        <Header />

        <Box
          sx={{
            display: {lg: "flex"},
            height: "100%",
          }}
        >
          <Main>{children}</Main>
        </Box>
      </>
    );
  };

  return renderContent();
}
