import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Rating from '../Components/Rating'
import products from '../allProducts'


const ProductDetails = () => {
  // const { id } = (products.id)
  const { id } = useParams();
  // const singleProduct = products.find((p) => { return p._id === parseInt(match.params.id) })
  // const singleProduct = products.find((p) => { return String(p._id) === (id) })
  const singleProduct = products.find(obj => obj.id === id)

  if (!singleProduct) return null;
  return (
    <>
      <Header />
      <div className="w-full min-h-screen bg-gray-200 flex flex-col justify-center">
        <div className="relative m-3 flex flex-wrap mx-auto justify-center">
          <div className="relative block lg:flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-9 lg:m-0 w-4/5 lg:w-2/5 shrink-0 overflow-hidden rounded-xl lg:rounded-r-none bg-white bg-clip-border text-gray-700">
              <img key={singleProduct.id}
                alt={singleProduct.imageAlt}
                src={singleProduct.imageSrc}
                className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h6 className="mb-4 mt-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                startups {singleProduct.color}
              </h6>
              {/* Name */}
              <Link to='#' className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {singleProduct.name}
              </Link>
              <p className="mb-4 mt-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software company
                selling licenses. Yet its own business model disruption is only part of the story
              </p>

              <div className="relative block lg:flex w-full">
                {/* Price */}
                <div className="mt-2 h-10 w-28 mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-gray-800 antialiased">
                  Price: {singleProduct.price}
                </div>

                {/* In Stock */}
                <button className='flex lg:ml-14 select-none items-center gap-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none' type="button">
                  {singleProduct.countInStock > 0
                    ? <>
                      <div className="rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-green-500 transition-all active:bg-green-600">
                        InStock</div>
                      <div className="mb-4 mt-4 lg:ml-4 block text-base text-gray-600 antialiased">
                        Quantity : {singleProduct.countInStock}
                      </div>
                    </>
                    : <div className=" mb-2 rounded-sm py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white bg-red-500 transition-all active:bg-red-600">
                      "Out Of Stock"</div>}
                </button>

              </div>

              {/* Rating */}
              <div className="w-36 justify-center transition-colors duration-150 text-lg md:text-xl">
                <Rating value={singleProduct.rating} />
              </div>

              {/* Add to cart */}
              <Link className="inline-block" to="/ShoppingCart">
                <div className="mt-4 lg:ml-8 block lg:flex justify-center gap-x-3">
                  <button href="/ShoppingCart" className="py-2 px-4 ml-4 bg-gray-600 text-white font-semibold border border-transparent rounded hover:bg-white hover:text-gray-600 hover:border-gray-600 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0"
                    type='button'
                    disabled={singleProduct.countInStock === 0}>
                    Add To Cart</button>
                  <Link to="/" className="ml-3 lg py-2 px-4 bg-transparent text-gray-600 font-semibold border border-gray-600 rounded hover:bg-gray-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                    Go Back</Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails