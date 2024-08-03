import {
  Button,
  MaxWidth,
  LoginPage,
  Testimonials,
  LogosTab,
} from "../Components/constant";
import { productItem } from "../products";
import Products from "../Components/Products";
import {
  line,
  furnitureShowcase,
  featureLists,
  chairDesigns,
} from "../constant";
const Home = () => {
  return (
    <>
      <MaxWidth>
        <header className="pt-[80px] max-sm:pt-[75px]">
          <div className="header-styles  ">
            <h1 className="header-text text-balance max-sm:text-white">
              Find the Best Home Furniture for Your Room
            </h1>
            <p className="header-paragraph text-balance max-sm:text-white">
              Accent chairs at Herman Miller include a clear mid-century modern
              accent
            </p>
            <div className="flex-custom max-w-[520px] max-sm:flex-col max-sm:items-start ">
              <Button label={"Shop now"} className={"header-btn"} />
              <div className="flex-custom max-sm:text-white gap-8 max-sm:gap-2 max-sm:mt-8">
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
        {/* furniture showcase */}
        <FurnitureTab />
        {/* furniture list */}
        <FeatureSection />
        {/* Our chair Designs */}
        <OurChairDesigns />
        {/* popular products */}
        <PopularProductsSection />
        {/* Testimonials */}
        <Testimonials />
      </MaxWidth>
      {/* login page */}
      <LoginPage />
    </>
  );
};

export default Home;

//furniture section
function FurnitureTab() {
  return (
    <section className="text-center">
      <h1 className=" custom-fontSizeBig font-bolder">Exclusive Furniture</h1>
      <p className="mb-14 max-sm:mb-8 lg:text-balance custom-fontSizeSmall text-regular">
        Check out this week's selection of popular products that might catch
        your eye. and don't
      </p>
      <ul className="gap-x-6 custom-grid text-black">
        {furnitureShowcase.map((room, index) => (
          <li key={index}>
            <img src={room.image} alt="room" />
            <p className="mt-6 max-sm:mt-4 text-lg mb-8 max-sm:text-base  font-bolder">
              {room.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

//Feature section
function FeatureSection() {
  return (
    <section>
      <h1 className="font-bolder max-w-[661px] mx-auto text-center mt-[89px] text-balance custom-fontSizeBig">
        Our Features Special For You
      </h1>
      <p className="mb-14 max-sm:mb-8 max-w-[661px] custom-fontSizeSmall text-regular text-balance">
        We provide a variety of specials features for all of you, to make it
        easier and make you even more happy shopping here.
      </p>
      <ul className="custom-grid2 lg:gap-x-[52px]  gap-x-4 mb-[96px] max-sm:mb-[56px]">
        {featureLists.map((list) => (
          <li className="bg-bgContrast shadow-2xl px-[18px] pb-[27px] pt-6 max-sm:mt-5 max-sm:mb-9 rounded-[14px] mb-5">
            <div className="p-[14px] bg-white max-w-fit rounded-lg mb-4">
              <img src={list.iconUrl} alt="icon" />
            </div>
            <h1 className="text-black text-lg max-sm:text-sm font-bolder mt-4 mb-6 max-sm:mb-4 ">
              {list.title}
            </h1>
            <p className="text-regular text-[18px] text-balance max-sm:text-xs">
              {list.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

//chair Designs

function OurChairDesigns() {
  return (
    <ul className="grid gap-y-[96px]">
      {chairDesigns.map((design, index) => (
        <li
          key={index}
          className="grid grid-cols-2 items-center gap-x-8 max-[600px]:grid-cols-1 "
        >
          <div className="max-w-[443px]">
            <img
              src={design.iconUrl}
              alt="image"
              className="shadow-xl rounded-[20px]"
            />
          </div>
          <div>
            <h1 className="custom-fontSizeMed lg:leading-[50px] mb-6 max-sm:mb-4  max-sm:max-w-[430px] max-sm:mt-4">
              {design.title}
            </h1>
            <p className="text-balance text-regular">{design.text}</p>
            <Button
              label={"Read more"}
              className={
                "rounded-2xl px-[51px] py-4 max-sm:px-[31px] max-sm:py-[13px] ring-2 ring-regular lg:mt-[100px] max-sm:mt-4 mt-10 hover:bg-regular hover:shadow-2xl hover:text-white transition-all"
              }
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

// popular products tab

function PopularProductsSection() {
  return (
    <section className="mt-[96px] max-sm:mt-[52px]">
      <h1 className="custom-fontSizeBig mb-[73px] max-sm:mb-8 font-bolder">
        Our popular product
      </h1>
      <PopularProducts />

      {/* See all product */}
      <div className="w-full flex-center text-[18px] text-white max-lg:hidden">
        <Button
          label={"See all product"}
          className={
            "px-[65px] py-3  mt-16  bg-gradient-to-r from-[#404346] to-[#232526]   rounded-xl"
          }
        />
      </div>
    </section>
  );
}

function PopularProducts() {
  return (
    <ul className="custom-grid gap-x-[40px] max-sm:gap-x-[30px]">
      {productItem.map((item) => (
        <Products
          iconUrl={item.iconUrl}
          label={item.label}
          desc={item.desc}
          price={item.price}
          prevPrice={item.prevPrice}
        />
      ))}
    </ul>
  );
}
