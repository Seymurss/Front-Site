import React, { useState } from "react";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
  },
  formWrapper: {
    backgroundColor: "white",
    padding: "40px 30px",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    marginBottom: "30px",
    textAlign: "center",
    fontSize: "1.8rem",
    color: "#333",
    fontWeight: "700",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#555",
    fontSize: "0.9rem",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1.5px solid #ddd",
    fontSize: "1rem",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#667eea",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "14px",
    border: "none",
    borderRadius: "10px",
    background:
      "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  buttonHover: {
    background:
      "linear-gradient(90deg, #5a6cd8 0%, #6e3d96 100%)",
  },
  errorText: {
    color: "#e74c3c",
    marginTop: "-12px",
    marginBottom: "12px",
    fontSize: "0.85rem",
  },
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonHover, setButtonHover] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Geçerli bir email girin.");
      return;
    }
    if (password.length < 6) {
      setError("Şifre en az 6 karakter olmalı.");
      return;
    }
    setError("");
    alert("Giriş başarılı (burada API isteği yapılabilir)");
  };

  return (
    <div style={styles.container}>
      <form style={styles.formWrapper} onSubmit={handleSubmit} noValidate>
        <h2 style={styles.title}>Giriş Yap</h2>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email adresinizi girin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              ...styles.input,
              ...(focusedInput === "email" ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label} htmlFor="password">
            Şifre
          </label>
          <input
            id="password"
            type="password"
            placeholder="Şifrenizi girin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              ...styles.input,
              ...(focusedInput === "password" ? styles.inputFocus : {}),
            }}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
            required
          />
        </div>

        {error && <div style={styles.errorText}>{error}</div>}

        <button
          type="submit"
          style={{ ...styles.button, ...(buttonHover ? styles.buttonHover : {}) }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
