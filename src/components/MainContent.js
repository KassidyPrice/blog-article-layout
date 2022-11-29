import AlignedLeft from "./Aligned-Left";
import AlignedRight from "./AlignedRight";
import Header from "./Header";
import LargeParagraph from "./LargeParagraph";
import Button from "./Button";
import Social from "./Social";
import Copyright from "./Copyright";

export default function MainContent() {
  return (
    <div className="main">
      <Header />
      <LargeParagraph />
      <AlignedLeft />
      <AlignedRight />
      <LargeParagraph />
      <div className="bottom-btn">
        <Button />
      </div>
      <Social />
      <Copyright />
    </div>
  );
}
