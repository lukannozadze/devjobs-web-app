import FilterIcon from "../../UI/FilterIcon";
import SearchIcon from "../../UI/SearchIcon";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
interface Inputs {
  filter: string;
}
const Filter = (props: {
  setIsFilterClicked: (isFilterClicked: boolean) => void;
  setFilterByTitleValue: (filterByTitleValue: string) => void;
  setIsValidAndClicked: (isValidAndClicked: boolean) => void;
}) => {
  const schema = yup.object({
    filter: yup
      .string()
      .required("Can't be empty")
      .matches(/^[A-Za-z\s]*$/, "Wrong Format!"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  useEffect(() => {
    props.setFilterByTitleValue(watch("filter"));
  }, [watch("filter")]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="filter-form"
      className="flex justify-center -translate-y-[50%]"
    >
      <div className="w-[327px] relative">
        <input
          {...register("filter")}
          className={`py-[32px] w-[100%] pl-6 outline-none ${
            errors.filter ? "border-[1px] border-red-600" : ""
          }`}
          type="text"
          placeholder="Filter by title..."
        />

        <FilterIcon
          setIsFilterClicked={props.setIsFilterClicked}
          class="absolute top-[35px] right-[88px] z-0"
        />
        <SearchIcon
          class="absolute top-[21px] right-4"
          setIsValidAndClicked={props.setIsValidAndClicked}
          inputVal={watch("filter")}
        />
      </div>
    </form>
  );
};

export default Filter;
