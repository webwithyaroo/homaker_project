// CartPage.js
import React, { useContext, useEffect } from "react";
import { AppContext } from "../contest/AppContext";
import { Button } from "../Components/constant";
import axios from "axios";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart } = useContext(AppContext);

  useEffect(() => {
    if (cart.length === 0) {
      // Fetch the cart if not already available
      axios
        .get("https://api.unsplash.com/search/photos")
        .then((response) => setCart(response.data))
        .catch((error) => console.error(error));
    }
  }, [cart, setCart]);
  return (
    <div className="pt-[80px] min-h-screen">
      <div className="flex items-center gap-x-2 ml-7 text-[12px]">
        <p className="hover:text-blue-500 cursor-pointer  transition-allduration-200 ease-in-out">
          Cart >
        </p>
        <p className="hover:text-blue-500 cursor-pointer  transition-allduration-200 ease-in-out">
          Shipping >{" "}
        </p>
        <p className="hover:text-blue-500 cursor-pointer  transition-allduration-200 ease-in-out">
          Promo >{" "}
        </p>
        <p className="hover:text-blue-500 cursor-pointer  transition-allduration-200 ease-in-out">
          Payment >
        </p>
      </div>
      {cart.length === 0 ? (
        <div className="ml-6 mt-10">
          <h2 className="text-3xl max-sm:text-base font-lg_bold">Cart</h2>
          <p>Your cart is empty. !!!</p>
        </div>
      ) : (
        <section className="grid grid-cols-2 max-lg:grid-cols-1 lg:gap-x-4 xl:gap-x-[119px] justify-center  ">
          <div className="ml-[2rem] relative max-sm:ml-1 justify-self-end max-lg:justify-self-center max-h-screen overflow-hidden mb-[106px]">
            <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none fade-mask"></div>
            <ul className="ml-[2rem]  max-sm:ml-1 justify-self-end max-lg:justify-self-center max-h-screen overflow-y-auto mb-[106px] ">
              {cart.map((item) => (
                <li key={item.id} className="pr-2">
                  <hr className="mt-[64px] h-[1px] bg-#E7E7E9 mb-[40px] " />

                  <div className="flex justify-end w-full items-center gap-x-10 max-sm:gap-x-2">
                    <div className="max-w-[120px] max-[430px]:h-[112px] lg:h-[148px] max-sm:h-auto overflow-hidden rounded-2xl ring-[2px] ring-#E7E7E9">
                      <img
                        src={item.urls.small}
                        alt="image"
                        className="w-full object-cover  "
                      />
                    </div>
                    <div>
                      <div className="flex-custom max-[319px]:flex-col  max-[319px]:items-start max-[319px]:justify-start max-[319px]:-mt-3">
                        <p>Size : mature</p>
                        <p className="text-blue-500 hover:underline cursor-pointer">
                          Remove
                        </p>
                      </div>
                      <h1 className="text-[18px] max-sm:text-xs font-lg_bold mt-2 max-sm:mt-3 text-balance max-[319px]:mt-1">
                        Herman miller(aesthetic chair)
                      </h1>
                      <div>
                        <p className="mt-[29px] max-sm:hidden mb-4">Quality</p>
                        <div className="flex-custom max-sm:mt-[22px] relative max-[319px]:mt-2">
                          <div className="flex items-center justify-between max-[350px]:flex gap-x-2 ">
                            <Button
                              label={"-"}
                              className={
                                "hover:bg-primary ring-[1px] ring-#E7E7E9 text-black hover:text-white p-2 w-[32px] h-[32px] rounded-md flex-center"
                              }
                              onClick={() => handleDecrement(item)}
                            />
                            <div className="grid">{item.quantity}</div>
                            <Button
                              label={"+"}
                              className={
                                "hover:bg-primary ring-[1px] ring-#E7E7E9 text-black hover:text-white p-2 w-[32px] h-[32px] rounded-md flex-center"
                              }
                              onClick={() => handleIncrement(item)}
                            />
                          </div>
                          <h1 className="text-base max-[319px]:absolute max-sm:text-sm font-xl_bold -bottom-10 ">
                            $42.20 USD
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <section className="bg-bgContrast px-6">
            <div className="max-w-[419px] mx-auto pt-[64px]">
              <div className="flex-custom border-b pb-4 pt-6  border-#E7E7E9">
                <p>Shipping</p>{" "}
                <p className="text-blue-500 hover:underline cursor-pointer">
                  Change
                </p>
              </div>
              <div className="flex-custom border-b pb-4 pt-6 border-#E7E7E9">
                <p>Voucher</p>{" "}
                <p className="text-blue-500 hover:underline cursor-pointer">
                  Change
                </p>
              </div>
              <div className="flex-custom border-b pb-4 pt-6 border-#E7E7E9">
                <p>Payment</p>{" "}
                <p className="text-blue-500 hover:underline cursor-pointer">
                  Change
                </p>
              </div>
            </div>
            <div className="max-w-[419px] mx-auto">
              <h1 className="mt-[96px] mb-[31px] text-[18px] max-sm:text-sm font-lg_bold">
                Order Summary
              </h1>
              <div>
                <div className="flex-custom pt-3">
                  <p>Subtotal</p> <p>$42.20</p>
                </div>
                <div className="flex-custom pt-3">
                  <p>Shipping</p> <p>$0.00</p>
                </div>
                <div className="flex-custom pt-3">
                  <p>Vouchers</p> <p>-</p>
                </div>
              </div>
              <div className="flex-custom pt-3 pb-6">
                <h1 className="max-sm:text-xs font-lg_bold">Total</h1>
                <div className="flex-center gap-x-2">
                  <p className="text-[12px] text-regular">USD</p>
                  <h1 className="text-base font-xl_bold">$42.20</h1>
                </div>
              </div>
              <div>
                <Button
                  label={"Checkout"}
                  className={
                    "hover:text-white ring-[2px] ring-primary py-5 hover:bg-primary w-full rounded-md font-lg_bold"
                  }
                />
              </div>
              <div className="text-center mt-[14px] text-primary hover:underline ">
                <Link to={"/products"}>
                  {" "}
                  <p>Continue shopping</p>
                </Link>
              </div>
            </div>
          </section>
        </section>
      )}
    </div>
  );
};

export default CartPage;
