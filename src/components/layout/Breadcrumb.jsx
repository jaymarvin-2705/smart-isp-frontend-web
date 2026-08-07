import { useLocation } from "react-router-dom";

export default function Breadcrumb() {

  const location = useLocation();

  const current =
    location.pathname.split("/")[1] || "dashboard";

  return (
    <div className="mb-6 text-gray-500">

      Dashboard /

      <span className="font-semibold capitalize">

        {" "}
        {current}

      </span>

    </div>
  );
}