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
flex-flow: column;
width: 100%;
max-width: 560px;
margin-top: 30px;
`

export const DivTitle = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 500;
  margin-bottom:18px;
`

export const DivPost = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-flow: column;

.postInfo{
  display: flex;
  font-size: 18px;
  font-weight: 500;
  margin:12px 0;
}

.card{
  margin-bottom: 12px;
}
`