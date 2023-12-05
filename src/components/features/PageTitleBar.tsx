import "../../styles/components/features/PageTitleBar.scss";

interface PageTitleBar {
  text: string | undefined;
}

export const PageTitleBar = ({ text }: PageTitleBar) => {
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
