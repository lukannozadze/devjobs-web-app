import Filter from "../Components/Landing/Filter";
import JobWindow from "../Components/Landing/JobWindow";

const LandingPage = () => {
  return (
    <div>
      <Filter />
      <div className="flex justify-center">
        <JobWindow />
      </div>
    </div>
  );
};
export default LandingPage;
