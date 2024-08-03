import { useContext } from "react";
import { AppContext } from "../contest/AppContext";
const { images, setImages } = useContext(AppContext);
const TheProduct = () => {
  return (
    <>
      {images.map((image) => (
        <div key={image.id} className="relative w-full overflow-hidden">
          <div>
            <div className="h-48 overflow-hidden">
              <Link
                to={`/products/${image.id}`}
                onClick={() => handleImageChange(image)}
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="object-cover w-full h-full bg-transparent rounded-t-md"
                />
              </Link>
            </div>
            <h1 className="text-xl"></h1>
            <p className="max-sm:text-xs text-regular mt-4">Arms chairs</p>
            <h2 className="max-sm:text-sm mb-5 max-sm:mb-3 text-base text-balance">
              Ogle My Cleo Chair
            </h2>
            <div className=" flex-custom gap-4 max-sm:text-base text-lg">
              <p className="line-through text-regular">
                $
                {image.user.total_likes === 0
                  ? (image.user.total_likes += 70)
                  : image.user.total_likes}
              </p>
              <p>
                $
                {image.user.total_photos === 0
                  ? (image.user.total_photos += 30)
                  : image.user.total_photos}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TheProduct;
