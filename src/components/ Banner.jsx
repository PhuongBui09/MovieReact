import IconRating from "../assets/rating.png"
import IconRatingHalf from "../assets/rating-half.png"
import ImgTemp from "../assets/temp-1.jpeg"
import IconPlay from "../assets/play-button.png"

const  Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-no-repeat
    bg-center bg-cover relative">
        <div className="absolute w-full h-full top-0 left-0 bg-black/40" />
        <div className="w-full h-full flex items-center
        justify-center space-x-[30px] p-8 relative z-20">
            <div className="flex flex-col space-y-4 items-baseline w-[50%]">
                <p className="text-white text-md bg-gradient-to-r from-red-600 to-red-300 py-1 px-3 rounded-sm">TV Show</p>
                <div className="flex flex-col space-y-4">
                    <h2 className="text-white text-[40px] font-bold">Nghe nói em thích tôi</h2>
                </div>
                <div className="flex items-center space-x-4">
                    <img className="w-8 h-8" src={IconRating} alt="rating" />
                    <img className="w-8 h-8" src={IconRating} alt="rating" />
                    <img className="w-8 h-8" src={IconRating} alt="rating" />
                    <img className="w-8 h-8" src={IconRating} alt="rating" />
                    <img className="w-8 h-8" src={IconRatingHalf} alt="rating" />
                </div>
                <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. 
                    Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex items-center space-x-4">
                    <button className="bg-black text-white font-bold text-lg py-1 px-2 rounded-sm">Chi tiết</button>
                    <button className="bg-red-600 text-white font-bold text-lg py-1 px-2 rounded-sm">Xem phim</button>
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
                <div className="w-[300px] h-[500px] bg-white/20 relative group cursor-pointer">
                    <img 
                        src={ImgTemp} 
                        alt="temp"
                        className="w-full h-full object-cover"
                    />
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center
                    backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                        <img 
                            src={IconPlay} 
                            alt="play"
                            className="w-16 h-16"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default  Banner