import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Dashboard(props) {
  const {eth, bnb, usdt, btc} = props
  return (
    <>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0">
               
     <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 ">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 ">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 ">
          <CardPageVisits
           btc = {btc}
           usdt = {usdt}
           eth = {eth}
           bnb = {bnb}
          />
        </div>
      </div>
        </div>
     
      <FooterAdmin></FooterAdmin>
    </>
  );
}
