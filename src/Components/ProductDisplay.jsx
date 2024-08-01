import React from "react";
import { MaxWidth, Button, LoginPage } from "../Components/constant";
import { heart, star } from "../constant";

const ProductDisplay = ({ product }) => {
  return (
    <MaxWidth>
      <div className="grid grid-cols-2 pt-[96px]">
        <div className="h-[300px] w-[312px] rounded-md overflow-hidden">
          <img
            src={product.urls.small}
            alt={product.alt_description}
            className="object-fill h-full w-full"
          />
        </div>

        <div className="max-w-[445px]">
          <div className="flex-custom">
            <div>
              <p className="text-regular">Arm chair</p>
              <h1 className="text-[32px] font-lg_bold">
                {product.description}
              </h1>
            </div>
            <div className="bg-primary p-4">
              <img src={heart} />
            </div>
          </div>
          <div className="flex-custom">
            <p>Already sold 50+</p>
            <div className="flex">
              <img src={star} alt="star" />
              <p>4,8</p>
              <p> ( 37 Reviews )</p>
            </div>
          </div>
          <hr />
          <div className="flex-custom">
            <h1 className="text-lg font-bolder">$ 42.20 USD</h1>
            <p>On stock</p>
          </div>
          <div className="flex">
            <div>
              <p>size</p>
            </div>
            <select>
              <option>manual</option>
              <option>yaroo</option>
            </select>
          </div>
          <div>
            <p>color</p>
            <div className="flex-custom">
              <div>
                <span></span> Grey
              </div>
              <div>
                <span></span> Black
              </div>
              <div>
                <span></span> White
              </div>
            </div>
          </div>
          <div className="grid gap-y-4">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="grid grid-cols-3">
                <Button
                  label={"-"}
                  className={"bg-primary text-white p-4 rounded-[10px]"}
                />
                <div className="flex-center">1</div>
                <Button
                  label={"+"}
                  className={"bg-primary text-white p-4 rounded-[10px]"}
                />
              </div>
              <Button
                label={"Add to cart"}
                className={"bg-primary text-white rounded-[10px]"}
              />
            </div>
            <Button
              label={"Buy Now"}
              className={"bg-primary text-white p-4 rounded-[10px]"}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <h1>Description</h1>
        <p>{product.alt_description}</p>
      </div>

      <LoginPage />
    </MaxWidth>
  );
};

export default ProductDisplay;
