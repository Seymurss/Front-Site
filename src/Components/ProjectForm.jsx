// src/Components/ProjectForm.jsx
import React from "react";

const ProjectForm = ({ form, handleChange, handleFileChange, handleSubmit, resetForm }) => {
  return (
    <>
      <style>
        {`
          .form-container {
            max-width: 600px;
            margin: 30px auto;
            padding: 30px;
            background-color: #fff;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
          }

          .form-title {
            font-size: 26px;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
          }

          .form-input {
            width: 100%;
            padding: 12px 15px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 10px;
            font-size: 16px;
            box-sizing: border-box;
          }

          .form-input:focus {
            border-color: #007BFF;
            outline: none;
          }

          .file-input {
            background-color: #f9f9f9;
            cursor: pointer;
          }

          .form-buttons {
            display: flex;
            justify-content: space-between;
            gap: 15px;
          }

          .btn {
            padding: 10px 20px;
            font-size: 15px;
            border-radius: 10px;
            cursor: pointer;
            border: none;
            transition: background-color 0.2s ease-in-out;
          }

          .btn-submit {
            background-color: #007BFF;
            color: white;
          }

          .btn-submit:hover {
            background-color: #0056b3;
          }

          .btn-cancel {
            background-color: #e0e0e0;
            color: #333;
          }

          .btn-cancel:hover {
            background-color: #c2c2c2;
          }
        `}
      </style>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="form-container">
        <h2 className="form-title">Layihə Formu</h2>

        <input
          type="text"
          name="title"
          placeholder="Başlıq"
          value={form.title}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="text"
          name="technologies"
          placeholder="Texnologiyalar"
          value={form.technologies}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="text"
          name="project_url"
          placeholder="Layihə linki"
          value={form.project_url}
          onChange={handleChange}
          className="form-input"
        />

        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="form-input file-input"
        />

        <div className="form-buttons">
          <button type="submit" className="btn btn-submit">
            {form.id ? "Yenilə" : "Əlavə et"}
          </button>

          {form.id && (
            <button type="button" onClick={resetForm} className="btn btn-cancel">
              Ləğv et
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
