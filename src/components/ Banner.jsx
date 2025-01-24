import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = ({ data }) => {
  return (
    <div
      className="w-full h-[600px] bg-no-repeat
    bg-center bg-cover relative"
      style={{
        backgroundImage: data?.poster_path
          ? `url(${import.meta.env.VITE_IMAGE_URL}${data.poster_path})`
          : "",
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-black/40" />
      <div
        className="w-full h-full flex flex-col p-6 lg:flex-row items-center
        lg:justify-center lg:space-x-[30px] lg:p-8 relative z-20"
      >
        <div className="flex flex-col space-y-4 items-baseline lg:w-[50%]">
          <p className="text-white text-sm lg:text-md bg-gradient-to-r from-red-600 to-red-300 py-1 px-3 rounded-sm">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[20px] lg:text-[30px] font-bold">
              {data.title}
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <img
              className="lg:w-8 lg:h-8 w-6 h-6"
              src={IconRating}
              alt="rating"
            />
            <img
              className="lg:w-8 lg:h-8 w-5 h-5"
              src={IconRating}
              alt="rating"
            />
            <img
              className="lg:w-8 lg:h-8 w-5 h-5"
              src={IconRating}
              alt="rating"
            />
            <img
              className="lg:w-8 lg:h-8 w-5 h-5"
              src={IconRating}
              alt="rating"
            />
            <img
              className="lg:w-8 lg:h-8 w-5 h-5"
              src={IconRatingHalf}
              alt="rating"
            />
          </div>
          <p className="text-white text-[14px] lg:text-base line-clamp-3">
            {data.overview}
          </p>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white font-bold text-md lg:text-lg py-1 px-2 rounded-sm">
              Chi tiết
            </button>
            <button className="bg-red-600 text-white font-bold text-md lg:text-lg py-1 px-2 rounded-sm">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex items-center justify-center p-0 mt-8">
          <div className="w-[170px] h-[280px] lg:w-[300px] lg:h-[500px] bg-white/20 relative group cursor-pointer">
            <img
              src={
                data?.poster_path
                  ? `${import.meta.env.VITE_IMAGE_URL}${data.poster_path}`
                  : ImgTemp
              }
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div
              className="w-full h-full absolute top-0 left-0 flex items-center justify-center
                    backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            >
              <img src={IconPlay} alt="play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
