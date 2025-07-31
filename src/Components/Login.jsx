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

  // Stil objeleri inline olarak
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#333",
    },
    label: {
      fontWeight: "600",
      color: "#555",
      marginBottom: "6px",
      display: "inline-block",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      marginBottom: "20px",
      border: "1.8px solid #ddd",
      borderRadius: "8px",
      fontSize: "1rem",
      transition: "border-color 0.3s ease",
    },
    inputFocus: {
      borderColor: "#667eea",
      outline: "none",
      boxShadow: "0 0 6px rgba(102, 126, 234, 0.5)",
    },
    button: {
      width: "100%",
      padding: "14px 0",
      border: "none",
      background: "linear-gradient(90deg, #667eea, #764ba2)",
      color: "white",
      fontWeight: "700",
      fontSize: "1.1rem",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      background: "linear-gradient(90deg, #5a6cd8, #6e3d96)",
    },
  };

  // Basit input focus efekti için React state (opsiyonel)
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Giriş</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={styles.label}>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={emailFocused ? {...styles.input, ...styles.inputFocus} : styles.input}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </div>
        <div>
          <label style={styles.label}>Şifrə:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={passwordFocused ? {...styles.input, ...styles.inputFocus} : styles.input}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
        </div>
        <button
          type="submit"
          style={buttonHovered ? {...styles.button, ...styles.buttonHover} : styles.button}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Giriş et
        </button>
      </form>
    </div>
  );
}

export default Login;
