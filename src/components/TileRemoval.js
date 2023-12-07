import React, { useEffect, useState } from "react";

export default function TileRemoval(props) {
  const tileCPS = 1.5;
  const [tileWidth, setTileWidth] = useState("");
  const [tileDepth, setTileDepth] = useState("");
  const [totalTileSqft, setTotalTileSqft] = useState(tileWidth * tileDepth);
  const [tileTotal, setTileTotal] = useState(totalTileSqft * tileCPS);

  useEffect(() => {
    setTotalTileSqft(tileWidth * tileDepth);
    setTileTotal(totalTileSqft * tileCPS);
    props.tileData(tileTotal);
  }, [tileWidth, tileDepth, totalTileSqft, props, tileTotal]);

  return (
    <div>
      <h2 className="flex justify-center mx-auto mt-5 text-[25px] font-bold text-blue-700">
        EXISTING TILE REMOVAL
      </h2>
      <table className="w-[75%] mt-2 mx-auto min-w-max table-auto text-center border-2 py-10">
        <thead>
          <tr className="mx-auto">
            <th>Width</th>
            <th>Depth</th>
            <th>Sqft</th>
            <th>Cost/Sqft</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={tileWidth}
                onChange={(e) => setTileWidth(+e.target.value)}
              />
            </td>
            <td>
              <input
                type="number"
                className="w-[100px] border-2 rounded-md border-slate-400"
                value={tileDepth}
                onChange={(e) => setTileDepth(+e.target.value)}
              />
            </td>
            <td className="">
              <label onChange={totalTileSqft}>{totalTileSqft}</label>
            </td>
            <td>${tileCPS}</td>
            <td>${tileTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
