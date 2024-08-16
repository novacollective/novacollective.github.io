import { useParams } from 'react-router-dom';
import { useArtists } from '../../ArtistsContext';

function ArtistPage() {
  const { id } = useParams();
  const { artists, loading } = useArtists();
  const {
    name, bio, image, igURL,
  } = artists.find((a) => a.id === id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!id) {
    return <div>Artist not found.</div>;
  }

  return (
    <section className="flex flex-col justify-between lg:h-screen lg:py-6">
      <div className="flex p-5 justify-center">
        <h2 className="text-3xl my-4 font-bold">
          {name}
        </h2>
      </div>
      <div className="md:w-[70%] md:mx-auto lg:flex lg:w-[90%]">
        <div className="w-full p-6 flex justify-center">
          <img
            className="flex justify-center object-contain rounded-lg w-[80%]"
            src={image}
            alt={name}
          />
        </div>
        <div className="p-8">
          <div className="justify-between items-center mb-6 p-4 rounded">
            <h3 className="text-lg font-bold">
              {bio}
            </h3>
          </div>
        </div>
      </div>
      <a href={igURL} target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      {/* Buttons */}
      <div className="flex justify-between mb-10">
        <a
          type="button"
          href="/"
          className="font-bold w-20 text-2xl bg-[#f48221] pl-10 pr-4 py-3 rounded-r-3xl text-white"
        >
          {'<'}
        </a>
      </div>
    </section>
  );
}

export default ArtistPage;
