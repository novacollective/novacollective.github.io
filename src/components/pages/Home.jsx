import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/instagram';
import { useArtists } from '../../ArtistsContext';

const Home = () => {
  const { artists } = useArtists();
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(artists)
    ? [...artists].slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="my-8 flex flex-col items-center lg:my-[2%]">
      <h2 className="text-center text-2xl my-4 lg:text-3xl lg:my-10 text-[#0f99ff]">
        Current Exhibition
      </h2>

      <p className="text-gray-700 my-6">********************</p>

      <h2 className="text-center text-2xl lg:text-3xl text-[#0f99ff]">Artists</h2>

      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-11">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          type="button"
          className="font-bold text-2xl bg-[#f48221] pl-10 pr-10 py-2 rounded-r-3xl hidden lg:block lg:h-14 lg:self-center lg:col-span-1 cursor-pointer"
        >
          {'<'}
        </button>

        {artists.length > 0
          && currentItems.map(({
            id, name, image, igURL,
          }) => (
            <div key={id} className="max-w-md mx-auto lg:col-span-3 p-12 lg:p-4">
              <Link to={`/artists/${id}`} className="block">
                <div className="flex justify-around">
                  <h3 className="text-center text-xl font-bold">
                    {name}
                  </h3>
                  {igURL && (
                  <a
                    href={igURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <SocialIcon url={igURL} style={{ height: 35, width: 35 }} bgColor="#0025db" />
                  </a>
                  )}
                </div>
                <img
                  src={image}
                  alt={name}
                  className="object-contain my-8 rounded-md w-full hover:scale-110 hover: transition-all ease-in-out"
                />
              </Link>
            </div>
          ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(artists.length / itemsPerPage)}
          type="button"
          className="font-bold text-2xl bg-[#f48221] pr-10 pl-4 py-2 rounded-l-3xl hidden lg:block lg:h-14 lg:self-center lg:col-start-11 cursor-pointer"
        >
          {'>'}
        </button>
        <div className="flex justify-between lg:hidden">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            type="button"
            className="font-bold text-2xl bg-[#f48221] pl-10 pr-4 py-2 rounded-r-3xl"
          >
            {'<'}
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(artists.length / itemsPerPage)}
            type="button"
            className="font-bold text-2xl bg-[#f48221] pr-10 pl-4 py-2 rounded-l-3xl"
          >
            {'>'}
          </button>
        </div>
      </div>

      <h2 className="text-center text-2xl my-10 lg:text-3xl text-[#0f99ff]">About Nova</h2>
    </section>
  );
};

export default Home;
