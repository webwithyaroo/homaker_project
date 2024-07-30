import { Button, MaxWidth, LoginPage } from "../Components/constant";
import {
  line,
  logoTab,
  furnitureShowcase,
  featureLists,
  chairDesigns,
} from "../constant";
const Home = () => {
  return (
    <>
      <MaxWidth>
        <header>
          <div className="header-styles  ">
            <h1 className="header-text">
              Find the Best Home Furniture for Your Room
            </h1>
            <p className="header-paragraph">
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
        <LogoTab />
        {/* furniture showcase */}
        <FurnitureTab />
        {/* furniture list */}
        <FeatureSection />
        {/* Our chair Designs */}
        <OurChairDesigns />
      </MaxWidth>
      {/* login page */}
      <LoginPage />
    </>
  );
};

export default Home;

// logo section
function LogoTab() {
  return (
    <ul className="flex items-center justify-evenly mt-[76px] max-sm: gap-[28px] mb-[96px] max-sm:mb-[52px]">
      {logoTab.map((logo) => (
        <li key={logo.logo}>
          <img src={logo.logo} alt="logo" />
        </li>
      ))}
    </ul>
  );
}

//furniture section
function FurnitureTab() {
  return (
    <section className="text-center">
      <h1 className="lg:text-6xl text-xl max-[360px]:text-base font-bolder">
        Exclusive Furniture
      </h1>
      <p className="mb-14 max-sm:mb-8 text-balance">
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
      <h1 className="lg:text-6xl text-xl max-[360px]:text-base font-bolder max-w-[661px] mx-auto text-center mt-[89px] max-sm:mt-[52px] text-balance">
        Our Features Special For You
      </h1>
      <p className="mb-14 max-sm:mb-8 max-w-[661px] mx-auto text-center text-base max-sm:text-xs text-regular text-balance">
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
            <h1 className="lg:text-6xl text-3xl max-sm:text-lg lg:leading-[50px] mb-6 max-sm:mb-4 font-bold max-[360px]:text-base max-sm:max-w-[430px] max-sm:mt-4">
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
