import CompanyDescription from "../Components/Detail/CompanyDescription";
import JobDescription from "../Components/Detail/JobDescription";

const DetailPage = (props: { active: number; isDark: boolean }) => {
  return (
    <div className="flex flex-col items-center">
      <CompanyDescription active={props.active} isDark={props.isDark} />
      <JobDescription active={props.active} isDark={props.isDark} />
    </div>
  );
};
export default DetailPage;
