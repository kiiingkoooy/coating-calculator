import React, { useEffect, useState } from "react";
import Floor from "../components/Floor";
import Wall from "../components/Wall";
import Crack from "../components/Crack";
import Divot from "../components/Divot";
import CoatRemoval from "../components/CoatRemoval";
import TileRemoval from "../components/TileRemoval";
import SubComputation from "../components/SubComputation";
import ServiceArea from "../components/ServiceArea";

export default function Home() {
  const [wallSurf, setWallSurf] = useState(false);
  const [cracks, setCracks] = useState(false);
  const [divot, setDivot] = useState(false);
  const [coat, setCoat] = useState(false);
  const [tile, setTile] = useState(false);
  const [subCom, setSubCom] = useState(false);
  const [servArea, setServArea] = useState(false);

  const [floorTotal, setFloorTotal] = useState(0);
  const [wallTotal, setWallTotal] = useState(0);
  const [crackTotal, setCrackTotal] = useState(0);
  const [divotTotal, setDivotTotal] = useState(0);
  const [coatTotal, setCoatTotal] = useState(0);
  const [tileTotal, setTileTotal] = useState(0);
  const [subComTotal, setSubComTotal] = useState(0); 
  const [servAreaTotal, setServAreaTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const getFloorData = (data) =>{
    setFloorTotal(data);
  }
  const getWallData = (data) =>{   
      setWallTotal(data);    
  }
  const getCrackData = (data) =>{
    setCrackTotal(data);
  }
  const getDivotData = (data) =>{
    setDivotTotal(data);
  }
  const getCoatData = (data) =>{
    setCoatTotal(data);
  }
  const getTileData = (data) =>{
    setTileTotal(data);
  }
  const getSubComData = (data) =>{
    setSubComTotal(data);
  }
  const getServAreaData = (data) =>{
    setServAreaTotal(data);
  }

  useEffect(() => {    
    setTotal((floorTotal + wallTotal + crackTotal + divotTotal + coatTotal + tileTotal  + servAreaTotal) - subComTotal)
  }, [floorTotal, wallTotal, crackTotal, divotTotal, coatTotal, tileTotal, subComTotal, servAreaTotal])



  return (
    <div className="max-w-10xl mt-[50px]">
      <div className="justify-center mx-auto">
        <h1 className="text-[50px] flex font-bold justify-center text-gray-600">
          ONSITE JOB CALCULATOR
        </h1>
        <Floor floorData={getFloorData}/>
        <button
          className={`flex mx-auto mt-2 w-[175px] border-2 rounded-md justify-center text-white ${
            wallSurf ? "bg-red-500" : "bg-blue-400"
          }`}
          onClick={(e) => setWallSurf(!wallSurf) & setWallTotal(0)}
        >
          {wallSurf ? "Collapse Wall Surface" : "Add Wall Surface" }
          
        </button>
        {wallSurf ? <Wall wallData={getWallData}/> : ""}

        <button
          className={`flex mx-auto mt-2 w-[175px] border-2 rounded-md justify-center text-white ${
            cracks ? "bg-red-500" : "bg-blue-400"
          }`}
          onClick={(e) => setCracks(!cracks) & setCrackTotal(0)}
        >
          {cracks ? "Collapse Cracks" : "Add Cracks"}
        </button>
        {cracks ? <Crack crackData={getCrackData}/> : ""}

        <button
          className={`flex mx-auto mt-2 w-[175px] border-2 rounded-md justify-center text-white ${
            divot ? "bg-red-500" : "bg-blue-400"
          }`}
          onClick={(e) => setDivot(!divot) & setDivotTotal(0)}
        >
          {divot ? "Collapse Divot" : "Add Divot"}
        </button>
        {divot ? <Divot divotData={getDivotData}/> : ""}

        <button
          className={`flex mx-auto mt-2 w-[175px] border-2 rounded-md justify-center text-white ${
            coat ? "bg-red-500" : "bg-blue-400"
          }`}
          onClick={(e) => setCoat(!coat) & setCoatTotal(0)}
        >
          {coat ? "Collapse Coat" : "Add Coat"}
        </button>
        {coat ? <CoatRemoval coatData={getCoatData}/> : ""}

        <button
          className={`flex mx-auto mt-2 w-[175px] border-2 rounded-md justify-center text-white ${
            tile ? "bg-red-500" : "bg-blue-400"
          }`}
          onClick={(e) => setTile(!tile) & setTileTotal(0)}
        >
          {tile ? "Collapse Tile" : "Add Tile"}
        </button>
        {tile ? <TileRemoval tileData={getTileData}/> : ""}

        <button
          className={`flex mx-auto mt-2 w-[250px] border-2 rounded-md justify-center text-white ${
            subCom ? "bg-red-500" : "bg-blue-400"
          }`}
          onClick={(e) => setSubCom(!subCom) & setSubComTotal(0)}
        >
          {subCom
            ? "Collapse Subtract Computation"
            : "Add Subtract Computation"}
        </button>
        {subCom ? <SubComputation subComData={getSubComData}/> : ""}

        <button
          className={`flex mx-auto mt-2 w-[250px] border-2 rounded-md justify-center text-white ${
            servArea ? "bg-red-500" : "bg-blue-400"
          }`}
          onClick={(e) => setServArea(!servArea) & setServAreaTotal(0)}
        >
          {servArea
            ? "Collapse Additional Service Area/s"
            : "Add Additional Service Area/s"}
        </button>
        {servArea ? <ServiceArea servAreaData={getServAreaData}/> : ""}

        <div className="flex mx-auto justify-center mt-[50px]">
          <h1 className="text-[40px] font-bold text-green-700">Grand Total:</h1>
          <p className="text-[40px] font-bold text-green-700 ml-5 mb-[50px]">${total}</p>
        </div>
      </div>
      <button className="flex mx-auto mt-2 mb-10 w-[100px] border-2 rounded-md justify-center" onClick={e => window.location.reload()}>Clear</button>
    </div>
  );
}
