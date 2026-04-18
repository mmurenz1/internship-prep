import { useState } from 'react';

interface LoginForm {
  username: string;
  password: string;
}

function App() {
  const [form, setForm] = useState<LoginForm>({ username: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="Username"
        value={form.username}
        onChange={(e) => setForm({ ...form, username: e.target.value })}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <br />
      <button onClick={handleSubmit}>Login</button>
      <p style={{ color: "red" }}>{error}</p>
      {success && <p style={{ color: "green" }}>Login Successful!</p>}
    </div>
  )
}

export default App;