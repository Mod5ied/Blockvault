import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import bin from "../../../../assets/bin.svg";
import arrDown from "../../../../assets/arrow-down.svg";
import arrDouble from "../../../../assets/arrow-double.svg";
import { adminState, useToggleState } from "../../../../services/state/state";

function pendingDepo() {
	const pendingUsers = [
		{ id: 1, details: ["ogwuru patrick", "paddy@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 2, details: ["ogwuru patrick", "paddy@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 3, details: ["john doe", "john@email.com", "234-801-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 4, details: ["john doe", "john@email.com", "234-801-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 5, details: ["jane doe", "jane@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 6, details: ["jane doe", "jane@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 7, details: ["lana lang", "lang@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 8, details: ["lana lang", "lang@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 9, details: ["ogwuru patrick", "paddy@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
		{ id: 10, details: ["ogwuru patrick", "paddy@email.com", "234-701-362-0343"], username: "patrick", amount: "$4000", status: true, actions: false },
	];
	const [paginateNumDrop, setPaginateNum] = useState(false);
	const toggleAdminState = useToggleState(adminState);

	return (
		<div className="bg-transparent flex flex-col gap-4 p-2 absolute h-full w-[80%] top-20">
			<section className="flex flex-row justify-between py-2">
				<h2 className="text-xl font-semibold text-gray-100">Pending Payment</h2>
				<button onClick={() => toggleAdminState("addStaff")} className="reduce_btn" type="submit">
					Add Staff
				</button>
			</section>

			{/* White card */}
			<section className="w-full flex flex-col gap-8 bg-white rounded-md px-5 py-3 border">
				<div>
					<h2 className="text-xl text-gray-700">Pending Payment</h2>
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
									<span id="drop" className="absolute rounded-md bg-gray-100 overflow-hide">
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
							<input type="text" className="border rounded-md py-1 px-2 bg-gray-50" />
						</span>
					</div>

					{/* table below: */}
					<div className="flex flex-col w-full">
						<span className="flex flex-row w-full text-gray-100 bg-blue-500 rounded-t-md">
							<h3 className="h-[60px] w-[10%] flex items-center justify-around pl-5 ">
								S.N <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[25%] flex items-center justify-around pl-5 ">
								Details <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[18%] flex items-center justify-around pl-5 ">
								Username <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[17%] flex items-center justify-around pl-1 ">
								Amount <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[15%] flex items-center justify-around pl-1 ">
								Status <ReactSVG src={arrDouble} className="text-gray-600" />
							</h3>
							<h3 className="h-[60px] w-[20%] flex items-center pl-28 ">Actions</h3>
						</span>
						{/* 10 list below */}
						{pendingUsers.map((user, index) => {
							return (
								<span className={`flex flex-row w-full text-sm ${index % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
									<p className="h-[63px] w-[10%] flex items-center justify-between px-1 ml-8">{user.id}</p>
									<div className="h-[63px] w-[35%] flex flex-col justify-between pl-6 py-1 ml-8 overflow-hidden">
										<h5 className="text-sm">{user.details[0]}</h5>
										<h5 className="text-sm">{user.details[1]}</h5>
										<h5 className="text-sm">{user.details[2]}</h5>
									</div>
									<p className="h-[63px] w-[20%] flex items-center justify-between pl-6 ml-8">{user.username}</p>
									<p className="h-[63px] w-[20%] flex items-center justify-between pl-6 ml-8">{user.amount}</p>
									<p className="h-[63px] w-[25%] flex items-center justify-between pl-6 ml-8">
										<button type="submit"> {!user.status ? "Approved" : "Pending"} </button>
									</p>
									<p className="h-[63px] w-[25%] flex items-center gap-2 justify-center pl-6 ml-8">
										<button className="px-3 py-1 rounded bg-blue-600 text-gray-50 hover:bg-blue-400 duration-200">Edit</button>
										<ReactSVG src={bin} className="py-[0.40rem] px-3 rounded bg-red-600 text-gray-50 hover:bg-red-400 cursor-pointer duration-200" />
									</p>
								</span>
							);
						})}
					</div>

					{/* sectioning by right. */}
					<div className="flex justify-end border-t w-full">
						<span className="w-[50%] h-[50px] py-2 px-1 flex justify-end gap-1">
							<button className="py-1 px-3 rounded-xl hover:bg-slate-300 duration-200 border border-gray-300">Previous</button>
							<span className="w-[14%] flex justify-around gap-1">
								<button className="rounded-full p-1 px-3 hover:bg-blue-500 hover:text-gray-50 duration-200 border border-gray-300">1</button>
								<button className="rounded-full p-1 px-3 hover:bg-blue-500 hover:text-gray-50 duration-200 border border-gray-300">2</button>
							</span>
							<button className="py-1 px-3 rounded-xl hover:bg-slate-300 duration-200 border border-gray-300">Next</button>
						</span>
					</div>
				</div>
			</section>
		</div>
	);
}

export default pendingDepo;
