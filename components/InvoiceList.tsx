import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../pages/_app";
import { AppContextType, InvoiceType } from "../types/types";
import Form from "./Form";
import InvoiceStatus from "./InvoiceStatus";

const InvoiceList = () => {
  const { invoices } = useContext(AppContext) as AppContextType;
  const [filteredInvoices, setFilteredInvoices] = useState<InvoiceType[] | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const dropdown = useRef<HTMLDivElement>(null);

  // Filter options in dropdown
  const [invoiceListFilterOptions, setInvoiceListFilterOptions] = useState([
    { id: 0, name: "all", checked: true },
    { id: 1, name: "paid", checked: false },
    { id: 2, name: "pending", checked: false },
    { id: 3, name: "draft", checked: false },
  ]);

  // Close dropdown on click outside dropdown
  function handleClickOutside(e: any) {
    // ? any type
    if (dropdown.current && !dropdown.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  }
  // Close dropdown on click outside dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Disable main scroll when form is open v0.1
  // useEffect(() => {
  //   if (isFormOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [isFormOpen]);

  // Handle filter option click/select, update filter options array checked status, set selected filter option
  const handleSelect = (filterName: string) => {
    const updatedListFilterOptions = invoiceListFilterOptions.map((filterOption) => {
      if (filterOption.name === filterName) {
        setSelectedFilter(filterOption.checked ? null : filterOption.name); // if it's new filter option set it as new selected filter state value, otherwise null
        return { ...filterOption, checked: !filterOption.checked }; // update filter options array checked status
      } else {
        return { ...filterOption, checked: false }; // false checked status
      }
    });
    setInvoiceListFilterOptions(updatedListFilterOptions);
  };

  // Update and filter the invoices if there is new selected filter option
  useEffect(() => {
    setFilteredInvoices(invoices); // initial set to all invoices
    if (invoices && selectedFilter) {
      if (selectedFilter === "all") {
        setFilteredInvoices(invoices); // if select all then return and show all invoices
      } else {
        setFilteredInvoices(
          invoices.filter((invoice) => invoice.status === selectedFilter) // filter invoices that match selected filter type
        );
      }
    }
  }, [selectedFilter, invoices]);

  return (
    <section className="mt-8 px-4 relative">
      {isFormOpen && <Form title="Create Invoice" setIsFormOpen={setIsFormOpen} />}
      <div className="list max-w-3xl mx-auto">
        <div className="list-header-content max-w-5xl mx-auto flex justify-between">
          <div className="list-header-left">
            <h2 className="text-xl sm:text-2xl font-bold">Invoices</h2>
            <p className="text-sm sm:text-base opacity-80 mt-1">{invoices?.length} invoices</p>
          </div>
          <div className="list-header-right flex items-center gap-2 sm:gap-5">
            <div className="dropdown-container relative" ref={dropdown}>
              <button
                className="font-bold flex gap-2 items-center"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Filter{" "}
                <Image
                  src="/images/icon-arrow-down.svg"
                  className={`transition-transform
                  ${isDropdownOpen && "-rotate-180"}`}
                  width="11"
                  height="7"
                  alt=""
                />
              </button>
              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="dropdown absolute top-12 min-w-[10rem] dark:bg-[rgb(29,35,74)] flex flex-col gap-2 p-4 left-1/2 -translate-x-2/4 rounded-lg z-50 shadow-[0_0_15px_0_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_0_rgba(0,0,0,0.3)] bg-white">
                  {invoiceListFilterOptions.map((filterOption) => (
                    <label
                      htmlFor={filterOption.name}
                      className="flex gap-2 items-center cursor-pointer capitalize"
                      key={filterOption.id}
                    >
                      <input
                        type="radio"
                        name="radio"
                        id={filterOption.name}
                        checked={filterOption.checked}
                        onChange={() => handleSelect(filterOption.name)}
                      />
                      {filterOption.name}
                    </label>
                  ))}
                </div>
              )}
            </div>
            <button
              className="new-invoice-btn flex sitems-center bg-violet-500 px-4 py-2.5 rounded-full font-semibold hover:bg-[#9c71fd] transition-colors text-white"
              onClick={() => setIsFormOpen(true)}
            >
              <div className="plus-icon-container bg-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                <Image src="/images/icon-plus.svg" alt="" width={11} height={11} />
              </div>
              New
              <span className="hidden sm:inline-block sm:ml-1">{` invoice`}</span>
            </button>
          </div>
        </div>
        {/* Invoice List */}
        <div className="list flex flex-col gap-5 justify-center items-center mt-8 md:items-stretch">
          {filteredInvoices?.map((item: InvoiceType) => (
            // Invoice preview
            <Link href={`/invoice/${item.id}`} passHref={true} scroll={false} key={item.id}>
              <a className=" min-w-[18rem] w-full max-w-[30rem] mx-auto md:max-w-full md:w-full">
                <article className="item dark:bg-indigo-900 bg-white shadow bg-opacity-40 p-4 px-5 rounded-lg cursor-pointer grid grid-cols-2 items-end  md:flex md:items-center md:gap-6 md:py-5 border border-transparent hover:border-violet-500 transition-colors ease-out duration-100">
                  <p className="item-id font-bold inline-block md:order-1">
                    <span className="text-indigo-400">#</span>
                    {item.id}
                  </p>
                  <p className="item-clientname opacity-90 inline-block ml-auto md:ml-0 md:order-3">
                    {item.clientName}
                  </p>
                  <p className="item-due opacity-90 text-sm mt-4 md:mt-0 md:order-2">
                    Due {dayjs(item.paymentDue).format("DD MMM YYYY")}
                  </p>
                  <p className="item-total font-bold col-start-1 row-start-3 md:order-4 md:ml-auto">
                    ${" "}
                    {item.total.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <div className="item-payment-status ml-auto col-start-2 row-start-2 row-end-4 mt-2 md:order-5 md:mt-0 md:ml-0 flex gap-4">
                    {/* <InvoiceStatus status={item.status} /> */}
                    <InvoiceStatus invoiceInfo={item} />
                    <div className="arrow-right hidden order-6 md:flex md:items-center">
                      <Image src="/images/icon-arrow-right.svg" alt="" width="7" height="10" />
                    </div>
                  </div>
                </article>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvoiceList;
