import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { AppContextType, FormDataType, InvoiceItemType, InvoiceType } from "types/types";
import * as yup from "yup";
import { AppContext } from "../pages/_app";

// Calculate total with 2 trailing zeroes
// const calcTotal = (item: InvoiceItemType) => {
export const calcTotal = (item: any) => {
  // ? any type ? watchFields[index] string / number type
  return Number((Number(item.quantity) * Number(item.price)).toFixed(2));
};

interface FormTypes {
  senderStreet: string;
  senderCity: string;
  senderPostCode: string;
  senderCountry: string;
  clientStreet: string;
  clientCity: string;
  clientPostCode: string;
  clientCountry: string;
  clientFullname: string;
  clientEmail: string;
  invoiceDate: string;
  // paymentTerms: string;
  paymentTerms: number;
  projectDescription: string;
  items: {
    name: string;
    // quantity: string ;
    quantity: string | number; // ? type fix
    // price: string;
    price: string | number; // ? type fix
    total: number;
  }[];
}

const formSchema = yup.object({
  senderStreet: yup
    .string()
    .trim()
    .min(4, "Street name must be at least 4 characters")
    .max(20, "Street name must be at most 20 characters")
    // .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  senderCity: yup
    .string()
    .trim()
    .min(4, "City name must be at least 4 characters")
    .max(20, "City name must be at most 20 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  senderPostCode: yup
    .string()
    .trim()
    .min(4, "Post code must be at least 4 characters")
    .max(20, "Post code must be at most 20 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  senderCountry: yup
    .string()
    .trim()
    .min(4, "Country name must be at least 4 characters")
    .max(20, "Country name must be at most 20 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientStreet: yup
    .string()
    .trim()
    .min(4, "Street name must be at least 4 characters")
    .max(20, "Street name must be at most 20 characters")
    .required(),
  clientCity: yup
    .string()
    .trim()
    .min(4, "City name must be at least 4 characters")
    .max(20, "City name must be at most 20 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientPostCode: yup
    .string()
    .trim()
    .min(4, "Post code must be at least 4 characters")
    .max(20, "Post code must be at most 20 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientCountry: yup
    .string()
    .trim()
    .min(4, "Country name must be at least 4 characters")
    .max(20, "Country name must be at most 20 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientFullname: yup
    .string()
    .trim()
    .min(4, "Name must be at least 4 characters")
    .max(40, "Name must be at most 40 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientEmail: yup.string().email().required(),
  invoiceDate: yup.string().trim().required(),
  paymentTerms: yup.string().trim().required("Payment terms is a required field"),
  projectDescription: yup
    .string()
    .trim()
    .min(4, "Project description must be at least 4 characters")
    .required("Project description terms is a required field"),
  items: yup
    .array()
    .of(
      yup.object().shape({
        name: yup
          .string()
          .trim()
          .min(4, "Item name must be at least 4 characters")
          .max(20, "Item name must be at most 20 characters")
          .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
          .required(),
        quantity: yup
          .number()
          .typeError("Must be a number")
          .min(1, "Quantity name must be at least 1")
          .max(50, "Quantity name must be at most 14")
          .required(),
        price: yup
          .number()
          .typeError("Must be a number")
          .min(100, "Price must be at least 100")
          .max(999_999, "Price must be at most 999999")
          .required(),
      })
      // .minLength(1, "Minimum 1 item") // no
      // .required() // no
    )
    .min(1, "Cannot be empty") // ? works
    .required(),
});

interface FormPropsType {
  title: string;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // New invoice form / Edit exisiting invoice = fill form with:
  invoiceId?: string | string[] | null;
  invoiceInfo?: InvoiceType | undefined;
}

const Form = ({
  title,
  setIsFormOpen,
  invoiceId = null,
  invoiceInfo = undefined,
}: FormPropsType) => {
  // ? any type ?
  const { invoices, setInvoices } = useContext(AppContext) as AppContextType;
  // console.log(invoiceInfo);

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    defaultValues: {
      // items: [{ name: "default Value" }]
      items: [{ name: "", quantity: 1, price: "" }],
      // show one default empty field for items
    },
    resolver: yupResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({ name: "items", control }); // ability to add/remove items to invoice form
  const watchFields = watch("items"); // target specific field by their names - invoice item info
  // console.log(watchFields); // track input changes to calc item * quantity and show total inside form

  useEffect(() => {
    if (invoiceInfo) {
      reset({
        senderStreet: invoiceInfo.senderAddress.street,
        senderCity: invoiceInfo.senderAddress.city,
        senderPostCode: invoiceInfo.senderAddress.postCode,
        senderCountry: invoiceInfo.senderAddress.country,
        clientStreet: invoiceInfo?.clientAddress?.street,
        clientCity: invoiceInfo?.clientAddress?.city,
        clientPostCode: invoiceInfo?.clientAddress?.postCode,
        clientCountry: invoiceInfo?.clientAddress?.country,
        clientFullname: invoiceInfo.clientName,
        clientEmail: invoiceInfo.clientEmail,
        invoiceDate: invoiceInfo.paymentDue,
        paymentTerms: invoiceInfo.paymentTerms,
        projectDescription: invoiceInfo.description,
        // items: Array(1)
        // 0:
        // name: "Brand Guidelines"
        // price: 1800.9
        // quantity: 1
        // total: 1800.9
      });
      invoiceInfo.items.forEach((item: InvoiceItemType) => {
        return append(
          {
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          },
          { shouldFocus: false } // prevent focus on input item field on edit form open
        );
      });
    }
  }, [invoiceInfo]);

  const formDropdownOptions = [
    { name: "Net 1 Day", value: 1 },
    { name: "Net 7 Days", value: 7 },
    { name: "Net 14 Days", value: 14 },
    { name: "Net 30 Days", value: 30 },
  ];

  // Handle submit new invoice
  // const onSubmit = (data: any, e: any, status = "pending") => {
  // const onSubmit = (data: InvoiceType, e: any, status = "pending") => {
  const onSubmit = (data: FormDataType, status = "pending") => {
    // ? any type ?
    // console.log(data);
    // items: Array(1), projectDescription: 'sffsdfsdf', paymentTerms: '30', invoiceDate: '2022-07-17', clientEmail: 'text@gmail.com', …}
    // clientCity: "text"
    // clientCountry: "text"
    // clientEmail: "text@gmail.com"
    // clientFullname: "text"
    // clientPostCode: "text"
    // clientStreet: "text"
    // invoiceDate: "2022-07-17"
    // items: [{…}]
    // paymentTerms: "30"
    // projectDescription: "text"
    // senderCity: "text"
    // senderCountry: "text"
    // senderPostCode: "text"
    // senderStreet: "text"

    // Invoice created at date:
    // let today: Date | string = new Date(); // ? any type ?
    let today: any = new Date(); // ? any type ?
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd; // "2022-07-08"

    // Add 'total:' property - calc item price * item quantity
    const itemsWithUpdatedItemTotalPrice = data.items.map((item: InvoiceItemType) => {
      // console.log(item, "item");
      // {price: 200, quantity: 1, name: 'text'}
      // name: "text"
      // price: 200
      // quantity: 1
      return {
        ...item,
        total: calcTotal(item), // add 'total:' property - calc item price * item quantity
      };
    });

    // Add overall 'total:' property - calc totals of ALL items (for example: if there is more of them than 1 in items array)
    const totalAllItemsPrice = itemsWithUpdatedItemTotalPrice.reduce((prev: any, curr: any) => {
      // ? any type ?
      return prev + curr.total;
    }, 0);

    // If invoice exist - update it with new data, else create new invoice and add it to the list:
    // const findInvoice = invoices.find((invoice) => invoice.id === data.id);
    const findInvoice = invoices.find((invoice: InvoiceType) => invoice.id === invoiceInfo?.id);
    // If invoice exist - update it with new data
    if (findInvoice) {
      // const updatedInvoices: InvoiceType[] = invoices.map((item: InvoiceType) => {
      const updatedInvoices = invoices.map((item: InvoiceType) => {
        if (item.id === invoiceInfo?.id) {
          return {
            ...item,
            createdAt: today,
            paymentDue: data.invoiceDate,
            description: data.projectDescription,
            paymentTerms: data.paymentTerms,
            clientName: data.clientFullname,
            clientEmail: data.clientEmail,
            senderAddress: {
              street: data.senderStreet,
              city: data.senderCity,
              // postCode: data.senderPostoCode, // typo mistake missed? no warning, Fixed: add types FormDataType = now shows warning when typo
              postCode: data.senderPostCode,
              country: data.senderCountry,
            },
            clientAddress: {
              street: data.clientStreet,
              city: data.clientCity,
              postCode: data.clientPostCode,
              country: data.clientCountry,
            },
            items: itemsWithUpdatedItemTotalPrice,
            total: totalAllItemsPrice,
          };
        } else return item;
      });
      setInvoices(updatedInvoices);
      // Else - create new invoice and add it to the list:
    } else {
      setInvoices((prevInvoices) => {
        return [
          ...prevInvoices,
          {
            id: Math.floor(Math.random() * 99999) + "a",
            createdAt: today,
            paymentDue: data.invoiceDate,
            description: data.projectDescription,
            paymentTerms: data.paymentTerms,
            clientName: data.clientFullname,
            clientEmail: data.clientEmail,
            status: status,
            senderAddress: {
              street: data.senderStreet,
              city: data.senderCity,
              // postCode: data.senderPostoCode, // error typo no warning, fixed: now shows when typo mistake
              postCode: data.senderPostCode,
              country: data.senderCountry,
            },
            clientAddress: {
              street: data.clientStreet,
              city: data.clientCity,
              postCode: data.clientPostCode,
              country: data.clientCountry,
            },
            items: itemsWithUpdatedItemTotalPrice,
            total: totalAllItemsPrice,
          },
        ];
      });
    }

    // close new invoice form window
    setIsFormOpen(false);
  };

  // console.log(errors);

  // Disable main scroll when form is open v1
  useLayoutEffect((): any => {
    // ? fix type error, add any?, return string?
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // Disable main scroll when form is open v2
  // const useLockBodyScroll = () => {
  //   useLayoutEffect((): any => {
  //     // ? fix type error, add any?, return string?
  //     // Get original body overflow
  //     const originalStyle = window.getComputedStyle(document.body).overflow;
  //     // Prevent scrolling on mount
  //     document.body.style.overflow = "hidden";
  //     // Re-enable scrolling when component unmounts
  //     return () => (document.body.style.overflow = originalStyle);
  //   }, []); // Empty array ensures effect is only run on mount and unmount
  // };
  // Call hook to lock body scroll
  // useLockBodyScroll();

  return (
    <>
      <div
        className="backdrop z-10 inset-0 fixed bg-black bg-opacity-80"
        onClick={() => setIsFormOpen(false)}
      ></div>
      <form
        className="form-container dark:bg-[#141624] bg-[#f7f7f7] shadow rounded-lg md:gap-6 md:py-5 inset-0 z-10 max-w-2xl mx-auto w-full sm:w-11/12 flex flex-col justify-between fixed h-full md:h-[45rem] md:mt-8"
        onSubmit={handleSubmit((data) => onSubmit(data, "pending"))}
      >
        {/* Form */}
        <h2 className="text-2xl font-bold py-4 px-5">
          {title}{" "}
          {invoiceId && (
            <span>
              <span className="text-violet-700">#</span>
              <span className="text-slate-300">{invoiceId}</span>
            </span>
          )}
        </h2>

        <section className="form flex flex-col gap-16 h-[30rem] shadow-sm py-4 px-5 overscroll-none overflow-y-scroll">
          {/* Bill from */}
          <fieldset className="form-bill-from-container grid grid-cols-2 gap-4">
            <legend className="mb-4 text-violet-500 font-semibold">Bill From</legend>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="sender-street" className="form-label">
                Street Address
              </label>
              <input
                type="text"
                id="sender-street"
                className="form-input"
                {...register("senderStreet")}
                // autoFocus
              />
              {errors.senderStreet && (
                <p className="form-message mb-5 mt-1">{errors.senderStreet?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="sender-city" className="form-label">
                City
              </label>
              <input
                type="text"
                id="sender-city"
                className="form-input"
                {...register("senderCity")}
              />
              {errors.senderCity && (
                <p className="form-message mb-5 mt-1">{errors.senderCity?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="sender-postcode" className="form-label">
                Post Code
              </label>
              <input
                type="text"
                id="sender-postcode"
                className="form-input"
                {...register("senderPostCode")}
              />
              {errors.senderPostCode && (
                <p className="form-message mb-5 mt-1">{errors.senderPostCode?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="sender-country" className="form-label">
                Country
              </label>
              <input
                type="text"
                id="sender-country"
                className="form-input"
                {...register("senderCountry")}
              />
              {errors.senderCountry && (
                <p className="form-message mt-1">{errors.senderCountry?.message}</p>
              )}
            </div>
          </fieldset>
          {/* Bill to */}
          <fieldset className="form-bill-to-container grid grid-cols-2 gap-4">
            <legend className="mb-4 text-violet-500 font-semibold">Bill To</legend>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-fullname" className="form-label">
                {/* Client's Name */}
                Client&apos;s Name
              </label>
              <input
                type="text"
                id="client-fullname"
                className="form-input"
                {...register("clientFullname")}
              />
              {errors.clientFullname && (
                <p className="form-message mb-5 mt-1">{errors.clientFullname?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-email" className="form-label">
                {/* Client's Email */}
                Client&apos;s Email
              </label>
              <input
                type="text"
                id="client-email"
                className="form-input"
                {...register("clientEmail")}
              />
              {errors.clientEmail && (
                <p className="form-message mb-5 mt-1">{errors.clientEmail?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-street" className="form-label">
                Street Address
              </label>
              <input
                type="text"
                id="client-street"
                className="form-input"
                {...register("clientStreet")}
              />
              {errors.clientStreet && (
                <p className="form-message mb-5 mt-1">{errors.clientStreet?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="client-city" className="form-label">
                City
              </label>
              <input
                type="text"
                id="client-city"
                className="form-input"
                {...register("clientCity")}
              />
              {errors.clientCity && (
                <p className="form-message mb-5 mt-1">{errors.clientCity?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="client-postcode" className="form-label">
                Post Code
              </label>
              <input
                type="text"
                id="client-postcode"
                className="form-input"
                {...register("clientPostCode")}
              />
              {errors.clientPostCode && (
                <p className="form-message mb-5 mt-1">{errors.clientPostCode?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-country" className="form-label">
                Country
              </label>
              <input
                type="text"
                id="client-country"
                className="form-input"
                {...register("clientCountry")}
              />
              {errors.clientCountry && (
                <p className="form-message mb-5 mt-1">{errors.clientCountry?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="invoice-date" className="form-label">
                Invoice Date
              </label>
              <input
                type="date"
                id="invoice-date"
                className="form-input h-[48px]"
                {...register("invoiceDate")}
              />
              {errors.invoiceDate && (
                <p className="form-message mb-5 mt-1">{errors.invoiceDate?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="payment-terms" className="form-label">
                Payment Terms
              </label>
              <select
                defaultValue=""
                id="payment-terms"
                className="form-input"
                {...register("paymentTerms")}
              >
                <option value="" disabled hidden>
                  Select an Option
                </option>
                {formDropdownOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  );
                })}
              </select>
              {errors.paymentTerms && (
                <p className="form-message mb-5 mt-1">{errors.paymentTerms?.message}</p>
              )}
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="project-description" className="form-label">
                Project Description
              </label>
              <input
                type="text"
                id="project-description"
                className="form-input"
                {...register("projectDescription")}
              />
              {errors.projectDescription && (
                <p className="form-message mb-5 mt-1">{errors.projectDescription?.message}</p>
              )}
            </div>
          </fieldset>
          <div className="form-item-list-container">
            <h4 className="mb-4 text-violet-500 font-semibold">Item List</h4>
            {/* Item List */}
            {fields?.map((_item, index) => {
              const fieldName = `items[${index}]`;
              return (
                <fieldset className="grid grid-cols-5 gap-4" name={fieldName} key={fieldName}>
                  <div className="input-wrapper flex flex-col col-span-5">
                    <label htmlFor="item-name" className="form-label">
                      Item Name
                    </label>
                    <input
                      type="text"
                      id="item-name"
                      className="item-name form-input"
                      {...register(`items.${index}.name`)}
                      name={`items.${index}.name`}
                    />
                    {/* {errors.itemName && ( */}
                    {errors.items?.[index]?.name && (
                      <p className="form-message mb-5 mt-1">
                        {errors.items?.[index]?.name?.message}
                      </p>
                    )}
                  </div>
                  <div className="input-wrapper flex flex-col col-span-1">
                    <label htmlFor="item-qty" className="form-label">
                      Qty.
                    </label>
                    <input
                      type="text"
                      id="item-qty"
                      className="item-qty form-input"
                      {...register(`items.${index}.quantity`)}
                      name={`items.${index}.quantity`}
                    />
                    {errors.items?.[index]?.quantity && (
                      <p className="form-message mb-5 mt-1">
                        {errors.items?.[index]?.quantity?.message}
                      </p>
                    )}
                  </div>
                  <div className="input-wrapper flex flex-col col-span-2 mb-7">
                    <label htmlFor="item-price" className="form-label">
                      Price
                    </label>
                    <input
                      type="text"
                      id="item-price"
                      className="item-price form-input"
                      {...register(`items.${index}.price`)}
                      name={`items.${index}.price`}
                    />
                    {errors.items?.[index]?.price && (
                      <p className="form-message mb-5 mt-1">
                        {errors.items?.[index]?.price?.message}
                      </p>
                    )}
                  </div>
                  <div className="item-total col-span-1 flex flex-col items-start justify-between h-[78px]">
                    <div className="text-left">Total</div>
                    <span className="px-1 py-3 text-left">
                      {/* {Number(watchFields[index].price) * Number(watchFields[index].quantity)} */}
                      {calcTotal(watchFields[index])}
                    </span>
                  </div>
                  <div className="delete-btn-container flex flex-col items-center justify-between h-[78px]">
                    <button
                      type="button"
                      className="col-span-1 h-[48px] mt-auto"
                      aria-label="delete"
                      onClick={() => remove(index)}
                    >
                      <Image src="/images/icon-delete.svg" width="13" height="16" alt="" />
                    </button>
                  </div>
                </fieldset>
              );
            })}
            {/* Show warning/error if not added item to invoice: */}
            {errors.items && errors.items?.message && (
              <p className="form-message mb-1 mt-1">{errors.items?.message}</p>
            )}
          </div>
          {/* Add new item button */}
          <button
            type="button"
            className="form-btn bg-slate-600 hover:bg-slate-500 transition-colors text-white col-span-5 ease-out "
            onClick={() => {
              append({ name: "", quantity: "", price: "" });
            }}
          >
            + Add New Item
          </button>
        </section>
        {/* Form buttons */}
        <section className="form-buttons flex gap-2 py-8 px-5 mt-auto">
          <button
            type="button"
            className="form-btn bg-slate-500 hover:bg-slate-600 transition-colors text-white ease-out"
            onClick={() => setIsFormOpen(false)}
          >
            Discard
          </button>
          <button
            type="button"
            className="form-btn ml-auto bg-slate-500 hover:bg-slate-600 transition-colors text-white ease-out"
            onClick={handleSubmit((data) => onSubmit(data, "draft"))}
          >
            Save as Draft
          </button>
          <button
            className="form-btn bg-violet-500 hover:bg-[#9c71fd] transition-colors text-white ease-out"
            type="submit"
          >
            Save & Send
          </button>
        </section>
      </form>
    </>
  );
};

export default Form;
