import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    id: null,
    title: "",
    technologies: "",
    project_url: "",
    image: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchProjects();
    }
  }, []);

  const fetchProjects = () => {
    axiosClient
      .get("/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => {
        console.error("Layihələri almaqda xəta:", err);
        if (err.response && err.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const resetForm = () => {
    setForm({
      id: null,
      title: "",
      technologies: "",
      project_url: "",
      image: null,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("technologies", form.technologies);
    formData.append("project_url", form.project_url);
    if (form.image) formData.append("image", form.image);

    const request = form.id
      ? axiosClient.post(`/projects/${form.id}`, formData)
      : axiosClient.post("/projects", formData);

    request
      .then(() => {
        fetchProjects();
        resetForm();
      })
      .catch((err) => {
        console.error("Layihə göndərərkən xəta:", err);
        alert("Layihəni əlavə etmək mümkün olmadı.");
      });
  };

  const editProject = (project) => {
    setForm({
      id: project.id,
      title: project.title,
      technologies: project.technologies || "",
      project_url: project.project_url || "",
      image: null,
    });
  };

  const deleteProject = (id) => {
    if (window.confirm("Silmek istədiyinizə əminsiniz?")) {
      axiosClient
        .delete(`/projects/${id}`)
        .then(() => fetchProjects())
        .catch((err) => {
          console.error("Layihəni silərkən xəta:", err);
          alert("Silinmə uğursuz oldu.");
        });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <div style={styles.header}>
          <h2>Layihələr</h2>
          <button style={styles.logoutBtn} onClick={logout}>
            Çıxış
          </button>
        </div>
        <ProjectList
          projects={projects}
          editProject={editProject}
          deleteProject={deleteProject}
        />
      </div>

      <div style={styles.formArea}>
        <h2 style={styles.formTitle}>
          {form.id ? "Layihəni yenilə" : "Yeni layihə əlavə et"}
        </h2>
        <ProjectForm
          form={form}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          handleSubmit={handleSubmit}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: "40px",
    gap: "30px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  logoutBtn: {
    padding: "8px 14px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  formArea: {
    flex: 1,
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  formTitle: {
    marginBottom: "20px",
  },
};

export default AdminPanel;
