type Images = {
  img1: string;
  img2?: string;
  img3?: string;
};

export const ImagesContainer = ({ img1, img2, img3 }: Images) => {
  return (
    <>
      {img1 && <img className="img1" src={img1} alt="section-img" />}
      {img2 && <img className="img2" src={img2} alt="section-img" />}
      {img3 && <img className="img3" src={img3} alt="section-img" />}
    </>
  );
};
