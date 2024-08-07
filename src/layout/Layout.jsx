//src>layout>Layout.jsx
import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "./Footer"

const Layout = () => {
  const location = useLocation()
  // const isMainPage = location.pathname === "/"

  // 유저정보 모달을 안띄우고 싶은 라우팅을 설정
  const noFooterPaths = ["/group"]

  // 현재 location이랑 같은지 확인
  const showFooter = !noFooterPaths.some((path) =>
    location.pathname.startsWith(path)
  )

  return (
    <>
      <div
        className={
          showFooter ? "content-container" : "nofooter-content-container"
        }
      >
        <Outlet />
      </div>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
