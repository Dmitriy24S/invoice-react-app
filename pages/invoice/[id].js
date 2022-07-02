import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PaidStatus = ({ status }) => {
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
const PendingStatus = ({ status }) => {
  return (
    <div className="bg-[#ff8f00] bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#ff8f00] font-bold">
        <span className="circle h-2.5 w-2.5 bg-[#ff8f00] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};

const DraftStatus = ({ status }) => {
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

export default function Invoice({ invoices }) {
  const router = useRouter();
  const [invoiceId, setInvoiceId] = useState(null);
  const [invoiceInfo, setInvoiceInfo] = useState(null);

  useEffect(() => {
    setInvoiceId(router.query.id);
    setInvoiceInfo(invoices.find((invoice) => invoice.id === invoiceId));
  }, [invoiceId]);

  console.log(invoiceId);
  console.log(invoiceInfo);

  return (
    <main className="mt-8 px-4">
      <Link href="/" passHref={true} scroll={false}>
        <a>
          <span className="flex gap-2 items-center cursor-pointer">
            <img src="/images/icon-arrow-left.svg" alt="" />
            Go Back
          </span>
        </a>
      </Link>
      <section className="invoice min-w-[18rem] w-full max-w-[20rem] mt-6 mx-auto flex flex-col gap-5">
        <div className="payment-status-container flex items-center justify-between bg-indigo-900 bg-opacity-40 p-4  rounded-lg">
          <h4>Status</h4>
          <p className="invoice-payment-status">
            {invoiceInfo?.status === "paid" ? (
              <PaidStatus status={invoiceInfo?.status} />
            ) : invoiceInfo?.status === "pending" ? (
              <PendingStatus status={invoiceInfo?.status} />
            ) : (
              <DraftStatus status={invoiceInfo?.status} />
            )}
          </p>
        </div>
        <div className="invoice-info grid grid-cols-2 gap-4 flex-col bg-indigo-900 bg-opacity-40 p-5 rounded-lg">
          <div className="invoice-id col-span-2">
            <p className="font-bold">
              <span className="text-indigo-400">#</span>
              {invoiceInfo?.id}
            </p>
            <p className="text-slate-300">{invoiceInfo?.description}</p>
          </div>
          <address className="sender-adress not-italic col-span-2 text-slate-300">
            <p>{invoiceInfo?.senderAddress.street}</p>
            <p>{invoiceInfo?.senderAddress.city}</p>
            <p>{invoiceInfo?.senderAddress.postCode}</p>
            <p>{invoiceInfo?.senderAddress.country}</p>
          </address>
          <div className="dates flex flex-col gap-4">
            <div className="invoice-date">
              <p className="text-slate-300">Invoice Date</p>
              <p> {dayjs(invoiceInfo?.createdAt).format("DD MMM YYYY")} </p>
            </div>
            <div className="invoice-payment-date">
              <p className="text-slate-300">Payment Due</p>
              <p> {dayjs(invoiceInfo?.paymentDue).format("DD MMM YYYY")} </p>
            </div>
          </div>
          <div className="client-info flex flex-col">
            <p className="text-slate-300">Bill to</p>
            <p>{invoiceInfo?.clientName}</p>
            <address className="not-italic text-slate-300 mt-4">
              <p> {invoiceInfo?.clientAddress.street} </p>
              <p> {invoiceInfo?.clientAddress.city} </p>
              <p> {invoiceInfo?.clientAddress.postCode} </p>
              <p> {invoiceInfo?.clientAddress.country} </p>
            </address>
          </div>
          <div className="client-email col-span-2">
            <p>Sent to</p>
            <p className="text-slate-300">{invoiceInfo?.clientEmail}</p>
          </div>
          <div className="price-container mt-4 col-span-2 rounded-lg overflow-hidden shadow-[0_0_40px_0_rgba(0,0,0,0.3)]">
            <div className="invoice-items p-6 flex flex-col gap-2 text-sm">
              {invoiceInfo?.items.map((item) => (
                <div className="invoice-item flex justify-between items-center">
                  <p>{item.name}</p>
                  <p>$ {item.price}</p>
                </div>
              ))}
            </div>
            <div className="invoice-total flex justify-between items-center bg-slate-900 p-6">
              <p>Amount Due</p>
              <span className="font-bold text-2xl">$ {invoiceInfo?.total}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
