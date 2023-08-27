import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logout } from "features/authentication/domain/services/AuthenticationApiService";
import StatusEnum from "features/tasks/domain/dto/StatusEnum";
import { TaskOverview } from "pages/tasks/TaskOverview";
import AllTasksSVG from "components/shared/icons/AllTasksSVG";
import DailySVG from "components/shared/icons/DailySVG";
import FavoriteTasksSVG from "components/shared/icons/FavoriteTasksSVG";
import CompletedTasksSVG from "components/shared/icons/CompletedTasksSVG";
import UncompletedTasksSVG from "components/shared/icons/UncompletedTasksSVG";
import LogoutSVG from "components/shared/icons/LogoutSVG";

const SidenavButton = ({ onClick, isActive, children }: any) => (
  <button className="shadow-none" onClick={onClick}>
    <a
      className={`flex items-center p-2 space-x-3 rounded-md ${
        isActive ? " text-yellow-300" : ""
      }`}
    >
      {children}
    </a>
  </button>
);

const SidenavBar = () => {
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

  const setQueryParamAndNavigate = (
    query: Record<string, string>,
    path: string
  ) => {
    setSearchParams(query);
    setActiveButton(query.status || "all");
    navigate({
      pathname: path,
      search: `?${new URLSearchParams(query).toString()}`,
    });
  };

  const onDailyTasks = () => {
    const startOfDay = new Date();
    startOfDay.setHours(23, 59, 59, 59);
    const isoStartOfDay = startOfDay.toISOString();
    const query = { dateCreated: isoStartOfDay };
    setQueryParamAndNavigate(query, "/dashboard/daily-tasks");
  };

  const onAllTasks = () => {
    setQueryParamAndNavigate({}, "/dashboard");
  };

  const onFavoriteTasks = () => {
    const query = { isFavorite: "true" };
    setQueryParamAndNavigate(query, "/dashboard/favorite-tasks");
  };

  const onCompleteTasks = () => {
    const query = { status: StatusEnum.COMPLETED.toUpperCase() };
    setQueryParamAndNavigate(query, "/dashboard/completed-tasks");
  };

  const onUnCompleteTasks = () => {
    const query = { status: "unCompleted" };
    setQueryParamAndNavigate(query, "/dashboard/unCompleted-tasks");
  };

  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-light shadow w-60">
        <div className="space-y-8">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-3 text-sm">
              <li className="rounded-sm">
                <SidenavButton
                  onClick={onAllTasks}
                  isActive={activeButton === "all"}
                >
                  <AllTasksSVG width={24} height={24} color="#6c757d" />
                  <span>All tasks</span>
                </SidenavButton>
              </li>
              <li className="rounded-sm">
                <SidenavButton
                  onClick={onDailyTasks}
                  isActive={activeButton === "daily"}
                >
                  <DailySVG width={24} height={24} color="#6c757d" />
                  <span>Daily Tasks</span>
                </SidenavButton>
              </li>
              <li className="rounded-sm">
                <SidenavButton
                  onClick={onFavoriteTasks}
                  isActive={activeButton === "favorite"}
                >
                  <FavoriteTasksSVG width={24} height={24} color="#6c757d" />
                  <span>Favourite tasks</span>
                </SidenavButton>
              </li>
              <li className="rounded-sm">
                <SidenavButton
                  onClick={onCompleteTasks}
                  isActive={activeButton === "completed"}
                >
                  <CompletedTasksSVG width={24} height={24} color="#6c757d" />
                  <span>Completed tasks</span>
                </SidenavButton>
              </li>
              <li className="rounded-sm">
                <SidenavButton
                  onClick={onUnCompleteTasks}
                  isActive={activeButton === "unCompleted"}
                >
                  <UncompletedTasksSVG width={24} height={24} color="#6c757d" />
                  <span>Uncompleted tasks</span>
                </SidenavButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-gray-200">
        <TaskOverview />
      </div>
      <div className="p-2 flex flex-col">
        <div className="flex-1">Welcome User</div>
        <div className="flex">
          <div className="self-center">
            <button
              className="bg-primary p-2 w-24 ml-6 flex items-center"
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

export default SidenavBar;
