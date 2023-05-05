import "./App.css";
import { Auth } from "./components/Auth";
import Cookies from "universal-cookie";
import { useState, useRef } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Chat from "./components/Chat";
const cookies = new Cookies();
function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);
  console.log(isAuth, "Auth");
  console.log(room, "room");
  console.log(roomInputRef, "roomInputRef");

  if (!isAuth) {
    return (
      <>
        <Auth setIsAuth={setIsAuth} />
      </>
    );
  }
  return (
    <>
      {room ? (
        <Chat room={room} />
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" component="h4" sx={{ fontWeight: "500" }}>
            Enter Room Name
          </Typography>
          <Stack
            spacing={4}
            direction="column"
            width={200}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input
              variant="outlined"
              label="Enter Room Name"
              placeholder="Enter Room Name"
              style={{ mt: 4 }}
              ref={roomInputRef}
            />
            <Button
              variant="contained"
              onClick={() => setRoom(roomInputRef.current.value)}
            >
              Enter Chat
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
}

export default App;
