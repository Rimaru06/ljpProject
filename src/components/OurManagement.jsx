import React from "react";

const OurManagement = () => {
	return (
		<div className="mx-[4rem] md:mt-12 mt-5">
			<div className="flex flex-col items-center ">
				<h1 className="text-4xl font-bold mb-2">
					Our&nbsp;<span className="text-[#f1992d]">Management</span>
				</h1>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-1 ml-8"></div>
				<div className="bg-gray-800 w-24 h-[.1rem] mb-10 mr-4"></div>
			</div>

			<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
				{[
					{
						src: "/Images/lalitMaheshwari.png",
						alt: "president",
						role: "President",
						name: "MR LALIT MAHESHWARI",
					},
					{
						src: "/Images/devendrakumar.png",
						alt: "manager",
						role: "Manager",
						name: "MR DEVENDRA KUMAR GARG",
					},
					{
						src: "/Images/ajaykumar.png",
						alt: "treasurer",
						role: "Treasurer",
						name: "MR AJAY KUMAR JAIN",
					},
					{
						src: "/Images/akhileshkumar.png",
						alt: "principal",
						role: "Principal",
						name: "DR AKHILESH KUMAR SHARMA",
					},
				].map((member, index) => (
					<div key={index} className="flex flex-col items-center">
						<img
							src={member.src}
							alt={member.alt}
							className="object-cover h-72 w-full max-w-xs rounded-md shadow-md"
						/>
						<div className="flex flex-col">
							<span className="text-blue-800">{member.role}</span>
							<span className="font-semibold text-lg">{member.name}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurManagement;
