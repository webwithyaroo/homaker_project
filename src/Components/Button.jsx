const Button = ({ IconUrl, label, className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {IconUrl && <img src={IconUrl} alt="img" />}
      {label && <p>{label}</p>}
      {children}
    </button>
  );
};
export default Button;
