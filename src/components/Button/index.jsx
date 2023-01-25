import { ButtonPrimary, ButtonSecondary } from "../../styles/GlobalStyles";

function Button({ variant, children }) {
  switch (variant) {
    case "primary":
      return <ButtonPrimary>{children}</ButtonPrimary>;
    case "secondary":
      return <ButtonSecondary>{children}</ButtonSecondary>;
    default:
      return <Button>{children}</Button>;
  }
}
export default Button;
