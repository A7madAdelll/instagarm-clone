import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Sidebar from "../components/sidebar";
import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material";
import MainContent from "../components/mainContent";
import { auth } from "../firebaseConfig";
import Rightside from "../components/rightside";
export const theme = createTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#833AB4",
      dark: "#000000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

function Homepage() {
  const navigator = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) {
      navigator("/login");
    }
  }, []);
  return (
    <>
      <Box
        theme={theme}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "primary.dark",
        }}
      >
        <Sidebar theme={theme}></Sidebar>
        <MainContent></MainContent>
        <Rightside></Rightside>
      </Box>
    </>
  );
}

export default Homepage;
