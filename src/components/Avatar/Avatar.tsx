import { AvatarProps } from "./Avatar.d";
import { StyledDiv, StyledImg } from "./Styles";

function Avatar({ src, altText }: AvatarProps) {
  return (
    <StyledDiv>
      <StyledImg src={src} alt={altText || "Description of Image"} />
    </StyledDiv>
  );
}

export default Avatar;
