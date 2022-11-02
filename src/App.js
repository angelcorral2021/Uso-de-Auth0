import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import './App.css'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Is Loading</h1>
  }

  return (
    <div className="App">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
     
    </div>
    
  );
}

export default App;
 