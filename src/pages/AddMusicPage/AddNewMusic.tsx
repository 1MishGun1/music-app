import React, { useState } from "react";
import supaBase from "../../api/supabaseClient";
import Styles from "./AddMusicPage.module.css";

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
      <h1 className={Styles["list__title"]}>Запушить песенку</h1>
      <form onSubmit={handleFormSubmit} className={Styles["add_music__form"]}>
        <label htmlFor="file_input">Выбери свою песенку (ее файлик):</label>
        <input
          type="file"
          id="file_input"
          accept=".mp3"
          onChange={handleFileChange}
          className={Styles["file__input"]}
          required
        />
        <button type="submit" className={Styles["add_music__btn"]}>
          Запушить файл
        </button>
        {/* <p className={Styles["message__upload"]}>Файл запушился успешно!</p> */}
      </form>
      {successMessage && (
        <p className={Styles["message__upload"]}>{successMessage}</p>
      )}
      {errorMessage && (
        <p className={Styles["message__upload"]}>{errorMessage}</p>
      )}
    </div>
  );
};
