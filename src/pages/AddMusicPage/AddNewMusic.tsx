import React, { useState } from "react";
import supaBase from "../../api/supabaseClient";

export const AddNewMusic = () => {
  const [file, setFile] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (file) {
      const { error } = await supaBase.storage
        .from("musics")
        .upload(`/${file.name}`, file);
      if (error) {
        setErrorMessage(`Ошибка при загрузке файла: ${error.message}`);
      } else {
        setSuccessMessage("Файл запушился успешно!");
        setErrorMessage("");
        setFile(null);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Запушить файл</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
