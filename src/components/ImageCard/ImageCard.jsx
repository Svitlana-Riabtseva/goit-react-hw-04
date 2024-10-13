const ImageCard = ({ imageSrc, imageAlt, onImageClick }) => {
  return (
    <div>
      <img 
        src={imageSrc} 
        alt={imageAlt} 
        width="400px" 
        height="266px" 
        onClick={onImageClick}  // Обробник події кліку
        style={{ cursor: "pointer" }}  // Стиль курсора для зручності
      />
    </div>
  );
}

export default ImageCard;
