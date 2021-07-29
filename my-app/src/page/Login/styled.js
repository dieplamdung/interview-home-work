import styled from "styled-components";
import { Layout } from "antd";
const { Header } = Layout;

export const RootPost = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const ContentPost = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 920px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .titleLogin {
    display: flex;
    justify-content: center;
    font-size: 24px;
    margin-top: 12px;
  }
`;

export const WrapHomePage = styled.div`
  display: flex;
  width: 100%;
`;

export const StyleHeader = styled(Header)`
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const ContentHeader = styled.div`
  display: flex;
  max-width: 920px;
  width: 100%;
  justify-content: space-between;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .headerRight {
    display: flex;

    a {
      text-decoration: none;
    }
    .logo {
      margin-left: 20px;
    }
  }
`;

export const WrapForm = styled.div`
  display: flex;
  max-width: 500px;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
  padding: 18px;
  border-radius: 8px;
  box-sizing: border-box;
  -webkit-box-shadow: -1px 0px 20px -2px rgba(0,0,0,0.58); 
  box-shadow: -1px 0px 20px -2px rgba(0,0,0,0.58);
`;
