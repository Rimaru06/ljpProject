import React from "react";
import HelpingPage from "./HelpingPage";

const Download = () => {
  const pageInfo = {
    pageHeading: "Download",
    pageName: "Download",
    path: "/download",
  };

  // Content data for both tables
  const generalDownloads = [
    "Class 9 Syllabus",
    "Class 6 to 8 Syllabus",
    "Class 12 Syllabus",
    "Class 10 Syllabus",
    "Class 11 Syllabus",
  ];

  return (
    <div>
      <HelpingPage pageInfo={pageInfo} />

      {/* Section Heading */}
      <div className="flex flex-col items-center my-5">
        <h1 className="text-4xl font-bold mb-2">
          Our&nbsp;<span className="text-[#f1992d]">Downloads</span>
        </h1>
        <div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
        <div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
      </div>

      {/* General Downloads Table */}
      <div className="overflow-x-auto md:mx-[4rem] p-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#f1992d]">
          General Downloads
        </h2>
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-[#f1992d] text-white">
            <tr>
              <th className="p-3 border text-left">Section</th>
              <th className="p-3 border text-left">Download Link</th>
            </tr>
          </thead>
          <tbody>
            {generalDownloads.map((item, i) => (
              <tr className="border-t hover:bg-gray-50" key={i}>
                <td className="p-3 border">{item}</td>
                <td className="p-3 border text-blue-600 underline cursor-pointer">
                  <a href="#" download>
                    Click here to download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Download;
