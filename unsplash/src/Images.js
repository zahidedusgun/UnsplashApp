import AnyImage from "./AnyImage";

function Images({SendImage}) {
  return (
    <div className="images">
        {SendImage.map((image,index) => {
            return <AnyImage key={index} image={image} />
        })
        }
    </div>
  );
}
export default Images;