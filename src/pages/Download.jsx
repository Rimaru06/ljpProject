import React from "react";
import HelpingPage from "./HelpingPage";

const Download = () => {
  const pageInfo = {
    pageHeading: "Downloads",
    pageName: "Download",
    path: "/download",
  };

  // Content data for both tables
  const generalDownloads = [
    "Mandatory Disclosure",
    "Class 9 Syllabus",
    "Class 6 to 8 Syllabus",
    "Class 12 Syllabus",
    "Class 10 Syllabus",
    "Class 11 Syllabus",
  ];

  const cbseDocs = [
    "A certificate must be prepared stating that the school is recognized by the Basic Education Department of Uttar Pradesh for classes 1 to 12 and has applied for CBSE affiliation for classes 1 to 12 under the self-financed category.",
    "(A) Society Registration Certificate",
    "(B) Memorandum of Association / Resolution Letter",
    "(C) Provisional Society Bye-Laws",
    "State NOC",
    "Recognition Certificate for Classes 1 to 8",
    "Certificate for Building Safety (in the prescribed format)",
    "Certificate for Fire Safety (in the prescribed format)",
    "The CBSE form will be downloaded from the CBSE website after uploading all the required documents on the school’s website. Once downloaded, the blank paper will be replaced with the official document.",
    "Certificate for Drinking Water Arrangement (in the prescribed format)",
    "Fee Structure (Registration, Admission, Monthly)",
    "Envel Academic Calendar",
    "Required documents/certificates for CBSE affiliation",
    "Parent Teacher Association",
    "Result Summary Table",
    "Year",
    "Mandatory Public Disclosure",
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

      {/* CBSE Document Table */}
      <div className="overflow-x-auto md:mx-[4rem] p-4">
        <h2 className="text-2xl font-semibold mb-4 text-[#f1992d]">
          CBSE Required Documents
        </h2>

        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead className="bg-[#f1992d] text-white">
            <tr>
              <th className="p-3 border text-left">SN</th>
              <th className="p-3 border text-left">Certificate/Work</th>
              <th className="p-3 border text-left">Download Link</th>
            </tr>
          </thead>
          <tbody>
            {cbseDocs.map((text, i) => (
              <tr className="border-t hover:bg-gray-50" key={i}>
                <td className="p-3 border">{i + 1}</td>
                <td className="p-3 border">{text}</td>
                <td className="p-3 border text-blue-600 underline cursor-pointer">
                  <a href="#" download>
                    Click here to download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-sm text-gray-600 italic">
          * डॉक्यूमेंट्स अपलोड किए जाएंगे।
        </p>
      </div>
    </div>
  );
};

export default Download;
