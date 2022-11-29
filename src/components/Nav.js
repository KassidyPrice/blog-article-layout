import Logo from "./Logo";
import Button from "./Button";

export default function Nav() {
  return (
    <div className="nav">
      <Logo />
      <div className="btn-container">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <Logo />
    </div>
  );
}
