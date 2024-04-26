/* eslint-disable react/prop-types */
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const Auth = ({ setIsAuth }) => {
  const [loading, setLoading] = useState(false);
  const signInWithGoogle = async () => {
    try {
      const results = await signInWithPopup(auth, provider);
      cookies.set("auth-token", results.user.refreshToken);
      setIsAuth(true);
      console.log(results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); // Set loading back to false after sign-in completes
    }
  };
  return (
    <div className="auth-container">
      <p>Sign in with Google</p>
      <button
        className={`btn btn-primary${loading ? " disabled" : ""}`} // Add Bootstrap classes and conditional disabled state
        onClick={signInWithGoogle}
        disabled={loading} // Disable button during loading state
      >
        {loading ? "Signing in..." : "Sign in with Google"}{" "}
        {/* Show appropriate text based on loading state */}
      </button>
    </div>
  );
};

export default Auth;
