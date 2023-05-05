import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Chat(room) {
  const [newMessage, setNewMessage] = useState("");
  const [message, setMessage] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "===", room));
    onSnapshot(queryMessages, (snapshot) => {
      let message = [];
      snapshot.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessage(message);
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newMessage, "message");
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };
  return (
    <Box
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        {message.map((messages) => (
          <Typography>{messages.text}</Typography>
        ))}
      </Box>
      <TextField
        autoComplete="off"
        label="Enter Message Here"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <Button onClick={handleSubmit} variant="contained" sx={{ mt: 3 }}>
        Send
      </Button>
    </Box>
  );
}

export default Chat;
