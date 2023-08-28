import React, { useEffect, useState } from "react";

function dataTable({ tableContext, tableData }) {
	const [dataArray, setDataArray] = useState([false]);

	useEffect(() => {
		setDataArray(tableData);
	}, [tableData]);
	return (
		<section className=" w-full mt-[50px] rounded-md bg-stone-900">
			<h3 className="h-[70px] text-gray-50 font-bold p-4">{tableContext}</h3>
			<div className="flex flex-row items-center border-y border-blue-700 h-[45px]">
				<p className="text-blue-700 text-xs w-[15%] px-3">S/N</p>
				<p className="text-blue-700 text-xs w-[25%]">TRANSACTION ID</p>
				<p className="text-blue-700 text-xs w-[20%]">AMOUNT</p>
				<p className="text-blue-700 text-xs w-[15%]">METHOD</p>
				<p className="text-blue-700 text-xs w-[15%]">STATUS</p>
				<p className="text-blue-700 text-xs w-[10%]">CREATED</p>
			</div>
			{(dataArray &&
				dataArray.map((data, key) => (
					<div id="data-loaded" className="text-gray-100 px-4 py-6">
						<p> {data.id} </p>
						<p> {data.transaction_id} </p>
						<p> {data.amount} </p>
						<p> {data.method} </p>
						<p> {data.status} </p>
						<p> {data.created} </p>
					</div>
				))) || <p className="text-gray-100 px-4 py-6">No data found</p>}
		</section>
	);
}

export default dataTable;
