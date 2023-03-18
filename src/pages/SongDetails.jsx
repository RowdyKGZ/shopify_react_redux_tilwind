import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailQuery } from "../redux/services/shazamCore";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: songData,
    isFetching: isFetchingSongDetails,
    error,
  } = useGetSongDetailQuery(songid);

  if (isFetchingSongDetails) return <Loader title="Search song detail" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>

        <div className="mt-2">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p className="text-gray-400 text-base my-1" key={i}>
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, no lyrics found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
