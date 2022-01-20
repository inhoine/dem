import { FaChevronRight } from "react-icons/fa";
import User from "./User/User";

function Page() {
  return (
    <div className="content">
      <User />
      <div className="content-address">
        <p className="content-previous">Quản lý học phí</p>
        <i className="content-icon">{<FaChevronRight />}</i>
        <h1 className="content-present">Danh sách lớp học</h1>
      </div>
    </div>
  );
}

export default Page;