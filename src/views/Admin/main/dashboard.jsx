import { useRecoilState } from "recoil";
import AddStaff from "../utils/addStaff";
import AddBonus from "../utils/addBonus";
import AddProfit from "../utils/addProfit";
import PendingDepo from "./deposit/pending";
import ApprovedDepo from "./deposit/approved";
import ReduceFunds from "../utils/reduceFund";
import FundDeposit from "../utils/fundDeposit";
import Header from "../../../components/header";
import Metrics from "../../../components/metrics";
import Sidebar from "../../../components/sidebar";
import PendingWithdraw from "./withdrawn/pending";
import PaymentMethod from "../utils/paymentMethod";
import Client from "../../Admin/main/users/client";
import ApprovedWithdraw from "./withdrawn/approved";
import ViewPayment from "../../Admin/layouts/viewPayment";
import { adminState } from "../../../services/state/state";

function Dashboard(props) {
	const [stateAdmin, setStateAdmin] = useRecoilState(adminState);
	return (
		<div className="flex flex-row">
			<Sidebar />
			<section className="h-[220px] flex flex-col justify-between items-center bg-blue-600 w-full">
				<Header />
				{stateAdmin.depositPending && <PendingDepo />}
				{stateAdmin.depositApproved && <ApprovedDepo />}
				{stateAdmin.withdrawnPending && <PendingWithdraw />}
				{stateAdmin.withdrawnApproved && <ApprovedWithdraw />}
				{/*  */}
				{stateAdmin.client && <Client />}
				{stateAdmin.dashboard && <Metrics />}
				{stateAdmin.addStaff && <AddStaff />}
				{stateAdmin.addBonus && <AddBonus />}
				{stateAdmin.addProfit && <AddProfit />}
				{stateAdmin.fundDeposit && <FundDeposit />}
				{stateAdmin.reduceFunds && <ReduceFunds />}
				{stateAdmin.viewPayment && <ViewPayment />}
				{stateAdmin.paymentMethod && <PaymentMethod />}
			</section>
		</div>
	);
}

export default Dashboard;
