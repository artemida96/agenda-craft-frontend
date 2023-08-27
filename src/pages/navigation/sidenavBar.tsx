import AllTasksSVG from "components/shared/icons/AllTasksSVG";
import CompletedTasksSVG from "components/shared/icons/CompletedTasksSVG";
import DailySVG from "components/shared/icons/DailySVG";
import FavoriteTasksSVG from "components/shared/icons/FavoriteTasksSVG";
import LogoutSVG from "components/shared/icons/LogoutSVG";
import UncompletedTasksSVG from "components/shared/icons/UncompletedTasksSVG";
import { logout } from "features/authentication/domain/services/AuthenticationApiService";
import StatusEnum from "features/tasks/domain/dto/StatusEnum";
import { TaskOverview } from "pages/tasks/TaskOverview";
import { useState } from "react";
import { Provider } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export const SidenavBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeButton, setActiveButton] = useState("all");

  const onLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("authToken");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const onDailyTasks = () => {
    const startOfDay = new Date();
    startOfDay.setHours(23, 59, 59, 59);
    const isoStartOfDay = startOfDay.toISOString();
    const query = {
      dateCreated: isoStartOfDay,
    };
    setSearchParams(query);
    setActiveButton("daily");
    navigate({
      pathname: "/dashboard/daily-tasks",
      search: `?${new URLSearchParams(query).toString()}`,
    });
  };

  const onAllTasks = () => {
    setSearchParams();
    setActiveButton("all");
    navigate({
      pathname: "/dashboard",
    });
  };

  const onFavoriteTasks = () => {
    const query = {
      isFavorite: "true",
    };
    setSearchParams(query);
    setActiveButton("favorite");
    navigate({
      pathname: "/dashboard/favorite-tasks",
      search: `?${new URLSearchParams(query).toString()}`,
    });
  };

  const onCompleteTasks = () => {
    const query = {
      status: StatusEnum.COMPLETED.toUpperCase(),
    };
    setSearchParams(query);
    setActiveButton("completed");
    navigate({
      pathname: "/dashboard/completed-tasks",
      search: `?${new URLSearchParams(query).toString()}`,
    });
  };

  const onUnCompleteTasks = () => {
    const query = {
      status: "unCompleted",
    };
    setSearchParams(query);
    setActiveButton("unCompleted");
    navigate({
      pathname: "/dashboard/unCompleted-tasks",
      search: `?${new URLSearchParams(query).toString()}`,
    });
  };

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
                <button className="shadow-none" onClick={onAllTasks}>
                  <a className="flex items-center p-2 space-x-3 rounded-md">
                    <AllTasksSVG
                      width={24}
                      height={24}
                      color="#6c757d"
                    ></AllTasksSVG>
                    <span
                      className={`${
                        activeButton === "all" ? " text-yellow-300" : ""
                      }`}
                    >
                      All tasks
                    </span>
                  </a>
                </button>
              </li>
              <li className="rounded-sm">
                <button className="shadow-none" onClick={onDailyTasks}>
                  <a className="flex items-center p-2 space-x-3 rounded-md">
                    <DailySVG width={24} height={24} color="#6c757d" />
                    <span
                      className={`${
                        activeButton === "daily" ? " text-yellow-300" : ""
                      }`}
                    >
                      Daily Tasks
                    </span>
                  </a>
                </button>
              </li>

              <li className="rounded-sm">
                <button className="shadow-none" onClick={onFavoriteTasks}>
                  <a className="flex items-center p-2 space-x-3 rounded-md">
                    <FavoriteTasksSVG
                      width={24}
                      height={24}
                      color="#6c757d"
                    ></FavoriteTasksSVG>
                    <span
                      className={`${
                        activeButton === "favorite" ? " text-yellow-300" : ""
                      }`}
                    >
                      Favourite tasks
                    </span>
                  </a>
                </button>
              </li>
              <li className="rounded-sm">
                <button className="shadow-none" onClick={onCompleteTasks}>
                  <a className="flex items-center p-2 space-x-3 rounded-md">
                    <CompletedTasksSVG
                      width={24}
                      height={24}
                      color="#6c757d"
                    ></CompletedTasksSVG>
                    <span
                      className={`${
                        activeButton === "completed" ? " text-yellow-300" : ""
                      }`}
                    >
                      Completed tasks
                    </span>
                  </a>
                </button>
              </li>
              <li className="rounded-sm">
                <button className="shadow-none" onClick={onUnCompleteTasks}>
                  <a className="flex items-center p-2 space-x-3 rounded-md">
                    <UncompletedTasksSVG
                      width={24}
                      height={24}
                      color="#6c757d"
                    ></UncompletedTasksSVG>
                    <span
                      className={`${
                        activeButton === "unCompleted" ? " text-yellow-300" : ""
                      }`}
                    >
                      Uncompleted tasks
                    </span>
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-gray-200 ">
        <TaskOverview />
      </div>
      <div className="p-2 flex flex-col">
        <div className="flex-1">Welcome User</div>
        <div className="flex">
          <div className="self-center">
            <button
              className="bg-primary p-2 w-24 ml-6 flex items-center "
              onClick={onLogout}
            >
              <LogoutSVG width={24} height={24} />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
