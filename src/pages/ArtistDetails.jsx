import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { artistsid: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistsData,
    isFetching: isFetchingArtistsDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistsDetails) return <Loader title="Search artists detail" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistsData={artistsData} />

      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics</h2>
      </div>

      <RelatedSongs />
    </div>
  );
};

export default ArtistDetails;
