import ImageCard from "../../components/ImageCard";
// import image from "../../assets/images/whana.jpg";
import image from "../../assets/images/rawfoto.png";

const RightSide = () => {
  return (
    <div className="order-0 sm:order-1 pt-10 sm:pt-0 flex justify-center items-center">
      <ImageCard imageUrl={image}> </ImageCard>
    </div>
  );
};

export default RightSide;
