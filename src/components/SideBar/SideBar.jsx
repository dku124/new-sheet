import { Link, NavLink } from "react-router-dom"
import navLinks from "../../assets/navLinks"
import logo from '../../assets/imgs/logo.png'

function SideBar() {
  return (
    <div className="fixed top-0 left-0 z-10 w-[240px] h-full bg-[#F5F6F7]">
      <div className="sidebar_top mt-[1rem]">
        <h2 className="text-[1.5rem] text-center py-[1rem]">
          <Link to='/' className="flex items-center justify-center">
            <img src={logo} alt="Lark" className="w-[50px]"/>
            Lark</Link>
        </h2>
      </div>
      <div className="sidebar_content p-[1rem]">
        <div className="menu">
          <ul className="nav_list">
            {
              navLinks.map((item, index)=>(
                <li className="nav_item mb-[0.2rem]" key={index}>
                  <NavLink to={item.path} className='side_nav p-[0.4rem] flex gap-1 items-center hover:bg-[#E6F4FF] hover:text-[#1677FF] rounded-[8px]'>
                    <span><i className={item.icon}></i></span>{item.display}
                  </NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar