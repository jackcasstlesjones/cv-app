import Inputs from "../input/input";

export default function Sidebar(handleHeaderChange, handleInputChange) {
  return (
    <div className="sidebar">
      <Inputs
        handleHeaderChange={handleHeaderChange}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
