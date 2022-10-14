import styled from "@emotion/styled";

export const StyledModal = styled.div({
  display: "block",
  width: "600px",
  maxWidth: "100%",
  maxHeight: "100%",
  position: "fixed",
  zIndex: "100",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "6px",
  backgroundColor: "#fbfbfd",
  color: "#321fb2",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
});

export const StyledModalOverlay = styled.div({
  position: "fixed",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "50",
  backgroundColor: "rgba(5,3,12,0.6)",
  backdropFilter: "blur(4px)",
});

export const StyledModalGuts = styled.div({
  padding: "2.4rem 1.6rem",
  width: "100%",
  height: "100%",
});
