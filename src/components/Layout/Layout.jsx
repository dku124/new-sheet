import Router from '../../router/Router';
import SideBar from './../SideBar/SideBar';
import TopNav from './../TopNav/TopNav';
function Layout() {
  return (
    <>
    <div className="">
      <SideBar/>
      <div className="main-layout ml-[240px]">
        <TopNav/>
        <div className="content p-[1rem]">
          <Router/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Layout