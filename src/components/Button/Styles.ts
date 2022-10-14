import styled from "@emotion/styled";

export const StyledButton = styled.button({
  background: "#321fb2",
  color: "#fff",
  padding: "1.2rem 1.6rem",
  fontSize: "1.6rem",
  fontWeight: "500",
  border: "none",
  cursor: "pointer",
  borderRadius: "4px",
  transition: "all 0.15s ease-in",
  "&:hover:enabled": {
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  },
  "&:disabled": {
    backgroundColor: "#ebe9f7",
    color: "#fff",
    cursor: "not-allowed",
  },
});