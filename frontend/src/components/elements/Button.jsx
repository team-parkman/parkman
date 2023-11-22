const Button = (props) => {
  return <button className=" p-2 rounded-[3px] text-[20px] text-[#010014] 
  transiton duration-200 hover:text-neutral-600 cursor-pointer">{props.children}</button>;
};

export default Button;
