import { createContext, useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const customStyles = {
  overlay: {
    position: "fixed",
    zIndex: 99999,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1px",
    maxWidth: "90vw",
    width: "100%",
  },
};

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();

      console.log(data);
      setTrailerKey(data.results[0]?.key || "");
      setIsOpen(true);
    } catch (error) {
      setIsOpen(false);
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-3xl">
          <div className="relative w-full min-h-[250px] md:min-h-[390px] aspect-video">
            <YouTube
              videoId={trailerKey}
              opts={{
                width: "100%",
                height: "100%",
                playerVars: { autoplay: 1 },
              }}
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </Modal>
    </MovieContext.Provider>
  );
};

export { MovieProvider, MovieContext };
