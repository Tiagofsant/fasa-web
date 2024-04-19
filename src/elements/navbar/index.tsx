import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { GREY, PRIMARY, SECONDARY } from "../../theme/palette";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="default"
        sx={{ backgroundColor: GREY[0] }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              color: PRIMARY.main,
            }}
          >
            Vida Animal Blog
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: SECONDARY.main,
            }}
          >
            Vida Animal Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
