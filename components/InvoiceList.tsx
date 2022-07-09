import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Form from "./Form";

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
    <div className=" bg-[#373b53] dark:bg-[#dfe3fa] bg-opacity-10 dark:bg-opacity-10 rounded-lg w-[7rem] capitalize text-center">
      <p className="px-2 py-2.5 text-[#373b53] dark:text-[#dfe3fa] font-bold">
        <span className="circle h-2.5 w-2.5  bg-[#373b53] dark:bg-[#dfe3fa] inline-block rounded-full mr-2"></span>
        {status}
      </p>
    </div>
  );
};

const InvoiceList = ({ invoices }: any) => {
  const [filteredInvoices, setFilteredInvoices] = useState<any>(null);
  const [selectedFilter, setSelectedFilter] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // close dropdown on click outside dropdown
  function handleClickOutside(e: any) {
    if (dropdown.current && !dropdown.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  }
  // close dropdown on click outside dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Disable main scroll when form is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFormOpen]);

  const [invoiceListFilterOptions, setInvoiceListFilterOptions] = useState([
    { id: 0, name: "all", checked: true },
    { id: 1, name: "paid", checked: false },
    { id: 2, name: "pending", checked: false },
    { id: 3, name: "draft", checked: false },
  ]);

  // Handle filter option click/select, update filter options array checked status, set selected filter option
  const handleSelect = (filterName: string) => {
    const updatedListFilterOptions = invoiceListFilterOptions.map(
      (filterOption) => {
        if (filterOption.name === filterName) {
          setSelectedFilter(filterOption.checked ? null : filterOption.name); // if it's new filter option set it as new selected filter state value, otherwise null
          return { ...filterOption, checked: !filterOption.checked }; // update filter options array checked status
        } else {
          return { ...filterOption, checked: false }; // false checked status
        }
      }
    );
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
      {isFormOpen && (
        <Form title="Create Invoice" setIsFormOpen={setIsFormOpen} />
      )}
      <div className="list max-w-3xl mx-auto">
        <div className="list-header-content max-w-5xl mx-auto flex justify-between">
          <div className="list-header-left">
            <h2 className="text-xl sm:text-2xl font-bold">Invoices</h2>
            <p className="text-sm sm:text-base opacity-80 mt-1">
              {invoices?.length} invoices
            </p>
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
                <Image src="/images/icon-plus.svg" width={11} height={11} />
              </div>
              New
              <span className="hidden sm:inline-block sm:ml-1">{` invoice`}</span>
            </button>
          </div>
        </div>
        {/* Invoice List */}
        <div className="list flex flex-col gap-5 justify-center items-center mt-8 md:items-stretch">
          {filteredInvoices?.map((item: any) => (
            // Invoice preview
            <Link
              href={`/invoice/${item.id}`}
              passHref={true}
              scroll={false}
              key={item.id}
            >
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
                    {item.status === "paid" ? (
                      <PaidStatus status={item.status} />
                    ) : item.status === "pending" ? (
                      <PendingStatus status={item.status} />
                    ) : (
                      <DraftStatus status={item.status} />
                    )}
                    <div className="arrow-right hidden order-6 sm:flex sm:items-center">
                      <Image
                        src="/images/icon-arrow-right.svg"
                        width="7"
                        height="10"
                      />
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
