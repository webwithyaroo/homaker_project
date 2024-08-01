const Products = (props) => {
  return (
    <li key={props.id}>
      <div className="bg-contrast flex-center pt-[72px] max-sm:pt-8 pb-[41px] max-sm:pb-[27px] shadow-md h-[327px]">
        <img src={props.iconUrl} alt="image" />
      </div>
      <p className="text-sm max-sm:text-xs mt-4 mb-2 text-regular">
        {props.label}
      </p>
      <h2 className="max-sm:text-sm mb-5 max-sm:mb-3 text-base text-balance">
        {props.desc}
      </h2>
      <div className="font-bolder flex-custom gap-4 max-sm:text-base  text-lg">
        <p className="line-through text-regular">${props.prevPrice}</p>
        <p>${props.price}</p>
      </div>
    </li>
  );
};

export default Products;
