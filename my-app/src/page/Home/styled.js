import styled from "styled-components";
import { Layout } from "antd";
const { Header } = Layout;

export const RootHomePage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const ContentHomePage = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 8px;
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
  width: 920px;
  justify-content: space-between;

  .logo{
    display: flex;
    align-items: center;

    img{
      width: 50px;
      height: 50px;
    }
  }

  .headerRight {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
    }

    .logo {
      margin-left: 20px;
    }
  }
`;

export const WrapFooter = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px 0px;

  .ant-pagination-options{
    display: none;
  }
`;

export const WrapInputSearch = styled.div`
  display: flex;
  width: 100%;
  max-width: 920px;
  justify-content: flex-end;
  margin-top: 12px;

  .ant-input-search-button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
`

export const  NoData = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  justify-content: center;
  color: #cccccc;
`