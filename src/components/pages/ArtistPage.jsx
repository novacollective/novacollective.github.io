import { useParams } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
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
      <div className="flex p-5 justify-center items-center gap-8">
        <h2 className="text-3xl my-4 font-bold">
          {name}
        </h2>
        {igURL && (
        <div
          href={igURL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SocialIcon url={igURL} style={{ height: 35, width: 35 }} bgColor="#0025db" />
        </div>
        )}
      </div>
      <div className="flex flex-col w-[70%] justify-center items-center mx-auto">
        <img
          className="w-[50%] object-contain my-8 rounded-md hover:scale-110 hover: transition-all ease-in-out"
          src={image}
          alt={name}
        />
        <div className="justify-between items-center mb-6 p-4 rounded">
          <h3 className="text-lg text-pretty tracking-wide leading-relaxed">
            {bio}
          </h3>
        </div>
      </div>
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
