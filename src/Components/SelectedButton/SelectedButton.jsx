import './SelectedButton.css'
const SelectedButton = ({ children, onClick,style}) => {
  return (
    <button style={style}className="chart_button" onClick={onClick}>
      {children}
    </button>
  ); 
};
export default SelectedButton;
