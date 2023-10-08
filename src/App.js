import Navbar from "./Navbar";
import Home from "./Pages/Home";
import LogIn from "./Pages/Login";
import StartFundraiser from "./Pages/Start Fundraiser";
import UploadPictures from "./Pages/UploadPictures";
import LoginForm from "./Components/loginform";

function App() {
  
  let Component
  switch(window.location.pathname){
    case "/":
      Component = Home
      break
    case "/start-fundraiser":
      Component = StartFundraiser
      break
    case "/upload-images":
      Component = UploadPictures
      break
    case "/logIn":
      Component = LogIn
      return (
        <div className="page">
          <LoginForm />
        </div>
      );
      break
  }
  return(
    <>
    <Navbar/>
    <Component/>
    
    </>
  

  ) 
}

export default App;
