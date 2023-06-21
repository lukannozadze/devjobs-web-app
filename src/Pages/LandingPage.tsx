import { useEffect, useState } from "react";
import Filter from "../Components/Landing/Filter";
import JobWindow from "../Components/Landing/JobWindow";
import fetchedData from "../data.json";
const LandingPage = (props: {
  setIsFilterClicked: (isFilterClicked: boolean) => void;
  setActive: (active: number) => void;
  isDark: boolean;
  modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  };
  setModalState: (modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  }) => void;
}) => {
  const [filterByTitleValue, setFilterByTitleValue] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [filteredArr, setFilteredArr] = useState<any[]>(fetchedData);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
 let tempArr:any;


  const filterByTitle = () =>{
     tempArr = fetchedData.filter((item)=>{
      return (
        item.position.includes(filterByTitleValue) ||
        item.position
          .toLowerCase()
          .includes(filterByTitleValue.toLowerCase()) ||
        item.position
          .toUpperCase()
          .includes(filterByTitleValue.toUpperCase())
      );
    })
  }
  
  const filterByLocation = () =>{
     tempArr = fetchedData.filter((item) => {
            
      return (
        item.location.includes(props.modalState.locationValue) ||
        item.location
        .toLowerCase()
        .includes(props.modalState.locationValue.toLowerCase()) ||
        item.location
        .toUpperCase()
        .includes(props.modalState.locationValue.toUpperCase()) 
        );
      });

  }
  
  const filterByLocationAndContract = () =>{
     tempArr = fetchedData.filter((item) => {
      console.log(item.location.includes(props.modalState.locationValue));
      return (
        (item.location.includes(props.modalState.locationValue) ||
        item.location
        .toLowerCase()
        .includes(props.modalState.locationValue.toLowerCase()) ||
         item.location
        .toUpperCase()
        .includes(props.modalState.locationValue.toUpperCase())) && item.contract === 'Full Time'
        );
      });
  }

  const filterByTitleAndContract = () =>{
    tempArr = fetchedData.filter((item)=>{
      return (
        (item.position.includes(filterByTitleValue) ||
        item.position
          .toLowerCase()
          .includes(filterByTitleValue.toLowerCase()) ||
        item.position
          .toUpperCase()
          .includes(filterByTitleValue.toUpperCase())) && item.contract === 'Full Time'
      );
    })
  }

  const filterByTitleAndLocation = () =>{
    tempArr = fetchedData.filter((item)=>{
      return item.position.toLowerCase().includes(filterByTitleValue.toLowerCase()) && item.location.toLowerCase().includes(props.modalState.locationValue.toLowerCase()) || item.position.toUpperCase().includes(filterByTitleValue.toUpperCase()) && item.location.toUpperCase().includes(props.modalState.locationValue.toUpperCase()) || item.position.toUpperCase().includes(filterByTitleValue.toUpperCase()) && item.location.toLowerCase().includes(props.modalState.locationValue.toLowerCase()) || item.position.toLowerCase().includes(filterByTitleValue.toLowerCase()) && item.location.toUpperCase().includes(props.modalState.locationValue.toUpperCase()) 
    })
  }
  const filterByContract = () =>{
    tempArr = fetchedData.filter((item)=>{
      return item.contract === 'Full Time';
    })
  }

  useEffect(() => {
    if (isClicked) {
      console.log('egaa');
      if (isEmpty) {
        setFilteredArr(fetchedData);
          setIsClicked(false);  
          
      } 
       else {
        console.log('ha')
        filterByTitle();
        setIsClicked(false);
      }
      setFilteredArr(tempArr); 
    }
 console.log(isEmpty);
  const filteringByLocationAndContract = props.modalState.locationValue!=='' && props.modalState.isChecked;
  const filteringByTitleAndContract = filterByTitleValue!=='' && props.modalState.isChecked;
  const filteringByTitle = filterByTitleValue !== '' && props.modalState.locationValue ==='' && !props.modalState.isChecked;
  const filteringByLocation = props.modalState.locationValue!=='' && filterByTitleValue ==='' && !props.modalState.isChecked;
  const filteringByTitleAndLocation = filterByTitleValue!=='' && props.modalState.locationValue!=='' && !props.modalState.isChecked
  const filteringByContract = filterByTitleValue === '' && props.modalState.locationValue ==='' && props.modalState.isChecked

    if (props.modalState.isSubmitted) {
      if(filteringByTitle){
        filterByTitle();
      }else if(filteringByLocation){
        filterByLocation();
      }else if(filteringByTitleAndContract){
        filterByTitleAndContract();
        console.log('contract');
      }else if(filteringByLocationAndContract){
        filterByLocationAndContract();
      }else if(filteringByTitleAndLocation){
        filterByTitleAndLocation();
      }
      else if(filteringByContract){   
        filterByContract();
      }else{
        tempArr = fetchedData;
      }
      setFilteredArr(tempArr); 
      props.setIsFilterClicked(false);
    }
  return  () =>{
      props.setModalState({...props.modalState,isSubmitted:false});
    }
  }, [isClicked, props.modalState.isSubmitted]);
  
  return (
    <div className="pb-[62px]">
      <Filter
        setIsFilterClicked={props.setIsFilterClicked}
        setFilterByTitleValue={setFilterByTitleValue}
        setIsClicked={setIsClicked}
        setIsEmpty={setIsEmpty}
        setModalState={props.setModalState}
        modalState={props.modalState}
        isDark={props.isDark}
        
      />
      <div className="flex flex-col items-center gap-[49px] md:flex-row md:flex-wrap md:justify-center">
        {filteredArr.map((item) => {
          return (
            <JobWindow
              key={item.id}
              id={item.id}
              logo={item.logo}
              logoBackground={item.logoBackground}
              position={item.position}
              postedAt={item.postedAt}
              contract={item.contract}
              company={item.company}
              location={item.location}
              setActive={props.setActive}
              isDark={props.isDark}
            />
          );
        })}
      </div>
    </div>
  );
};
export default LandingPage;
