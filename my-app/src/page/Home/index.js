import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { Pagination } from "antd";
import {
  ContentHeader,
  ContentHomePage,
  NoData,
  RootHomePage,
  StyleHeader,
  WrapFooter,
  WrapHomePage,
  WrapInputSearch,
} from "./styled";

import logo from '../../assets/image/logo.png';
import CardPost from "../../components/CardPost";
import ScrollView from "../../components/ScrollView";
import { useDispatch, useSelector } from "react-redux";
import { getPostList, getPostPage, getPostSearch,  } from "../../redux/action/posts";
import { Input } from "antd";
const { Search } = Input;
export default function HomePage() {
  let dispatch = useDispatch();
  const listPost = useSelector((state) => state.listPost);
  const valueSearch = useSelector((state) => state.listPost.valueSearch);
  const User = useSelector(state=>state.user)
  
  let onSearch;
  useEffect(() => {
    if (!listPost.postList.length && !valueSearch) {
      dispatch(getPostList());
    }
  }, [listPost]);

  function handleChangePage(page) {
    dispatch(getPostPage(page, valueSearch));
  }
  const handleSearch = (value) => {
    if(onSearch){
      window.clearTimeout(onSearch)
    }
    onSearch = setTimeout(() => {
      onSearch = undefined
      dispatch(getPostSearch(value))
    }, 300);
  }
  return (
    <RootHomePage>
      <WrapHomePage>
        <StyleHeader style={{ zIndex: 1, width: "100%", alignItems: "center" }}>
          <ContentHeader>
            <div className="logo"><img src={logo} alt="Logo"/></div>
            <div className="headerRight">
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Link to="/">Blog</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/post">Post</Link>
                </Menu.Item>
              </Menu>
              <div className="logo">{User.User? User.User : "Author"}</div>
            </div>
          </ContentHeader>
        </StyleHeader>
      </WrapHomePage>
      <ContentHomePage>
        <WrapInputSearch>
        <Search
          style={{width:"50%"}}
          placeholder="Search"
          allowClear
          size="large"
          onChange={(e)=>handleSearch(e.target.value)}
        />
        </WrapInputSearch>
        <ScrollView>
          {!listPost?.postList?.length && <NoData>Not found, please try again!</NoData>}
          {listPost?.postList?.length
            ? listPost?.postList.map((elm) => {
                return <CardPost key={elm.id} data={elm} />;
              })
            : ""}
          <WrapFooter>
            <Pagination
              defaultCurrent={1}
              total={listPost?.totalPage}
              onChange={(page) => handleChangePage(page)}
            />
          </WrapFooter>
        </ScrollView>
      </ContentHomePage>
    </RootHomePage>
  );
}
