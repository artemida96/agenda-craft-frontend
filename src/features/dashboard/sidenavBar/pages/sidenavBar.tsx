import TaskView from "features/tasks/TaskView";
import TaskGrid from "features/tasks/components/taskGrid/TaskGrid";
import AllTasksSVG from "shared/icons/AllTasksSVG";
import CompletedTasksSVG from "shared/icons/CompletedTasksSVG";
import DailySVG from "shared/icons/DailySVG";
import Icon from "shared/icons/DailySVG";
import FavoriteTasksSVG from "shared/icons/FavoriteTasksSVG";
import GridIcon from "shared/icons/GridIcon";
import LogoutSVG from "shared/icons/LogoutSVG";
import UncompletedTasksSVG from "shared/icons/UncompletedTasksSVG";

export default function SidenavBar() {
    return (
        <div className="flex ">
            <div className="flex flex-col h-screen p-3 bg-light shadow w-60">
                <div className="space-y-8">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-3 text-sm">
                            <li className="rounded-sm">
                                <a href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <DailySVG width={24} height={24} color="#6c757d" />  
                                    <span >Daily Tasks</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <AllTasksSVG  width={24} height={24} color="#6c757d" ></AllTasksSVG>
                                    <span>All tasks</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <FavoriteTasksSVG  width={24} height={24} color="#6c757d" ></FavoriteTasksSVG>
                                    <span>Favourite tasks</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <CompletedTasksSVG  width={24} height={24} color="#6c757d"></CompletedTasksSVG>
                                    <span>Completed tasks</span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                   <UncompletedTasksSVG width={24} height={24} color="#6c757d" ></UncompletedTasksSVG>
                                    <span>Uncompleted tasks</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container bg-gray-200 ">
                <TaskView/>
            </div>
                <div className="p-2 flex flex-col">
                    <div className="flex-1">

                        Welcome Artemis
                    </div>
                    <div className="flex">
                    <div className="flex-1 flex gap-x-2">
                        <LogoutSVG width={24} height={24} />
                        Logout
                    </div>   
                    </div>
            </div>
        </div>
    );
}