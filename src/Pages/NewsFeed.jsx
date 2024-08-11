import { useState } from "react";
import { MaxWidth, Button } from "../Components/constant";
import {
  arrowLeft,
  arrowRight,
  image5,
  image6,
  image7,
  image8,
  image9,
  news,
  newsDisplays,
} from "../constant";
const newsFeed = [
  { iconUrl: image9, title: "Webics Furniture", time: "30 min ago" },
  { iconUrl: image5, title: "Amanda Furniture", time: "25 min ago" },
  { iconUrl: image6, title: "Yaroo Furniture", time: "5 min ago" },
  { iconUrl: image7, title: "Arcia Furniture", time: "12 min ago" },
  { iconUrl: image8, title: "Simply Furniture", time: "30 min ago" },
];

const NewsFeed = () => {
  const [image, setImage] = useState(0);

  function handlePrev() {
    setImage((image) => (image === newsFeed.length - 1 ? 0 : image + 1));
  }
  function handleNext() {
    setImage((image) => (image === 0 ? newsFeed.length - 1 : image - 1));
  }

  const newsGenerate = newsFeed[image];
  return (
    <section>
      <div className="flex-custom pt-[70px] mb-[22px] gap-x-[42px] px-8 max-sm:px-4 max-sm:gap-x-5 sticky top-[10px] bg-white pb-2 overflow-x-auto">
        <Button
          label={"All the latest news"}
          className={
            "hover:bg-primary hover:text-white text-regular ring-#E7E7E9 ring-[1px] px-10 py-3 flex-shrink-0 rounded-[10px]"
          }
        />
        <Button
          label={"Trending"}
          className={
            "hover:bg-primary hover:text-white text-regular ring-#E7E7E9  ring-[1px] px-10 py-3 flex-shrink-0 rounded-[10px]"
          }
        />
        <Button
          label={"Popular"}
          className={
            "hover:bg-primary hover:text-white text-regular ring-#E7E7E9  ring-[1px] px-10 py-3 flex-shrink-0 rounded-[10px]"
          }
        />
        <Button
          label={"Latest"}
          className={
            "hover:bg-primary hover:text-white text-regular ring-#E7E7E9 ring-[1px] px-10 py-3 flex-shrink-0 rounded-[10px]"
          }
        />
        <Button
          label={"Recommended"}
          className={
            "hover:bg-primary hover:text-white text-regular ring-#E7E7E9  ring-[1px] px-10 py-3 flex-shrink-0 rounded-[10px]"
          }
        />
        <Button
          label={"Around here"}
          className={
            "hover:bg-primary hover:text-white text-regular ring-#E7E7E9  ring-[1px] px-10 py-4 flex-shrink-0 rounded-[10px]"
          }
        />
      </div>
      <MaxWidth>
        {/* NewsFeed */}
        <section className="flex  justify-center gap-x-[52px] max-lg:flex-col max-lg:items-center">
          <div className="max-w-[670px]">
            <div>
              <div className="h-[272px]  rounded-xl">
                <img
                  src={newsGenerate.iconUrl}
                  alt="image"
                  className="h-full w-full object-cover rounded-3xl"
                />
              </div>
              <div className="flex-custom mt-6 mb-8">
                <div>
                  <h1 className="text-[28px] font-lg_bold ">
                    {newsGenerate.title}
                  </h1>
                  <p className="text-base">{newsGenerate.time}</p>
                </div>
                <div className="flex items-center gap-x-4 max-sm:gap-x-1 justify-center">
                  <Button
                    IconUrl={arrowLeft}
                    onClick={handleNext}
                    className={
                      "p-3 max-sm:p-[5px] bg-primary rounded-full flex-shrink-0"
                    }
                  />
                  <div className="flex-custom">
                    <p>{image + 1}</p>/<p>5</p>
                  </div>
                  <Button
                    IconUrl={arrowRight}
                    onClick={handlePrev}
                    className={
                      "p-3 bg-primary rounded-full max-sm:p-[5px] flex-shrink-0"
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[28px] font-lg_bold mb-6">
                20 Unique and Aesthetic Living Room Decorations That Can Be Used
                as References
              </h1>
              <p>
                For makeup lovers, of course, you are familiar with the makeup
                brush set. This product can be alternative for those of you who
                don't want to bother buying separate{" "}
              </p>
            </div>
          </div>
          <div>
            <ul className="grid gap-y-[40px] max-lg:max-w-[600px] max-lg:mt-10">
              {news.map((message, index) => (
                <li key={index} className="flex gap-x-4">
                  <div className="h-[120px] w-[120px] flex-shrink-0">
                    <img
                      src={message.IconUrl}
                      alt="image"
                      className="w-[200px] h-[120px] shadow-md object-cover rounded-3xl"
                    />
                  </div>
                  <div>
                    <h1 className="text-base mb-4">{message.headline}</h1>
                    <p className="text-regular">{message.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section>
          <ul className="custom-grid3 mt-[85px] gap-8 mb-10 marker:">
            {newsDisplays.map((display, index) => (
              <li key={index} className="flex flex-col ">
                <div className="max-w-[354px]">
                  <img
                    src={display.IconUrl}
                    alt="image"
                    className="shadow-xl rounded-3xl w-full object-cover"
                  />
                </div>
                <div className="mt-4 max-w-[354px]">
                  <h1 className="text-base font-semibold">
                    {display.headline}
                  </h1>
                  <p className="text-regular mt-2">{display.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </MaxWidth>
    </section>
  );
};

export default NewsFeed;
