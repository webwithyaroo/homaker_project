import { useEffect } from "react";
import { MaxWidth, Button, LoginPage } from "../Components/constant";
import { heart, star } from "../constant";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contest/AppContext";
import axios from "axios";

const ProductDisplay = ({ product }) => {
  const { addToCart, cart, setCart, setImages, images, setSelectedProduct } =
    useContext(AppContext);
  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  function handleIncrement() {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity += 1) } // Increment quantity
          : item
      )
    );
  }

  function handleImageChange(curr) {
    setSelectedProduct(curr); // Replace the current state with the new product
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (images.length === 0) {
      // Fetch the images if not already available
      axios
        .get("https://api.unsplash.com/search/photos")
        .then((response) => setImages(response.data))
        .catch((error) => console.error(error));
    }
  }, [images, setImages]);
  console.log(images);
  function handleDecrement() {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 } // Decrement quantity
              : item
          )
          .filter((item) => item.quantity > 0) // Remove item if quantity is zero or less
    );
  }

  return (
    <MaxWidth>
      <div className="grid grid-cols-2 pt-[96px] max-[820px]:grid-cols-1">
        <div className="grid gap-y-2">
          <div className="h-[300px] w-[312px] max-[420px]:w-full rounded-md overflow-hidden max-[820px]:justify-self-center">
            <img
              src={product.urls.small}
              alt={product.alt_description}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-x-4 w-[312px] max-[420px]:w-full max-[820px]:justify-self-center max-[400px]:hidden">
            <div className=" rounded-md h-24  overflow-hidden">
              <img
                src={product.urls.small}
                className="object-cover h-full w-full"
              />
            </div>
            <div className=" rounded-md h-24 overflow-hidden">
              <img
                src={product.urls.small}
                className="object-cover h-full w-full"
              />
            </div>
            <div className=" rounded-md h-24 overflow-hidden">
              <img
                src={product.urls.small}
                className="object-cover h-full w-full"
              />
            </div>
            <div className=" rounded-md h-24 overflow-hidden">
              <img
                src={product.urls.small}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[445px] self-end justify-self-end max-[820px]:justify-self-center max-sm:mt-8 max-[420px]:w-full ">
          <div className="flex-custom gap-x-4 mb-5 max-sm:mb-4">
            <div>
              <p className="text-regular">Arm chair</p>
              <h1 className="text-[32px] max-sm:text-base font-lg_bold ">
                Fabric luella arm chair
              </h1>
            </div>
            <div className="bg-primary p-4 max-sm:p-2 rounded-xl">
              <img src={heart} />
            </div>
          </div>

          <div className="flex-custom max-sm:text-xs max-[345px]:flex-col max-[345px]:items-start">
            <p>Already sold 50+</p>
            <div className="flex max-sm:text-xs">
              <img src={star} alt="star" />
              <p>4,8</p>
              <p> ( 37 Reviews )</p>
            </div>
          </div>
          <hr className="w-full h-[1px] bg-#E7E7E9 mt-7 max-sm:mt-6 mb-6" />
          <div className="flex-custom">
            <h1 className="text-lg font-bolder max-sm:text-base">
              $ 42.20 USD
            </h1>
            <p className="max-sm:text-xs">On stock</p>
          </div>
          <div className="flex-custom ring-[1px] p-3 ring-#E7E7E9 mt-6 max-md:8 rounded-xl">
            <div className="border-r-[1px] pr-4">
              <p className="text-regular">size</p>
            </div>
            <select className="w-full border-none outline-none">
              <option className="border-none outline-none">manual</option>
              <option className="border-none outline-none">yaroo</option>
            </select>
          </div>
          <div>
            <p>color</p>
            <div className="flex-custom pt-5 mb-8 gap-x-2 max-sm:text-xs">
              <div className="flex-center rounded-[10px] gap-x-4 py-[12px] max-sm:py-2 lg:px-8 max-[350px]:px-2 px-4 ring-[1px] ring-#E7E7E9 ">
                <span className="p-2 max-sm:p-1 rounded-full ring-[1px] ring-gray-400 bg-gray-700"></span>{" "}
                Grey
              </div>
              <div className="flex-center rounded-[10px] gap-x-2 py-[12px] max-sm:py-2 lg:px-8 max-[350px]:px-2 px-4 ring-[1px] ring-#E7E7E9">
                <span className="p-2 max-sm:p-1 rounded-full ring-[1px] ring-gray-400 bg-black"></span>{" "}
                Black
              </div>
              <div className="flex-center rounded-[10px] gap-x-2 py-[12px] max-sm:py-2 lg:px-8 max-[350px]:px-2 px-4 ring-[1px] ring-#E7E7E9">
                <span className="p-2 max-sm:p-1 rounded-full ring-[1px] ring-gray-400 bg-white"></span>{" "}
                White
              </div>
            </div>
          </div>
          <div className="grid gap-y-4 max-[400px]:gap-y-2 max-sm:text-xs">
            <div className="grid grid-cols-2 gap-x-4 max-[400px]:gap-x-2">
              <div className="grid grid-cols-3 max-[350px]:flex gap-x-2">
                <Button
                  label={"-"}
                  className={"bg-primary text-white p-4 rounded-md flex-center"}
                  onClick={() => handleDecrement(product)}
                />
                <div className="flex-center">{quantity}</div>
                <Button
                  label={"+"}
                  className={"bg-primary text-white p-4 rounded-md flex-center"}
                  onClick={() => handleIncrement(product)}
                />
              </div>
              <Button
                label={"Add to cart"}
                className={"bg-primary text-white rounded-md"}
                onClick={() => addToCart(product)}
              />
            </div>
            <Button
              label={"Buy Now"}
              className={"bg-primary text-white p-4 rounded-md"}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-[96px]">
        <div className="flex  max-sm:flex-col">
          <h1 className="w-1/4 text-base font-lg_bold max-sm:text-sm max-sm:mb-4 ">
            Description
          </h1>
          <p className="w-3/4 max-sm:w-full">
            {product.description}
            {product.alt_description}
          </p>
        </div>
        <div className="flex mt-[85px] max-sm:flex-col">
          <h1 className="w-1/4 text-base font-lg_bold max-sm:text-sm max-sm:mb-4 ">
            Specification
          </h1>
          <div className="w-3/4 grid gap-y-4 max-sm:w-full">
            <div className="p-3 flex items-center gap-x-10  w-full ring-1  ring-#E7E7E9 rounded-md">
              <div className="w-1/2 max-[320px]:w-auto flex-custom">
                <p className="max-sm:text-[12px]">Product</p>
                <p className="justify-self-end pl-2">: </p>
              </div>
              <p className=" text-regular max-sm:text-[12px] ">Herman Miller</p>
            </div>
            <div className="p-3 flex items-center gap-x-10 w-full ring-1 ring-#E7E7E9 rounded-md">
              <div className="w-1/2 max-[320px]:w-auto flex-custom">
                <p className="max-sm:text-[12px]">Category</p>
                <p className="justify-self-end pl-2">: </p>
              </div>
              <p className=" text-regular max-sm:text-[12px]">Arm Chair </p>
            </div>
            <div className="p-3 flex items-center gap-x-10 w-full ring-1 ring-#E7E7E9 rounded-md">
              <div className="w-1/2 max-[320px]:w-auto flex-custom">
                <p className="max-sm:text-[12px]">Condition</p>
                <p className="justify-self-end pl-2">: </p>
              </div>
              <p className=" text-regular max-sm:text-[12px]"> New</p>
            </div>
            <div className="p-3 flex items-center gap-x-10 w-full ring-1 ring-#E7E7E9 rounded-md">
              <div className="w-1/2 max-[320px]:w-auto flex-custom ">
                <p className="max-sm:text-[12px]">Unit Weight</p>
                <p>: </p>
              </div>
              <p className=" text-regular max-sm:text-[12px]"> 40 kg</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[1px] bg-#E7E7E9 mt-[96px] mb-[70px]" />

      {/* Recommended products */}
      <section>
        <div className="flex-custom mb-10">
          <h1 className="text-base font-lg_bold max-sm:text-sm  ">
            MORE IN THIS SHOP
          </h1>
          <Link to={"/products"}>
            <p className="text-blue-500 hover:underline cursor-pointer">
              See all
            </p>
          </Link>
        </div>

        <div className="custom-grid3 gap-x-5 lg:gap-y-[57px] gap-y-6 mb-80">
          {images &&
            images.map((product) => (
              <div key={product.id} className="relative w-full overflow-hidden">
                <div>
                  <div className="h-48 overflow-hidden">
                    <Link
                      to={`/products/${product.id}`}
                      onClick={() => handleImageChange(product)}
                    >
                      <img
                        src={product.urls.small}
                        alt={product.alt_description}
                        className="object-cover w-full h-full bg-transparent rounded-t-md"
                      />
                    </Link>
                  </div>
                  {/* <h1 className="text-xl">{product.description}</h1> */}
                  <p className="max-sm:text-xs text-regular mt-4">
                    Arms chairs
                  </p>
                  <h2 className="max-sm:text-sm mb-5 max-sm:mb-3 text-base text-balance">
                    {product.user.name}
                  </h2>
                  <div className="flex-custom gap-4 max-sm:text-base text-lg">
                    <p className="line-through text-regular">
                      $
                      {product.user.total_likes === 0
                        ? (product.user.total_likes += 70)
                        : product.user.total_likes}
                    </p>
                    <p>
                      $
                      {product.user.total_photos === 0
                        ? (product.user.total_photos += 30)
                        : product.user.total_photos}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </MaxWidth>
  );
};

export default ProductDisplay;
