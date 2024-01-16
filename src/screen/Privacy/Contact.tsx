import React from "react";

const OurContact = ({ data }: any) => {
  return (
    <div>
      <h1 className="text-[36px] font-bold leading-[52px] xsm:text-10  ">
        {data?.title}
      </h1>

      <p className="text-[20px] leading-[52px] xsm:text-10  ">
        {data?.Description}
      </p>
      <p className="text-[20px]  leading-[52px] xsm:text-10">
        Company Name:
        <span dangerouslySetInnerHTML={{ __html: data?.CompanyName }}></span>
      </p>

      <p className="text-[20px]  leading-[52px] xsm:text-10  ">
        Address:
        <span dangerouslySetInnerHTML={{ __html: data?.Address }}></span>
      </p>
      <p className="text-[20px]  leading-[52px] xsm:text-10  ">
        Email:
        <span dangerouslySetInnerHTML={{ __html: data?.Email }}></span>
      </p>
    </div>
  );
};

export default OurContact;
