function AnyImage({image}){
    console.log(image);
  return (
    <div>
       <img className="anyImage" src={image.urls.regular} alt={image.alt_description}></img>
    </div>
  );
}
export default AnyImage;