interface IImages {
  img1: string;
  img2: string;
  img3?: string;
}

export const ImagesContainer: React.FC<IImages> = ({ img1, img2, img3 }) => {
  return (
    <>
      {img1 ? <img className="img1" src={img1} alt="section-img" /> : null}
      {img2 ? <img className="img2" src={img2} alt="section-img" /> : null}
      {img3 ? <img className="img2" src={img3} alt="section-img" /> : null}
    </>
  );
};
