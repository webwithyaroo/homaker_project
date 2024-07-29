import { Button, MaxWidth } from "../Components/constant";
import { line } from "../constant";
const Home = () => {
  return (
    <MaxWidth>
      <header>
        <div className="header-styles">
          <h1 className="header-text">
            Find the Best Home Furniture for Your Room
          </h1>
          <p className="header-paragraph">
            Accent chairs at Herman Miller include a clear mid-century modern
            accent
          </p>
          <div className="flex-custom max-w-[520px] max-sm:flex-col max-sm:items-start ">
            <Button label={"Shop now"} className={"header-btn"} />
            <div className="flex-custom gap-8">
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
    </MaxWidth>
  );
};

export default Home;
