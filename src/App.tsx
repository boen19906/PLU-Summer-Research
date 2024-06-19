import { Box, Container } from "@mui/material";
import EmailForm from "./components/EmailForm";
import Heading from "./components/Heading";
import ProtienForm from "./components/ProtienForm";
import SubmitButton from "./components/Submit";
import Cite from "./components/Cite";
import ContactInfo from "./components/Contact";

function App() {
  return (

    <Container> 
        <Heading/>
        
        <EmailForm/>
        <ProtienForm/>
        <SubmitButton/>
        <Cite/>
        <ContactInfo/>
        
        
    </Container>
    


  );
}

export default App;
