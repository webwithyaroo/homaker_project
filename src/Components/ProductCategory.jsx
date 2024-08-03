import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Button } from "./constant";
import { searchIcon } from "../constant";
import { Link } from "react-router-dom";
import { AppContext } from "../contest/AppContext"; // Adjust path if needed
import { useParams } from "react-router-dom";

const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 16;

const ProductCategory = () => {
  const formRef = useRef(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [trend, setTrend] = useState("all");
  const [loading, setLoading] = useState(false);

  const { setSelectedProduct, selectedProduct, images, setImages } =
    useContext(AppContext); // Access the context

  function handleImageChange(curr) {
    setSelectedProduct(curr); // Replace the current state with the new product
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const getImages = async (query, page) => {
    setLoading(true);
    if (query === "all") {
      query = "office chair";
    }

    try {
      const result = await axios.get(
        `${API_URL}?query=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
          import.meta.env.VITE_API_KEY
        }`
      );
      setImages(result.data.results);
      setTotalPages(Math.ceil(result.data.total / IMAGES_PER_PAGE));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  console.log(images);
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = formRef.current.value.trim();
    getImages(query || trend, 1);
  };

  const handleTrendChange = (newTrend) => {
    setTrend(newTrend);
    getImages(newTrend === "all" ? "office chair" : newTrend, 1);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    getImages(trend === "all" ? "office chair" : trend, newPage);
  };

  useEffect(() => {
    getImages("office chair", 1);
  }, []);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="ring-[1px] ring-border hover:ring-blue-300 hover:text-white shadow-xl max-w-fit mx-auto flex rounded-[10px] mb-16 max-sm:hidden"
      >
        <div className="flex p-5 w-[467px] relative">
          <label htmlFor="search">
            <span>
              <img src={searchIcon} alt="search" />
            </span>
          </label>
          <input
            type="search"
            ref={formRef}
            id="search"
            className="pl-5 py-2 text-regular"
            placeholder="Search products"
          />
        </div>
        <Button
          label={"Explore "}
          className={"bg-primary text-white py-5 px-[30px] rounded-[10px]"}
        />
      </form>

      <div className="lg:flex-center flex gap-6 text-[18px] max-sm:hidden mb-32 max-lg:overflow-x-scroll scroll-x ">
        <Button
          label={"All"}
          className={`py-2 px-4 rounded-md ${
            trend === "all" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTrendChange("all")}
        />
        <Button
          label={"Popular"}
          className={`py-2 px-4 rounded-md ${
            trend === "popular" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTrendChange("popular")}
        />
        <Button
          label={"Recommended"}
          className={`py-2 px-4 rounded-md ${
            trend === "recommended" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTrendChange("recommended")}
        />
        <Button
          label={"Trending"}
          className={`py-2 px-4 rounded-md ${
            trend === "trending" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTrendChange("trending")}
        />
      </div>

      <div className="custom-grid3 gap-x-5 lg:gap-y-[57px] gap-y-6">
        {loading
          ? Array.from({ length: IMAGES_PER_PAGE }).map((_, index) => (
              <div key={index} className="">
                <div className="w-full h-48 skeleton"></div>
                <h1 className=" h-6 skeleton"></h1>
                <p className="w-full h-4 skeleton"></p>
                <p className="w-full h-4 skeleton"></p>
              </div>
            ))
          : images.map((image) => (
              <div key={image.id} className="relative w-full overflow-hidden">
                <div>
                  <div className="h-48 overflow-hidden">
                    <Link
                      to={`/products/${image.id}`}
                      onClick={() => handleImageChange(image)}
                    >
                      <img
                        src={image.urls.small}
                        alt={image.alt_description}
                        className="object-cover w-full h-full bg-transparent rounded-t-md"
                      />
                    </Link>
                  </div>
                  <h1 className="text-xl"></h1>
                  <p className="max-sm:text-xs text-regular mt-4">
                    Arms chairs
                  </p>
                  <h2 className="max-sm:text-sm mb-5 max-sm:mb-3 text-base text-balance">
                    Ogle My Cleo Chair
                  </h2>
                  <div className=" flex-custom gap-4 max-sm:text-base text-lg">
                    <p className="line-through text-regular">
                      $
                      {image.user.total_likes === 0
                        ? (image.user.total_likes += 70)
                        : image.user.total_likes}
                    </p>
                    <p>
                      $
                      {image.user.total_photos === 0
                        ? (image.user.total_photos += 30)
                        : image.user.total_photos}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="flex gap-2 justify-center mb-8 mt-10">
        {Array.from({ length: 5 }, (_, index) => index + 1).map((num) => (
          <Button
            key={num}
            label={num}
            className={`ring-[1px]  w-4 h-4  p-5 flex-center rounded-full ring-border hover:bg-primary hover:text-white ${
              page === num ? "bg-primary text-white" : ""
            }`}
            onClick={() => handlePageChange(num)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductCategory;
