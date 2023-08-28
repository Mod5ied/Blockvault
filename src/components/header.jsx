import QuickActions from "../views/Admin/layouts/actions";
import Notifier from "../views/Admin/layouts/notifier";
import Accounts from "../views/Admin/layouts/account";
import mailLocked from "../assets/mail-locked.svg";
import avatar from "../assets/avatar.svg";
import stacks from "../assets/stacks.svg";
import mail from "../assets/email.svg";
import { ReactSVG } from "react-svg";
import { useState } from "react";
// import { adminState, useToggleState } from "../services/state/state";

function header() {
	const [activeAction, setActiveAction] = useState("");
	const [mailState, setMailState] = useState(false);

	const handleClick = (id) => {
		if (activeAction === id) {
			setActiveAction("");
			setMailState(!mailState);
		} else {
			setActiveAction(id);
			setMailState(!mailState);
		}
	};

	return (
		<header id="header_container" className="flex w-full z-20 bg-white relative h-[48px] shadow justify-between px-2 py-2">
			<section id="header_select" className="">
				{/* Select language component. */}
			</section>

			<section className="header_actions w-[200px] h-full cursor-pointer">
				<span id="header_actions_desktop" className="flex flex-row justify-center items-center gap-6 p-2 h-full text-gray-600">
					{/* click to show messages */}
					{mailState ? (
						<ReactSVG onClick={handleClick.bind(this, "messages")} src={mail} />
					) : (
						<ReactSVG onClick={handleClick.bind(this, "messages")} src={mailLocked} />
					)}

					{/* click to show the quick-actions */}
					<ReactSVG onClick={handleClick.bind(this, "quick_actions")} src={stacks} />

					{/* click to show avatar */}
					<ReactSVG onClick={handleClick.bind(this, "avatar")} src={avatar} className="w-6 h-6" />
				</span>
				<span id="header_actions_mobile" className="flex md:hidden justify-center items-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
						/>
					</svg>
				</span>
				<span id="actions">
					{activeAction === "messages" ? <Notifier /> : null}
					{activeAction === "quick_actions" ? <QuickActions /> : null}
					{activeAction === "avatar" ? <Accounts /> : null}
				</span>
			</section>
		</header>
	);
}

export default header;
