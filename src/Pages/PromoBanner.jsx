import { promoBanner } from "../constant";
import { MaxWidth } from "../Components/constant";

const PromoBanner = () => {
  return (
    <MaxWidth>
      <div className="pt-[80px]">
        <div className=" bg-cover bg-center bg-no-repeat h-[359px]">
          <div className="max-w-[464px]">
            <h1 className="text-2xl">Under deployement</h1>
            <div className="flex"></div>
          </div>
        </div>
      </div>
    </MaxWidth>
  );
};

export default PromoBanner;
