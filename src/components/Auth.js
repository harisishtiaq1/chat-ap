import { Box, Button, Typography } from "@mui/material";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box sx={{ textAlign: "center", mt: 8,fontFamily:'Poppins' }}>
      <Typography variant="h4" component="h4" sx={{ m: 4, fontWeight: "500"}}>
        Sign in with Google to Continue
      </Typography>
      <Button onClick={signInWithGoogle} variant="contained">
        Sign in with google
      </Button>
    </Box>
  );
};
