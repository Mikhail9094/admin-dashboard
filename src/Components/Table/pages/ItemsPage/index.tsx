import React, { useEffect, useState } from "react";
import Table from "../../index";
import { columns } from "./constants";
import { CategoryItem } from "./types";
import Loading from "../Loading/Loading";

const ItemsPage = () => {
  const [data, setData] = useState<CategoryItem[]>([]);
  const [offset, setOffset] =useState(0)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   
    const fetchData = async () => {
      setIsLoading(false);
      const res = await fetch(`https://api.dev.thedematerialised.com/api/nfts?limit=10&offset=${offset}`);
      const categories = await res.json();

      setData(categories.list);
      setIsLoading(true);
     // console.log(Object.keys(categories.list).length)
     console.log(categories)
    };

    fetchData();
    
  }, [offset]);

  const next = ()=>{
   
   setOffset((prev)=>{
        if (prev<170){
          return prev+10
        }
        return 170
      })
       
    }
  
  const back = ()=>{
    if (offset>0) {
      return setOffset(prev=>prev-10)
    }
    return setOffset(0)
  }

  return (
    <div>
      <h1>Items</h1>
      {isLoading ? <Table data={data} columns={columns} /> : <Loading />}
      <button onClick={back}>back</button>
      <button onClick={next}>next</button>
      
    </div>
  );
};

export default ItemsPage;
