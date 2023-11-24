import empty from "../assets/empty.svg";

function Empty() {
  return (
    <div>
      <img src={empty} alt="" />
      <p className="text-center text-dark dark:text-light">Empty...</p>
    </div>
  );
}

export default Empty;
