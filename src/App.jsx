import { createTheme } from "@mui/material";
import Homepage from "./pages/home_page";
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
function App() {
  return (
    <>
      <Homepage></Homepage>
    </>
  );
}

export default App;
