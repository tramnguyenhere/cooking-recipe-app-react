import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Vietnamese'}>
        <GiNoodles />
        <h4>Vietnamese</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </SLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0rem 1.5rem;
  text-decoration: none;
  background: linear-gradient(35deg, #ffb5a7, #fec89a);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: black;
    font-size: 0.8rem;
  }
  svg {
    color: black;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg,
    h4 {
      color: white;
    }
  }
`;

export default Category;
