import { Link } from "react-router-dom";

const DetailsHeader = ({ songData }) => {
  const artist = songData?.artists[0].adamid;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          className="h-20 ml-7"
          src={songData?.images.background}
          alt="art"
        />
        <div className="ml-5">
          {!!artist && (
            <Link to={`/artists/${artist}`}>
              <p className="font-bold sm:text-3xl text-xl block">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <div className="text-base text-gray-400 mt-2 block">
            {songData?.title}
          </div>

          <p>{songData?.genres.primary}</p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
