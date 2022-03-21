import './SelectedButton.css'
const SelectedButton = ({ children, onClick,selected }) => {
  return (
    <button className="chart_button" onClick={onClick}>
      {children}
    </button>
  ); 
};
export default SelectedButton;
