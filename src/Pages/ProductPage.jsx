import { line } from "../constant";
import {
  MaxWidth,
  LogosTab,
  Button,
  LoginPage,
  ProductCategory,
} from "../Components/constant";
const ProductPage = () => {
  return (
    <>
      <MaxWidth>
        <header className="pt-[80px] max-sm:pt-[75px] ">
          <div className="header-product  ">
            <h1 className="header-text text-balance">
              Find the Best Home Furniture for Your Room
            </h1>
            <p className="header-paragraph text-balance">
              Accent chairs at Herman Miller include a clear mid-century modern
              accent
            </p>
            <div className="flex-custom max-w-[520px] max-sm:flex-col max-sm:items-start ">
              <Button label={"Shop now"} className={"header-btn"} />
              <div className="flex-custom gap-8 max-sm:gap-2 max-sm:mt-8">
                <div>
                  <h1 className="text-xl font-lg_bold">20k+</h1>
                  <p>Collection</p>
                </div>
                <span>
                  <img src={line} />
                </span>
                <div>
                  <h1 className="text-xl font-lg_bold">16k+</h1>
                  <p>Users</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* logo tab */}
        <LogosTab />
        {/* product category section */}
        <ProductCategory />
      </MaxWidth>
      {/* LoginpAGE */}
      <LoginPage />
    </>
  );
};

export default ProductPage;
