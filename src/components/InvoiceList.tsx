import dayjs from "dayjs";
import React from "react";
import data from "../data/data.json";
import { ReactComponent as PlusIcon } from "../images/icon-plus.svg";

const PaidStatus = ({ status }: any) => {
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
const PendingStatus = ({ status }: any) => {
  return (
    <div className="bg-[#ff8f00] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#ff8f00] font-bold">
        <span className="circle h-2.5 w-2.5 bg-[#ff8f00] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};

const DraftStatus = ({ status }: any) => {
  return (
    // light theme #373b53
    // dark theme #dfe3fa
    <div className="bg-[#dfe3fa] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#dfe3fa] font-bold">
        <span className="circle h-2.5 w-2.5 bg-[#dfe3fa] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};

const InvoiceList = () => {
  return (
    <section className="mt-8 px-4">
      <div className="list-header">
        <div className="list-header-content max-w-5xl mx-auto flex justify-between">
          <div className="list-header-left">
            <h2 className="text-2xl font-bold">Invoices</h2>
            <p className="opacity-80 mt-1">{data.length} invoices</p>
          </div>
          <div className="list-header-right flex items-center gap-5">
            <button className="font-bold">Filter</button>
            <button className="new-invoice-btn flex gap-2 sitems-center bg-violet-500 px-3 py-2.5 rounded-full font-bold">
              <div className="plus-icon-container bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <PlusIcon />
              </div>
              New
            </button>
          </div>
        </div>
        <div className="list flex flex-col gap-5 justify-center items-center mt-8">
          {data.map((item) => (
            <div
              className="item min-w-[18rem] w-full max-w-[20rem] bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg"
              key={item.id}
            >
              <div className="item-title flex justify-between">
                <p className="font-bold">
                  <span className="text-indigo-400">#</span>
                  {item.id}
                </p>
                <p className="opacity-90">{item.clientName}</p>
              </div>
              <div className="item-info flex justify-between items-center mt-3">
                <div className="item-payment-total">
                  <p className="opacity-90 text-sm">
                    Due {dayjs(item.paymentDue).format("DD MMM YYYY")}
                  </p>
                  <p className="font-bold mt-1">
                    ${" "}
                    {item.total.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <div className="item-payment-status">
                  {item.status === "paid" ? (
                    <PaidStatus status={item.status} />
                  ) : item.status === "pending" ? (
                    <PendingStatus status={item.status} />
                  ) : (
                    <DraftStatus status={item.status} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvoiceList;
