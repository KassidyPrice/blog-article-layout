import BannerImg from "./BannerImg";

export default function Header() {
  return (
    <div className="header-container">
      <BannerImg />
      <h1>Some Awesome Blog Post</h1>
      <h4>101 reasons why React is amazing.</h4>
    </div>
  );
}
