import React, { useState } from "react";

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  imageWrapper: {
    width: "120px",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "60px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  buttons: {
    marginLeft: "auto",
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "6px 12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  },
  editBtn: {
    backgroundColor: "#4f46e5",
    color: "#fff",
  },
  deleteBtn: {
    backgroundColor: "#ef4444",
    color: "#fff",
  },
  text: {
    width: "201px",
    marginLeft: "23px",
  },
  paginationWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  paginationBtn: {
    padding: "8px 16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
    fontWeight: "500",
  },
};

const ITEMS_PER_PAGE = 4;

const ProjectList = ({ projects, editProject, deleteProject }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <>
      <ul style={styles.list}>
        {selectedProjects.map((p) => (
          <li key={p.id} style={styles.listItem}>
            {p.image_path && (
              <div style={styles.imageWrapper}>
                <img
                  src={`http://localhost:8000/storage/${p.image_path}`}
                  alt={p.title}
                  style={styles.image}
                />
              </div>
            )}

            <div style={styles.text}>
              <b>{p.title}</b> <br />
            </div>

            <div style={styles.buttons}>
              <button
                style={{ ...styles.button, ...styles.editBtn }}
                onClick={() => editProject(p)}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4338ca")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
              >
                Redaktə et
              </button>

              <button
                style={{ ...styles.button, ...styles.deleteBtn }}
                onClick={() => deleteProject(p.id)}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      {totalPages > 1 && (
        <div style={styles.paginationWrapper}>
          <button
            onClick={prevPage}
            style={styles.paginationBtn}
            disabled={currentPage === 1}
          >
            ⬅ Əvvəlki
          </button>
          <span>
            Səhifə {currentPage} / {totalPages}
          </span>
          <button
            onClick={nextPage}
            style={styles.paginationBtn}
            disabled={currentPage === totalPages}
          >
            Sonrakı ➡
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectList;
