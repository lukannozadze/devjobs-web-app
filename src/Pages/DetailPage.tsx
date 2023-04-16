import CompanyDescription from "../Components/Detail/CompanyDescription";
import JobDescription from "../Components/Detail/JobDescription";

const DetailPage = (props: { active: number }) => {
  return (
    <div className="flex flex-col items-center">
      <CompanyDescription active={props.active} />
      <JobDescription active={props.active} />
    </div>
  );
};
export default DetailPage;
