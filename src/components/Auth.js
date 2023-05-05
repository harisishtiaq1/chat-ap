import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontWeightBold: "600",
  },
  backgroundColor: "#F4F7FE",
});
export const Auth = (props) => {
  const { setisAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setisAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ textAlign: "center", mt: 8, fontFamily: "Poppins" }}>
        <Typography
          variant="h4"
          component="h4"
          sx={{ m: 4, fontWeight: "500" }}
        >
          Sign in with Google to Continue
        </Typography>
        <Button onClick={signInWithGoogle} variant="contained">
          <Typography>Sign in with google</Typography>
        </Button>
      </Box>
    </ThemeProvider>
  );
};
