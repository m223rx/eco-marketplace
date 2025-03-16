import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://www.sbsmobile.com/ita/305114-thickbox_default/floxy-headphones.jpg",
    rating: 4,
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 149.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO4touz92RkST3TQDgbSums2rtrdL1UGWlHg&s",
    rating: 5,
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 59.99,
    image: "https://m.media-amazon.com/images/I/71fEUcsDDEL.jpg",
    rating: 3,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image: "https://m.media-amazon.com/images/I/71fRP7KY9hL._AC_SL1500_.jpg",
    rating: 5,
  },
];

function ProductsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [rating, setRating] = useState(0);

  const toggleAside = () => setIsOpen(!isOpen);

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number.parseInt(e.target.value);
    setPriceRange(newPriceRange);
  };

  return (
<<<<<<< Updated upstream
    <div className="flex flex-row">
      <div>
        <button
          className="fixed left-0 top-20 z-40 m-2 rounded-full bg-indigo-600 p-2 text-white shadow-lg hover:bg-indigo-700"
          onClick={toggleAside}
        >
          {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
        </button>
        <aside
          className={`fixed left-0 top-0 z-30 h-full w-64 overflow-y-auto bg-white p-5 shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="mb-4 text-xl font-semibold text-gray-800">Filters</h2>

          <div className="mb-6">
            <h3 className="mb-2 font-medium text-gray-700">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-20 rounded border px-2 py-1"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-20 rounded border px-2 py-1"
              />
=======
    <>
      <div className='flex flex-row'>
        <div>
          <button
            className='fixed left-0 top-20 z-40 m-2 rounded-full bg-[#89AC46] p-2 text-white shadow-lg transition-all duration-300 hover:bg-indigo-700 focus:outline-none lg:hidden'
            onClick={toggleAside}
          >
            {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>

          <aside
            className={`fixed left-0 top-0 z-30 h-full w-64 transform overflow-y-auto bg-white p-5 shadow-lg transition-all duration-300 lg:relative lg:top-0 lg:translate-x-0 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h2 className='mb-4 text-xl font-semibold text-gray-800'>
              Filters
            </h2>

            <div className='mb-6'>
              <h3 className='mb-2 font-medium text-gray-700'>Categories</h3>
              <ul className='space-y-2'>
                {categories.map((category, index) => (
                  <li key={index}>
                    <label className='flex items-center'>
                      <input
                        type='checkbox'
                        className='form-checkbox text-[#89AC46]'
                      />
                      <span className='ml-2 text-gray-700'>{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
>>>>>>> Stashed changes
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 font-medium text-gray-700">Minimum Rating</h3>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-xl ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
<<<<<<< Updated upstream
=======
                <span>-</span>
                <input
                  type='number'
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(e, 1)}
                  className='w-20 rounded border px-2 py-1'
                />
              </div>
            </div>

            <div className='mb-6'>
              <h3 className='mb-2 font-medium text-gray-700'>Minimum Rating</h3>
              <div className='flex items-center'>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={24}
                    className={`cursor-pointer ${
                      star <= rating
                        ? "fill-[#89AC46] text-[#89AC46]"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                  />
                ))}
              </div>
            </div>

            <button className='w-full rounded bg-[#89AC46] py-2 text-white hover:bg-indigo-700 cursor-pointer'>
              Apply Filters
            </button>
          </aside>

          {isOpen && (
            <div
              className='fixed inset-0 z-20 bg-[#F1F0E9] bg-opacity-50 lg:hidden'
              onClick={toggleAside}
            ></div>
          )}
        </div>
        <section className='py-16'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-row items-center justify-between mb-10'>
              <h2 className='text-lg font-bold text-[#89AC46]'>
                Our Products
              </h2>
            </div>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {products.map((product) => (
                <div
                  key={product.id}
                  className='group relative overflow-hidden rounded-lg border bg-white p-4 shadow-md transition duration-300 hover:shadow-lg'
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className='h-40 w-full rounded-lg object-contain'
                  />

                  <div className='mt-3'>
                    <h3 className='text-lg font-semibold'>{product.name}</h3>
                    <div className='mt-2 flex items-center gap-2'>
                      <span className='text-xl font-bold text-[#89AC46]'>
                        ${product.price}
                      </span>
                      <div className='flex items-center'>
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-yellow-400 ${
                              i < product.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className='absolute inset-0 flex items-center justify-center bg-[#89AC46] bg-opacity-99 opacity-0 transition duration-300 group-hover:opacity-80 cursor-pointer'>
                    <button className='rounded-lg bg-white px-4 py-2 text-black font-semibold shadow-md transition hover:bg-gray-100 cursor-pointer'>
                      See More
                    </button>
                  </div>
                </div>
>>>>>>> Stashed changes
              ))}
            </div>
          </div>
        </aside>

        {isOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
            onClick={toggleAside}
          ></div>
        )}
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-lg font-bold text-indigo-600">Our Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg border bg-white p-4 shadow-md hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 w-full rounded-lg object-contain"
                />
                <div className="mt-3">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xl font-bold text-indigo-600">
                      ${product.price}
                    </span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-yellow-400 ${
                            i < product.rating ? "text-yellow-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-600 bg-opacity-90 opacity-0 transition-opacity group-hover:opacity-100">
                  <Link to={`/product/${product.id}`}>
                    <button className="rounded-full bg-white px-4 py-2 text-black font-semibold shadow-md hover:bg-gray-100">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsPage;
