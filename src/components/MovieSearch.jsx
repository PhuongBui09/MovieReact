import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);

  return (
    <div className="text-white uppercase p-10 mb-4">
      <h1 className="font-bold mb-4">{title}</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[120px] h-[200px] lg:w-[200px] lg:h-[300px] relative group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  className="w-full h-full object-cover"
                  src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                  alt={item.title}
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieSearch;
