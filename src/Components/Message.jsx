import React, {forwardRef} from 'react'
import {Box,Flex} from "@chakra-ui/react";

const Message = forwardRef(({message,username},ref)=> {

    function isURL(input) {
        const pattern = new RegExp(
          "^(https?:\\/\\/)?" + // protocol
            "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
            "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
            "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
            "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
          "i"
        ); // fragment locator
        return !!pattern.test(input);
      }

      
    const isUser = username === message.username;
    return (
        <Box padding={["0 20px","0 20px","0 100px","0 200px"]}>
        <Flex ref={ref}
        w="fit-content"
        maxWidth="70%"
        justifyContent="center"
        alignItems="center"
        borderRadius="lg" 
        overflow="hidden" 
        padding="8px"
        marginTop="10px" 
        marginBottom="10px" 
        marginLeft={[isUser ?"auto":"0", isUser? "auto":"0px", isUser? "auto":"0",isUser? "auto":"0"]}
        marginRight={[isUser ?"0":"0", isUser? "0":"0", isUser? "0":"0",isUser? "0":"0"]}
        bg={isUser ? "#3f83f8" : "darkgray"} 
        color="white" 
        fontWeight="bold">
            
            <p>{message.username}:  {(message.message)}</p>
        </Flex>
        </Box>

    )
})

export default Message