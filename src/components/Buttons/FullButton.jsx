import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "rgb(145, 38, 142)")};
  background-color: ${(props) => (props.border ? "transparent" : "rgb(145, 38, 142)")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "rgb(119, 31, 115)")};
    border: 1px solid rgb(145, 38, 142);
    color: ${(props) => (props.border ? "rgb(145, 38, 142)" : "#fff")};
  }
`;

