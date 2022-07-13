import React from "react";
import { InvoiceType } from "types/types";

interface InvoiceStatusPropsType {
  invoiceInfo: InvoiceType | undefined;
  //   status:string
}
interface StatusType {
  status: string | undefined;
}

const PaidStatus = ({ status }: StatusType) => {
  // html circle/dot: &#x2022;
  return (
    <div className="bg-[#33d69f] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#33d69f] font-bold">
        <span className="circle h-2.5 w-2.5 bg-[#33d69f] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};
const PendingStatus = ({ status }: StatusType) => {
  return (
    <div className="bg-[#ff8f00] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#ff8f00] font-bold">
        <span className="circle h-2.5 w-2.5 bg-[#ff8f00] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};
const DraftStatus = ({ status }: StatusType) => {
  return (
    // light theme #373b53
    // dark theme #dfe3fa
    <div className="bg-[#373b53] dark:bg-[#dfe3fa] bg-opacity-10 dark:bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#373b53] dark:text-[#dfe3fa] font-bold">
        <span className="circle h-2.5 w-2.5 bg-[#373b53] dark:bg-[#dfe3fa] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};

const InvoiceStatus = ({ invoiceInfo }: InvoiceStatusPropsType) => {
  return (
    <div className="inline-block invoice-payment-status ml-auto sm:ml-4">
      {invoiceInfo?.status === "paid" ? (
        <PaidStatus status={invoiceInfo?.status} />
      ) : invoiceInfo?.status === "pending" ? (
        <PendingStatus status={invoiceInfo?.status} />
      ) : (
        <DraftStatus status={invoiceInfo?.status} />
      )}
    </div>
  );
};

export default InvoiceStatus;
