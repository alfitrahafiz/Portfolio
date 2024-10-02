import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <>
      <div id="home">
        {/* Hero */}
        <div className="grid sm:grid-cols-2 grid-flow-col-1 gap-10 max-h-screen sm:p-24 p-16">
          {/* Bagian kiri */}
          <LeftSide />
          {/* Bagian kanan */}
          <RightSide />
        </div>
        <hr className="border-dashed border-border dark:border-darkBorder mx-10" />
      </div>
    </>
  );
};

export default Home;
