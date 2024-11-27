import { useState, useEffect } from "react";
import supaBase from "../../api/supabaseClient";
import { BASE_URL } from "../../api/supabaseClient";
import { FaPlay, FaPause } from "react-icons/fa";

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
      // Если аудио уже играет, останавливаем его
      if (audioElement) {
        audioElement.pause();
        setIsPlaying(false);
      }
    } else {
      // Если аудио не играет, начинаем воспроизведение
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
      <h1>Все песенки</h1>
      <div className="music__items">
        {musicList.map((fileName, index) => (
          <div key={index} className="music__item">
            {fileName}
            <button onClick={() => handlePlay(fileName)}>
              {isPlaying && currentAudio === fileName ? (
                <FaPause />
              ) : (
                <FaPlay />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
