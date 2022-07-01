import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

const InvoiceList = ({ invoices }: any) => {
  const [filteredInvoices, setFilteredInvoices] = useState<any>(null);
  const [selectedFilter, setSelectedFilter] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

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
    <section className="mt-8 px-4">
      <div className="list-header">
        <div className="list-header-content max-w-5xl mx-auto flex justify-between">
          <div className="list-header-left">
            <h2 className="text-2xl font-bold">Invoices</h2>
            <p className="opacity-80 mt-1">{invoices?.length} invoices</p>
          </div>
          <div className="list-header-right flex items-center gap-5">
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
                <div className="dropdown absolute top-12 min-w-[10rem] bg-[rgb(29,35,74)] flex flex-col gap-2 p-4 left-1/2 -translate-x-2/4 rounded-lg z-50 shadow-lg">
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
            <button className="new-invoice-btn flex gap-2 sitems-center bg-violet-500 px-4 py-2.5 rounded-full font-bold">
              <div className="plus-icon-container bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <Image src="/images/icon-plus.svg" width={11} height={11} />
              </div>
              New
            </button>
          </div>
        </div>
        <div className="list flex flex-col gap-5 justify-center items-center mt-8">
          {filteredInvoices?.map((item: any) => (
            // Invoice preview
            <Link
              href={`/invoice/${item.id}`}
              passHref={true}
              scroll={false}
              key={item.id}
            >
              <a>
                <article className="item min-w-[18rem] w-full max-w-[20rem] bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg cursor-pointer">
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
