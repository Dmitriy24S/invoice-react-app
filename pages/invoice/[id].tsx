import dayjs from "dayjs";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { AppContext } from "pages/_app";
import React, { useContext, useEffect, useRef, useState } from "react";
import Form, { calcTotal } from "../../components/Form";
import InvoiceStatus from "../../components/InvoiceStatus";
import { AppContextType, InvoiceType } from "../../types/types";

interface InvoicePropsType {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Invoice({ setIsFormOpen }: InvoicePropsType) {
  const { invoices, setInvoices } = useContext(AppContext) as AppContextType;

  const router = useRouter();
  const [invoiceId, setInvoiceId] = useState<string | string[]>();
  const [invoiceInfo, setInvoiceInfo] = useState<InvoiceType>();
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] =
    useState<boolean>(false);
  const modal = useRef<any>(null); // modal for confirm invoice deletion warning message window modal

  useEffect(() => {
    setInvoiceId(router.query.id);
    setInvoiceInfo(invoices.find((invoice) => invoice.id === invoiceId));
  }, [invoiceId, router.isReady]); // router.isReady - hydration-error on refresh fix?

  console.log(invoiceId, "invoiceId");
  console.log(invoiceInfo, "invoiceInfo");

  // Update invoice info on close of edit form window
  useEffect(() => {
    setInvoiceInfo(invoices.find((invoice) => invoice.id === invoiceId));
  }, [isEditFormOpen]);

  // Close confirm delete modal on click outside dropdown
  function handleClickOutside(e: any) {
    // ? any type ?
    if (modal.current && !modal.current.contains(e.target)) {
      setIsDeleteConfirmationModalOpen(false);
    }
  }
  // Close confirm delete modal on click outside dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDeleteConfirmationModalOpen]);

  // Delete invoice
  const handleDeleteInvoice = () => {
    if (invoiceInfo) {
      const updatedInvoices = invoices.filter(
        (invoice) => invoice.id !== invoiceInfo.id // find selected invoice to delete, filter array, remove it from list
      );
      setInvoices(updatedInvoices); // update invoice with list without the deleted invoice
      Router.push("/"); // redirect back to the list
      // setIsDeleteConfirmationModalOpen(false); // close modal // ? unnecessary?
    }
  };

  // Trap focus in open delete confirmation modal
  const trapFocusInModal = (e: any) => {
    if (e.key !== "Tab") return;

    const focusableModalElements = modal.current.querySelectorAll(
      "a[href], button:not([disabled]), textarea, input, select"
    );

    const firstElement = focusableModalElements[0];
    const lastElement = focusableModalElements[focusableModalElements.length - 1];

    // if going forward by pressing tab and lastElement is active shift focus to first focusable element
    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      return e.preventDefault();
    }
    // if going backward by pressing tab and firstElement is active shift focus to last focusable element
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  };

  // Listen for ESC key to close delete confirmation modal
  useEffect(() => {
    const closeCartDrawer = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDeleteConfirmationModalOpen(false);
      }
    };
    window.addEventListener("keydown", closeCartDrawer);
    return () => {
      window.removeEventListener("keydown", closeCartDrawer);
    };
  }, [isDeleteConfirmationModalOpen]);

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
      {/* Invoice container */}
      <section className="invoice min-w-[18rem] w-full mx-auto mt-6 flex flex-col gap-5 max-w-3xl relative">
        {/* Edit invoice form window */}
        {isEditFormOpen && (
          <Form
            title={`Edit Invoice`}
            setIsFormOpen={setIsEditFormOpen}
            invoiceId={invoiceId}
            invoiceInfo={invoiceInfo}
          />
        )}
        {/* Delete invoice modal confirmation window */}
        {isDeleteConfirmationModalOpen && (
          <>
            <div
              className="backdrop z-10 inset-0 fixed bg-black bg-opacity-60"
              onClick={() => setIsFormOpen(false)}
            ></div>
            <section
              ref={modal}
              onKeyDown={trapFocusInModal}
              className="absolute z-10 mx-auto left-0 right-0 dark:bg-[#181a2b] bg-[#f7f7f7] rounded-lg max-w-[26rem] flex flex-col gap-4 justify-evenly mt-8 p-8"
            >
              <h3 className="text-xl font-bold">Confirm Deletion</h3>
              <p className="opacity-80">
                Are you sure you want to delete this invoice?
                <br />
                This action cannot be undone.
              </p>
              <div className="modal-buttons-container flex gap-3 items-center justify-end mt-3">
                <button
                  className="text-white px-4 py-2.5 rounded-lg capitalize text-center bg-violet-800 hover:bg-violet-700 transition duration-150 ease-in-out"
                  onClick={() => setIsDeleteConfirmationModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="text-white px-4 py-2.5 rounded-lg capitalize text-center bg-red-500 hover:bg-red-600 transition duration-150 ease-in-out"
                  onClick={handleDeleteInvoice}
                >
                  Delete
                </button>
              </div>
            </section>
          </>
        )}
        {/* Invoice info */}
        <div className="payment-status-container grid grid-cols-2 gap-3 sm:flex items-center justify-between bg-white shadow dark:bg-indigo-900 bg-opacity-40 rounded-lg p-4 sm:p-6 ">
          <h4>Status</h4>
          <InvoiceStatus invoiceInfo={invoiceInfo} />
          <div className="invoice-btn-container flex gap-2 sm:ml-auto">
            <button
              className="edit-invoice-btn text-white bg-violet-500 px-2 py-2.5 rounded-lg w-[7rem] capitalize text-center hover:bg-opacity-80 transition duration-150 ease-in-out"
              onClick={() => setIsEditFormOpen(true)}
            >
              Edit
            </button>
            <button
              className="edit-invoice-btn text-white bg-red-500 px-2 py-2.5 rounded-lg w-[7rem] capitalize text-center hover:bg-red-600 transition duration-150 ease-in-out"
              onClick={() => setIsDeleteConfirmationModalOpen(true)}
            >
              Delete
            </button>
          </div>
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
              <p> {invoiceInfo?.clientAddress?.street} </p>
              <p> {invoiceInfo?.clientAddress?.city} </p>
              <p> {invoiceInfo?.clientAddress?.postCode} </p>
              <p> {invoiceInfo?.clientAddress?.country} </p>
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
                  className="invoice-item flex justify-between items-center sm:grid sm:grid-cols-5"
                >
                  <p className="item-name sm:col-span-2">{item.name}</p>
                  <p className="item-qty hidden sm:inline-block">{item.quantity}</p>
                  <p className="item-price hidden sm:inline-block">$ {item.price}</p>
                  <p className="item-total sm:ml-auto">
                    $ {calcTotal(item)}
                    {/* Calculate total with 2 trailing zeroes */}
                    {/* item.price * item.quantity */}
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
