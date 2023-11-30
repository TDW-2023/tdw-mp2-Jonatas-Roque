import styled from "styled-components";
import Link from "next/link";

export const StarWarsButton = styled.button`
  background-color: transparent;
  color: #ffc107;
  padding: 15px 25px;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #ffc107;
  width: 15%;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: #ffc107;
    color: #000;
  }

  &:focus {
    background-color: #ffc107;
    color: #000;
  }
`;

const StyledLink = styled(Link)`
  color: #0070f3; /* Set your desired text color */
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #004080; /* Set your desired hover color */
  }
`;

/* export const StyledLink = styled(Link)`
background-color: transparent;
color: #ffc107;
padding: 15px 25px;
font-size: 1.2rem;
font-weight: bold;
border: 2px solid #ffc107;
width: 15%;
cursor: pointer;
transition: background-color 0.3s, color 0.3s;

&:hover {
  background-color: #ffc107;
  color: #000;
}
`;

 */
