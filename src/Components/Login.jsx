import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://back-site-2.onrender.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // Sunucudan gelen hata mesajını da almaya çalışalım
        const errorData = await response.json().catch(() => ({}));
        const errorMessage = errorData.message || "Giriş uğursuz oldu!";
        throw new Error(errorMessage);
      }

      const data = await response.json();

      console.log("Giriş başarılı:", data);
      localStorage.setItem("token", data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("Xəta:", err);
      alert(err.message || "Giriş uğursuz oldu!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Admin Giriş</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Şifrə:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Giriş et</button>
      </form>
    </div>
  );
}

export default Login;
