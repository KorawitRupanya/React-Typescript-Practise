import React from "react";

interface ButtonProps {
  number: number;
  text?: string;
}
const Button: React.FC<ButtonProps> = props => {
  const [counter, setCounter] = React.useState<number>(0);

  const handleChange = () => {
    setCounter(counter + props.number);
  };
  return (
    <div>
      <button onClick={handleChange}>
        {props.text}
        {counter}
      </button>
    </div>
  );
};
export default Button;
