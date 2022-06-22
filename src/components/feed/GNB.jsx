import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FlexCenter } from '../../libs/styles/utilStyles';
import media from '../../libs/styles/media';
import Input from '../common/Input';
import { ICON_ITEMS } from '../../libs/utils/icons';
import userStorage from '../../libs/utils/userStorage';

function GNB() {
  const [user, setUser] = useState({ id: '' });
  // const nvaigate = useNavigate();

  useEffect(() => {
    const userParser = userStorage.get();
    setUser(userParser);
    // userParser ? nvaigate('/feed') : nvaigate('/');
  }, [user]);

  return (
    <>
      <Header>
        <Logo
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt="Instagram"
        />
        <SearchContainer>
          <SearchIcon size={12} />
          <SearchInput validated={true} />
        </SearchContainer>
        <IconContainer>
          {ICON_ITEMS.map(({ name, href, icon }) => (
            <Link to={href} key={name}>
              {icon}
            </Link>
          ))}
        </IconContainer>
      </Header>
      <Outlet />
    </>
  );
}

const Logo = styled.img`
  height: 30px;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  padding: 0 30px;
  background-color: #ffff;
  border: 1px solid #e5e5e5;
`;
const IconContainer = styled.div`
  ${FlexCenter};
  min-width: 278px;
  justify-content: space-evenly;
  text-decoration: none;
`;
const SearchContainer = styled.div`
  ${media.small} {
    display: none;
  }
`;
const SearchInput = styled(Input)`
  width: 268px;
  max-width: 250px;
  padding: 6px 0 2px 34px;
  background-color: #eaeaea;
  border: none;
  max-width: 250px;
  ::placeholder {
    color: #8d8d8d;
  }
`;
const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 24px;
  margin-left: 14px;
  color: #8d8d8d;
`;
export default GNB;
