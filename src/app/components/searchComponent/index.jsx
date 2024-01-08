"use client";
import { useEffect, useState } from "react";
import { useUserFilesContext } from "@/app/context/userFilesContext";
import styles from "./search.module.scss";
import { MdSearch } from "react-icons/md";
import { useFilteredContext } from "@/app/context/filteredContext";

function SearchComponent() {
  //context userData
  const [searchData, setSearchData] = useState("");
  const {userData} = useUserFilesContext();
  const { setFilteredData} = useFilteredContext();

  //filtered data
  const filteredUserFiles = userData.filter((file) => file.title.toLowerCase().includes(searchData.toLowerCase()) | file.author.toLowerCase().includes(searchData.toLowerCase())
  );
  useEffect(() => {
    setFilteredData(filteredUserFiles)
  }, [searchData]);
  
  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          maxLength={30} 
          placeholder="ex: título do livro ou autor" 
          value={searchData}
          onChange={handleSearchChange} 
        />
        <MdSearch size={25} color={"#5f6368"} />
      </div>
    </div>
  );
}

export default SearchComponent;
