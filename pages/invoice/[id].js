import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Form from "../../components/Form";

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
    <div className="bg-[#373b53] dark:bg-[#dfe3fa] bg-opacity-10 dark:bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#373b53] dark:text-[#dfe3fa] font-bold">
        <span className="circle h-2.5 w-2.5 bg-[#373b53] dark:bg-[#dfe3fa] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};

export default function Invoice({ invoices }) {
  const router = useRouter();
  const [invoiceId, setInvoiceId] = useState(null);
  const [invoiceInfo, setInvoiceInfo] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  useEffect(() => {
    setInvoiceId(router.query.id);
    setInvoiceInfo(invoices.find((invoice) => invoice.id === invoiceId));
  }, [invoiceId, router.isReady]); // router.isReady - hydration-error on refresh fix?

  console.log(invoiceId);
  console.log(invoiceInfo);

  useEffect(() => {
    setInvoiceInfo(invoices.find((invoice) => invoice.id === invoiceId));
  }, [isEditFormOpen]);

  // Undefined page fallback?
  if (invoiceId == null) {
    return (
      <section>
        <h2>Undefined</h2>
        {/* Back button */}
        <Link href="/" passHref={true} scroll={false}>
          <a className="block w-fit group shadow-sm p-2 rounded">
            <span className="flex gap-2 items-center cursor-pointer">
              <img src="/images/icon-arrow-left.svg" alt="" />
              <span className="group-hover:opacity-80">Go Back</span>
            </span>
          </a>
        </Link>
      </section>
    );
  }

  return (
    <main className="mt-8 px-4 max-w-3xl mx-auto">
      {/* Back button */}
      <Link href="/" passHref={true} scroll={false}>
        <a className="block w-fit group shadow-sm p-2 rounded">
          <span className="flex gap-2 items-center cursor-pointer">
            <img src="/images/icon-arrow-left.svg" alt="" />
            <span className="group-hover:opacity-80">Go Back</span>
          </span>
        </a>
      </Link>
      {/* Invoice */}
      <section className="invoice min-w-[18rem] w-full mx-auto mt-6 flex flex-col gap-5 max-w-3xl relative">
        {isEditFormOpen && (
          <Form
            title={`Edit Invoice`}
            setIsFormOpen={setIsEditFormOpen}
            invoiceId={invoiceId}
            invoiceInfo={invoiceInfo}
          />
        )}
        <div className="payment-status-container flex items-center justify-between bg-white shadow dark:bg-indigo-900 bg-opacity-40 p-4 rounded-lg sm:p-6">
          <h4>Status</h4>
          <div className="invoice-payment-status ml-4">
            {invoiceInfo?.status === "paid" ? (
              <PaidStatus status={invoiceInfo?.status} />
            ) : invoiceInfo?.status === "pending" ? (
              <PendingStatus status={invoiceInfo?.status} />
            ) : (
              <DraftStatus status={invoiceInfo?.status} />
            )}
          </div>
          <button
            className="edit-invoice-btn ml-auto bg-violet-500 px-2 py-2.5 rounded-lg w-[7rem] capitalize text-center hover:bg-opacity-80 transition duration-150 ease-in-out"
            onClick={() => setIsEditFormOpen(true)}
          >
            Edit
          </button>
        </div>
        {/* Invoice info */}
        <div className="invoice-info grid grid-cols-2 gap-4 sm:gap-8 flex-col bg-white shadow-lg dark:bg-indigo-900 bg-opacity-40 p-5 sm:p-6 rounded-lg md:grid-cols-3">
          <div className="invoice-id col-span-2">
            <p className="font-bold">
              <span className="text-indigo-400">#</span>
              {invoiceInfo?.id}
            </p>
            <p className="text-[#a6a9be]">{invoiceInfo?.description}</p>
          </div>
          <address className="sender-address not-italic text-[#a6a9be] col-span-2 md:col-span-1 md:text-right">
            <p>{invoiceInfo?.senderAddress.street}</p>
            <p>{invoiceInfo?.senderAddress.city}</p>
            <p>{invoiceInfo?.senderAddress.postCode}</p>
            <p>{invoiceInfo?.senderAddress.country}</p>
          </address>
          <div className="dates flex flex-col gap-4">
            <div className="invoice-date">
              <p className="text-[#a6a9be]">Invoice Date</p>
              <p> {dayjs(invoiceInfo?.createdAt).format("DD MMM YYYY")} </p>
            </div>
            <div className="invoice-payment-date">
              <p className="text-[#a6a9be]">Payment Due</p>
              <p> {dayjs(invoiceInfo?.paymentDue).format("DD MMM YYYY")} </p>
            </div>
          </div>
          <div className="client-info flex flex-col">
            <p className="text-[#a6a9be]">Bill to</p>
            <p>{invoiceInfo?.clientName}</p>
            <address className="client-address not-italic text-[#a6a9be] mt-4">
              <p> {invoiceInfo?.clientAddress.street} </p>
              <p> {invoiceInfo?.clientAddress.city} </p>
              <p> {invoiceInfo?.clientAddress.postCode} </p>
              <p> {invoiceInfo?.clientAddress.country} </p>
            </address>
          </div>
          <div className="client-email col-span-2 md:col-span-1">
            <p>Sent to</p>
            <p className="text-[#a6a9be]">{invoiceInfo?.clientEmail}</p>
          </div>
          <div className="price-container mt-8 sm:mt-3 col-span-2 rounded-lg overflow-hidden shadow-[0_0_15px_0_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_0_rgba(0,0,0,0.3)] md:col-span-3">
            <div className="invoice-items p-6 flex flex-col gap-4 text-sm sm:gap-6">
              <div className="div-invoice-items-header hidden sm:grid sm:grid-cols-5 mb-2 text-[#a6a9be]">
                <p className="sm:col-span-2">Item Name</p>
                <p>QTY.</p>
                <p>Price</p>
                <p className="ml-auto">Total</p>
              </div>
              {invoiceInfo?.items.map((item) => (
                <div
                  key={item.name}
                  className="invoice-item  flex justify-between items-center sm:grid sm:grid-cols-5"
                >
                  <p className="item-name sm:col-span-2">{item.name}</p>
                  <p className="item-qty hidden sm:inline-block">
                    {item.quantity}
                  </p>
                  <p className="item-price hidden sm:inline-block">
                    $ {item.price}
                  </p>
                  <p className="item-total sm:ml-auto">
                    $ {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
            <div className="invoice-total flex justify-between items-center bg-violet-500 text-white dark:bg-slate-900 p-6">
              <p>Amount Due</p>
              <span className="font-bold text-2xl">$ {invoiceInfo?.total}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
