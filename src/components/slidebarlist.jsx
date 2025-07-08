import showSidebarText from "./sidebar";
import { theme } from "../App";

const Slidebarlist = () => {
  return (
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
  );
};

export default Slidebarlist;
