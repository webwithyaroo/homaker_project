const Button = ({ IconUrl, label, className }) => {
  return (
    <button className={className}>
      {IconUrl && <img src={IconUrl} alt="img" />}
      {label && <p>{label}</p>}
    </button>
  );
};
export default Button;
