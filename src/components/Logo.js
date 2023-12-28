import LogoRegularPC from "../images/Logo-Reg-PC.svg";
import LogoRegularMobile from "../images/Logo-Reg-Mobile.svg";
import LogoScrolledPC from "../images/Logo-Scrolled-PC.svg";
import LogoScrolledMobile from "../images/Logo-Scrolled-Mobile.svg";
import { Box } from "@mui/material";

const Logo = ({ mobile, scrolled }) => {
  return (
    <>
      {mobile ? (
        <Box
          component="img"
          sx={{
            width: 50,
          }}
          alt="logo"
          src={scrolled ? LogoScrolledMobile : LogoRegularMobile}
        />
      ) : (
        <Box
          component="img"
          sx={{
            width: 100,
          }}
          alt="logo"
          src={scrolled ? LogoScrolledPC : LogoRegularPC}
        />
      )}
    </>
  );
};

export default Logo;
