import { Button, Dropdown, Space, message } from "antd";
import { Link } from "react-router-dom";

function DashBoards() {

  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const items = [
    {
      label: 'Doc',
      key: '1',
      icon: <i className="ri-article-line"></i>,
    },
    {
      label: <Link to='/sheet'>Sheet</Link>,
      key: '2',
      icon: <i className="ri-grid-fill"></i>,
    },
    {
      label: 'Slides',
      key: '3',
      icon: <i className="ri-slideshow-view"></i>,
    },
    {
      label: 'Base',
      key: '4',
      icon: <i className="ri-database-2-fill"></i>,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-[28px] font-bold">Home</h3>
        <div className="menu_drop flex gap-2">
          <Button className="border-[#336DF4] text-[#336DF4] flex items-center"><i className="ri-pages-line"></i> Template </Button>
          <Button className="border-[#336DF4] text-[#336DF4] flex items-center">Upload <i className="ri-arrow-down-s-line"></i></Button>
          <Dropdown menu={menuProps}>
              <Button className="text-[#fff] bg-[#336DF4]">
                <Space>
                  New
                  <i className="ri-arrow-down-s-line"></i>
                </Space>
              </Button>
            </Dropdown>
        </div>
      </div>
      <div className="bg-[#F0F4FF] p-[2rem] mt-[1rem] relative rounded-[1rem]">
        <h3 className="text-[32px] mt-[2rem]">Getting Started with Lark</h3>
        <p className="mt-[1rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dicta voluptates quidem cumque voluptatem pariatur dolore veritatis repellat facere provident odio nulla animi odit, ipsum quis, consequatur, sed corrupti quod!</p>
        <span className="absolute top-[1rem] right-4 text-[28px]"><i className="ri-close-line"></i></span>  
      </div>

      {/* table */}
      <h4 className="text-[22px] font-bold mt-[2rem]">Recent</h4>
      <table className="min-w-full mt-[2rem]">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
            <th className="px-6 py-3 text-left font-medium">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Name
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Author
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Slug
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Status
            </th>
            <th className="px-6 py-3 text-left font-medium">
              Created
            </th>
            <th className="px-6 py-3 text-left font-medium">
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                User
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/400x400"
                        alt=""/>
                </div>
                <div className="ml-4">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                link.abc
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                published
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
              01/03/2024
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
              <Link to='/sheet' className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Show</Link>
            </td>
          </tr>

          <tr className="bg-gray-100">
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                User
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/400x400"
                        alt=""/>
                </div>
                <div className="ml-4">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                link.abc
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
              01/03/2024
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
              <Link to='/sheet' className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Show</Link>
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <input className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" type="checkbox" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                User
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">

              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <img className="h-10 w-10 rounded-full"
                        src="https://via.placeholder.com/400x400"
                        alt=""/>
                </div>
                <div className="ml-4">
                  <div className="text-sm leading-5 font-medium text-gray-900">
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div className="text-sm leading-5 text-gray-900">
                link.abc
              </div>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                draft
              </span>
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
              01/03/2024
            </td>
            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
              <Link to='/sheet' className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Show</Link>
            </td>
          </tr>
        </tbody>
      </table>
      {/* end table */}
    </>
  );
}

export default DashBoards;
