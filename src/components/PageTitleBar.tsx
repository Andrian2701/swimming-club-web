export const PageTitleBar: React.FC<{ text: string | undefined }> = ({
  text,
}) => {
  return (
    <>
      <div className="page-heading">
        <span>OceanStars</span>·<span>{text}</span>
      </div>
      <div className="page-title">
        <h1>{text}</h1>
      </div>
    </>
  );
};
