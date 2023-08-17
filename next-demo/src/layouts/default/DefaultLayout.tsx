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

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Header onOpenNav={handleOpen} />

        <Box
          sx={{
            height: "100%",
          }}
        >
          <NavBar openNav={open} onCloseNav={handleClose} />

          <Main sx={{height:"100%"}}>{children}</Main>
        </Box>
      </>
    );
  };

  return renderContent();
}
