import { useSelector, useDispatch } from "react-redux";
import { logout, loginRequest } from "./store";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const isLoading = useSelector((state: any) => state.auth.isLoading);
  const loggedInUser = useSelector((state: any) => state.auth.username);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username) {
      dispatch(loginRequest());
      dispatch({ type: "auth/loginRequest", payload: username });
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <h1>Welcome to Intuit - Please Login</h1>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Sign In"}
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome, {loggedInUser}!</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;