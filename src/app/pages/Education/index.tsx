import PathConstants from "@src/routes/PathConstants";
import { Navigate, Outlet } from "react-router";

const EducationLayout = () => {
  console.log("EducationLayout");
  return (
    <div>
      <Navigate to={PathConstants.education.hof.path} replace />
      <Outlet />
    </div>
  );
};

export default EducationLayout;
