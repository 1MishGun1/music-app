import { useState, useEffect } from "react";
import supaBase from "../../api/supabaseClient";
import { BASE_URL } from "../../api/supabaseClient";
import { FaPlay, FaPause } from "react-icons/fa";
import Styles from "./ListMusicPage.module.css";

export const ListMusicPage = () => {
  const [musicList, setMusicList] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(
    null
  );

  useEffect(() => {
    async function fetchFilesFromSupabase() {
      const { data, error } = await supaBase.storage.from("musics").list();

      if (error) {
        console.error("Error fetching files:", error.message);
      } else {
        const files = data?.map((file) => file.name) || [];
        setMusicList(files);
      }
    }

    fetchFilesFromSupabase();
  }, []);

  const handlePlay = (fileName: string) => {
    if (isPlaying && currentAudio === fileName) {
      if (audioElement) {
        audioElement.pause();
        setIsPlaying(false);
      }
    } else {
      const newAudio = new Audio(
        `${BASE_URL}/storage/v1/object/musics/${fileName}`
      );
      newAudio.play();
      setCurrentAudio(fileName);
      setIsPlaying(true);
      setAudioElement(newAudio);
    }
  };

  return (
    <div>
      <h1 className={Styles["list__title"]}>Все песенки</h1>
      <div className={Styles["music__items"]}>
        {musicList.map((fileName, index) => (
          <div key={index} className={Styles["music__item"]}>
            {fileName}
            <button
              onClick={() => handlePlay(fileName)}
              className={Styles["manage_music__btn"]}
            >
              {isPlaying && currentAudio === fileName ? (
                <FaPause className={Styles["music__btn"]} />
              ) : (
                <FaPlay className={Styles["music__btn"]} />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
