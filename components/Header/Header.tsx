import { headerJson } from './json/headerJson';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
`;
interface IHeaderTitle {
  backgroundColor: string;
  textColor: string;
}

const HeaderTitle = styled('h1')<IHeaderTitle>`
  margin-right: 10px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 10px;
  font-size: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      {headerJson.map((nav, index) => {
        return (
          <div key={index}>
            <HeaderTitle backgroundColor={nav.bgColor} textColor={nav.textColor}>
              {nav.name}
            </HeaderTitle>
          </div>
        );
      })}
    </HeaderContainer>
  );
};

export default Header;
