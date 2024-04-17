import React from "react";
import EmployeeHeader from "./EmployeeHeader";

const ProjectDetails = () => {
  return (
    <div>
      <div>
        <EmployeeHeader />
        <div className="bg-gray-100  h-[570px] m-auto  mt-6 p-1">
          <div className="bg-violet-500 p-3 rounded-t-2xl text-center">
            <h1 className="text-white font-bold text-xl">PROJECT DETAILS</h1>
          </div>
          <div className="bg-gray-200 text-black p-2  font-bold flex justify-between ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Project Title
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Project Type
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Project Manager
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Developing Platform
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Database Used
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap font-normal">
                    HR-Managemet
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    Nikhil
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    Web Application
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    Venkat Ramana
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    MERN-Stack
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    MongoDB
                  </td>
                  <td className="px-5 py-4 whitespace-no-wrap font-normal">
                    HR Description
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
