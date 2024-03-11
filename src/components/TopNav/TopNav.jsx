function TopNav() {
  return (
    <div className="top_nav p-[1rem] h-[60px] flex items-center justify-between">
      <div className="search w-[30%] border-[#d9d9d9] border-[1px] border-solid flex rounded-[8px] overflow-hidden justify-between">
        <input type="text" placeholder="Search..." className="border-0 outline-none p-[5px]"/>
        <button className="border-0 px-[10px]"><i className="ri-search-line"></i></button>
      </div>
      <div className="info flex gap-[2rem]">
        <ul className="flex gap-[4px]">
          <li className="">
            <a href="" className="block text-[1.2rem] p-[6px] hover:text-[#1677FF] "><i className="ri-menu-add-fill"></i></a>
          </li>
          <li className="">
            <a href="" className="block text-[1.2rem] p-[6px] hover:text-[#1677FF] "><i className="ri-article-line"></i></a>
          </li>
          <li className="">
            <a href="" className="block text-[1.2rem] p-[6px] hover:text-[#1677FF] "><i className="ri-nurse-fill"></i></a>
          </li>
          <li className="">
            <a href="" className="block text-[1.2rem] p-[6px] hover:text-[#1677FF] "><i className="ri-customer-service-2-line"></i></a>
          </li>
        </ul>
        <a href="" className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#E6F4FF] text-[1.2rem]"><i className="ri-user-line"></i></a>
      </div>
    </div>
  )
}

export default TopNav