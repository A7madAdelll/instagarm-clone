import {
  Box,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { theme } from "../App";
import { useEffect, useState } from "react";
const Sidebar = () => {
  const [showSidebarText, setshowSidebarText] = useState(false);
  const [showbottombar, setshowbottombar] = useState(false);
  const [bottomValue, setbottomValue] = useState(0);
  useEffect(() => {
    if (window.innerWidth > 1000) {
      setshowbottombar(false);

      setshowSidebarText(true);
    }
    if (window.innerWidth < 500) {
      setshowbottombar(true);
    }

    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setshowbottombar(false);

        setshowSidebarText(true);
      }
      if (window.innerWidth < 500) {
        setshowbottombar(true);
      }
    };
    console.log(showSidebarText);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebaroptions = [
    { text: "home", Icon: HomeIcon },
    { text: "search", Icon: SearchIcon },
    { text: "explore", Icon: ExploreIcon },
    { text: "reels", Icon: SlowMotionVideoIcon },
    { text: "messages", Icon: WhatsAppIcon },
    { text: "create", Icon: AddCircleOutlineIcon },
    { text: "likes", Icon: FavoriteBorderSharpIcon },
  ];

  const sidebarmoreoptions = [
    { text: "Meta AI", Icon: InstagramIcon },
    { text: "AI Studio", Icon: SearchIcon },
    { text: "Threads", Icon: ExploreIcon },
    { text: "More", Icon: SlowMotionVideoIcon },
  ];
  return (
    <>
      <Box
        theme={theme}
        display={"flex"}
        flexDirection={"column"}
        sx={{
          // width: "9vw",
          display: "flex",
          gap: "3vw",
          justifyContent: "space-between",
          borderRight: "1px solid rgb(175, 175, 175)",
          backgroundColor: "primary.dark",
        }}
      >
        <List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          {showSidebarText ? (
            <Typography
              variant="h5"
              padding={3}
              fontFamily={"revert-layer"}
              sx={{ color: "primary.contrastText" }}
            >
              Instagram
            </Typography>
          ) : (
            <ListItemButton>
              <ListItemIcon
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <InstagramIcon theme={theme} sx={{ color: "primary.light" }} />
                <ListItemText
                  theme={theme}
                  sx={{
                    textAlign: "center",
                    color: "primary.light",
                    display: showSidebarText ? "block" : "none",
                  }}
                ></ListItemText>
              </ListItemIcon>
            </ListItemButton>
          )}

          {sidebaroptions.map((x) => (
            <ListItemButton>
              <ListItemIcon
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <x.Icon theme={theme} sx={{ color: "primary.light" }} />
                <ListItemText
                  theme={theme}
                  sx={{
                    textAlign: "center",
                    color: "primary.light",
                    display: showSidebarText ? "block" : "none",
                  }}
                >
                  {x.text}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        {showSidebarText ? (
          <List
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              // alignItems: "left",
              gap: 0.5,
            }}
          >
            {sidebarmoreoptions.map((x) => (
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <x.Icon theme={theme} sx={{ color: "primary.light" }} />
                  <ListItemText
                    theme={theme}
                    sx={{ textAlign: "center", color: "primary.light" }}
                  >
                    {x.text}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        ) : (
          <></>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
