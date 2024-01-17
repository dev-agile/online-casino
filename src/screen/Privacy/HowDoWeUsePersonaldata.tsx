import React from "react";

const HowDoWeUsePersonaldata = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[36px] font-bold leading-[50px] xsm:text-10 mt-2 ">
        {data?.title}
      </h1>
      <p className="text-[18px]  leading-[50px] xsm:text-10">
        {data?.description}
      </p>

      <p
        className="text-[18px]  leading-[50px] xsm:text-10"
        dangerouslySetInnerHTML={{ __html: data?.right }}
      ></p>
      <p className="text-[18px]  leading-[50px] xsm:text-10">
        Protection of children
      </p>
      <ul className="grid !gap-y-[16px] text-base mt-2">
        {data?.protectionOfChildren?.map((point: any, index: number) => (
          <div key={index} className="flex items-start" >
            <span className="text-[18px] pb-1 leading-[50px]"> {index + 1}.</span>
            <span className="text-[18px] pb-1 leading-[50px]"  dangerouslySetInnerHTML={{ __html: point}}>
             
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default HowDoWeUsePersonaldata;
