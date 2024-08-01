import { footerLinks, googlePlay, apple } from "../constant";
import { MaxWidth } from "./constant";

const Footer = () => {
  return (
    <section className="bg-primary">
      <MaxWidth>
        <div className="pt-[66px] max-sm:pt-[42px] pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-sm:text-center">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-base text-white mb-4">{section.label}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className="text-sm text-regular cursor-pointer hover:underline"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="lg:col-span-[1.7]">
              <div>
                <h4 className="text-base text-white mb-4">OUR MOBILE APP</h4>
                <p className="text-regular">
                  Download Kursiku app available on iOS and Android.
                </p>
                <div className="flex items-center max-sm:justify-center mt-4 gap-4">
                  <span>
                    <img src={apple} alt="apple" />
                  </span>
                  <span>
                    <img src={googlePlay} alt="googlePlay" />
                  </span>
                </div>
                <div className="mt-[62px] max-sm:mt-8">
                  <h4 className="text-base text-white mb-4">NEWSLETTER LIST</h4>
                  <p className="text-regular text-balance mx-auto">
                    Be the first to get information on discounts and attractive
                    offers from KURSIKU.com
                  </p>
                  <form className="flex items-end max-sm:text-xs gap-x-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="text-regular pl-4 py-2 rounded-[10px] mt-5 sm:mt-0 flex-grow min-w-0"
                      placeholder="Enter your email"
                    />
                    <button className="ml-0 sm:ml-2 text-white p-2 ring-1 ring-white rounded-[10px] font-bold hover:text-black hover:bg-white transition-all">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default Footer;
