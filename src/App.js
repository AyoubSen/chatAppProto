import "./App.css";
import firebase from "firebase";
import Message from "./Components/Message";
import FlipMove from "react-flip-move";
import db from "./firebase";
import React, { useState, useEffect } from "react";
import {
  Input,
  FormControl,
  InputGroup,
  InputRightAddon,
  Image,
  Center,
} from "@chakra-ui/react";
import { Box, Flex, Button } from "@chakra-ui/react";
function App() {
  const [user, setUser] = useState("");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  console.log(input);

  const sendMessages = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      username: user,
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    setUser(prompt("What's your name? "));
  }, []);

  if (user === "") {
    setUser("Anonymous");
  }
  return (
    <Box className='App'>
      <Box marginTop='30px'>
        <Center marginBottom='20px'>
          <Image
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c526.png'
            alt='messenger logo'
            w={["50px", "50px", "80px", "80px"]}
          />
        </Center>
        <h1>Welcome {user} ! </h1>
      </Box>

      <Flex justifyContent='center' marginTop='20px'>
        <form>
          <FormControl>
            <InputGroup>
              <Input
                placeholder='Type a message'
                w='200px'
                variant='flushed'
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <InputRightAddon
                children={
                  <Button type='submit' onClick={sendMessages}>
                    Send
                  </Button>
                }
              />
            </InputGroup>
          </FormControl>
        </form>
      </Flex>

      {/*messages*/}
      <Box marginTop='30px'>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message username={user} message={message} key={id} />
          ))}
        </FlipMove>
      </Box>
    </Box>
  );
}

export default App;
