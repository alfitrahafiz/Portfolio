const ImageCard = ({ imageUrl, children }) => {
  return (
    <div>
      <figure className="w-[250px] overflow-hidden rounded-base border-2 border-border dark:border-darkBorder bg-mainAccent font-base shadow-light dark:shadow-dark">
        <img className="w-full" src={imageUrl} alt={children} />
        <figcaption className="border-t-2 text-text border-border dark:border-darkBorder p-1.5 text-center">{children}</figcaption>
      </figure>
    </div>
  );
};

export default ImageCard;
