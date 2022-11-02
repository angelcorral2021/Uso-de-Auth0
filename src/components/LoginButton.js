import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button type="submit" className="signin" onClick={() => loginWithRedirect()}>login</button>
    </div>
  );
};

export default LoginButton;
