import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import arrUp from "../../../../assets/arrow-up.svg";
import arrDown from "../../../../assets/arrow-down.svg";
import arrDouble from "../../../../assets/arrow-double.svg";
import { adminState, useToggleState } from "../../../../services/state/state";

function approvedDepo() {
	const users = [
		{ id: 1, details: ["ogwuru patrick", "paddy@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true },
		{ id: 2, details: ["ogwuru patrick", "paddy@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true },
		{ id: 3, details: ["john doe", "john@email.com", "234-801-362-0343"], username: "patrick", amount: "$4000", status: true },
		{ id: 4, details: ["john doe", "john@email.com", "234-801-362-0343"], username: "patrick", amount: "$4000", status: true },
		{ id: 5, details: ["jane doe", "jane@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true },
		{ id: 6, details: ["jane doe", "jane@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true },
		{ id: 7, details: ["lana lang", "lang@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true },
		{ id: 8, details: ["lana lang", "lang@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true },
	];

	const [paginateNumDrop, setPaginateNum] = useState(false);
	const toggleAdminState = useToggleState(adminState);

	return (
		<div className="bg-transparent flex flex-col gap-4 p-2 absolute h-full w-[80%] top-20">
			<section className="flex flex-row justify-between py-2">
				<h2 className="text-xl font-semibold text-gray-100">Approved Payment</h2>
				<button onClick={() => toggleAdminState("addStaff")} className="reduce_btn" type="submit">
					Add Staff
				</button>
			</section>

			{/* White card */}
			<section className="w-full flex flex-col gap-8 bg-white rounded-md px-5 py-3 border">
				<div>
					<h2 className="text-xl text-gray-700">Approved Payment</h2>
				</div>

				{/* table section. */}
				<div className="flex flex-col gap-4 w-full">
					<div className="flex flex-row justify-between">
						<span className="flex flex-row gap-1 items-center">
							Show
							<p className="flex flex-row gap-2 items-center justify-center px-1 rounded-md hover:bg-gray-200 border">
								10
								<span className="flex flex-col items-center">
									<ReactSVG src={arrDown} className="hover:bg-gray-200 rounded-md p-1" />
								</span>
								{paginateNumDrop && (
									<span id="drop" className="absolute rounded-md bg-gray-100 overflow-hidden">
										<p className="hover:bg-gray-300 px-2 py-1 w-[50px]">10</p>
										<p className="hover:bg-gray-300 px-2 py-1 w-[50px]">25</p>
										<p className="hover:bg-gray-300 px-2 py-1 w-[50px]">100</p>
										<p className="hover:bg-gray-300 px-2 py-1 w-[50px]">All</p>
									</span>
								)}
							</p>
							entries
						</span>

						<span className="flex flex-row items-center gap-1">
							Search
							<input type="text" className="border bg-gray-50 rounded-md py-1 px-2" />
						</span>
					</div>

					{/* table below: */}
					<div className="flex flex-col w-full">
						<span className="flex flex-row w-full text-gray-100 bg-blue-500 rounded-t-md">
							<h3 className="h-[60px] w-[10%] flex items-center justify-between px-1 ml-5">
								S.N <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[35%] flex items-center justify-between px-1 ml-5">
								Details <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[20%] flex items-center justify-between px-1 ml-5">
								Username <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[20%] flex items-center justify-between px-1 ml-5">
								Amount <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[25%] flex items-center justify-between px-1 ml-5">
								Status
							</h3>
						</span>
						{/* 10 list below */}
						{users.map((user, index) => {
							return (
								<span className={`flex flex-row w-full ${index % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
									<p className="h-[63px] w-[10%] flex items-center justify-between px-1 ml-5">{user.id}</p>
									<div className="h-[63px] w-[35%] flex flex-col justify-between px-1 py-1 ml-5 overflow-hidden">
										<h5 className="text-sm">{user.details[0]}</h5>
										<h5 className="text-sm">{user.details[1]}</h5>
										<h5 className="text-sm">{user.details[2]}</h5>
									</div>
									<p className="h-[63px] w-[20%] flex items-center justify-between px-1 ml-5">{user.username}</p>
									<p className="h-[63px] w-[20%] flex items-center justify-between px-1 ml-5">{user.amount}</p>
									<div className="h-[63px] w-[25%] flex items-center justify-between px-1 ml-5">
										<p className="px-3 py-2 rounded-md bg-green-500 text-xs text-gray-100 cursor-pointer hover:bg-green-400 duration-300">{user.status ? "Approved" : "Pending"}</p>
										{/* <button className="text-xs text-gray-50 px-3 py-2 bg-green-600 rounded-md" type="submit"> {user.status ? "Approved" : "Pending"} </button> */}
									</div>
								</span>
							);
						})}
					</div>

					{/* sectioning by right. */}
					<div className="flex justify-end border-t w-full"> 
						<span className="w-[50%] h-[50px] py-2 px-1 flex justify-end gap-1">
							<button className="py-1 px-3 rounded-xl hover:bg-slate-300 duration-200 border border-gray-300">Previous</button>
							<span className="w-[22%] flex justify-around gap-2">
								<button className="rounded-full p-1 px-3 hover:bg-blue-500 hover:text-gray-50 duration-200 border border-gray-300">1</button>
								<button className="rounded-full p-1 px-3 hover:bg-blue-500 hover:text-gray-50 duration-200 border border-gray-300">2</button>
								<button className="rounded-full p-1 px-3 hover:bg-blue-500 hover:text-gray-50 duration-200 border border-gray-300">3</button>
							</span>
							<button className="py-1 px-3 rounded-xl hover:bg-slate-300 duration-200 border border-gray-300">Next</button>
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}

export default approvedDepo;
