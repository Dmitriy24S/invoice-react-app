import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface FormTypes {
  senderStreet: string;
  senderCity: string;
  senderPostcode: string;
  senderCountry: string;
  clientFullname: string;
  clientEmail: string;
  clientStreet: string;
  clientCity: string;
  clientPostcode: string;
  clientCountry: string;
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
}

const formSchema = yup.object({
  senderStreet: yup
    .string()
    .trim()
    .min(4, "Street name must be at least 4 characters")
    .max(14, "Street name must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  senderCity: yup
    .string()
    .trim()
    .min(4, "City name must be at least 4 characters")
    .max(14, "City name must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  senderPostcode: yup
    .string()
    .trim()
    .min(4, "Post code must be at least 4 characters")
    .max(14, "Post code must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  senderCountry: yup
    .string()
    .trim()
    .min(4, "Country name must be at least 4 characters")
    .max(14, "Country name must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientFullname: yup
    .string()
    .trim()
    .min(4, "Name must be at least 4 characters")
    .max(12, "Name must be at most 12 characters")
    .matches(/^[a-zA-Z0-9]+$/, "only letters and numbers")
    .required(),
  clientEmail: yup.string().email().required(),
  clientStreet: yup
    .string()
    .trim()
    .min(4, "Street name must be at least 4 characters")
    .max(14, "Street name must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientCity: yup
    .string()
    .trim()
    .min(4, "City name must be at least 4 characters")
    .max(14, "City name must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientPostcode: yup
    .string()
    .trim()
    .min(4, "Post code must be at least 4 characters")
    .max(14, "Post code must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  clientCountry: yup
    .string()
    .trim()
    .min(4, "Country name must be at least 4 characters")
    .max(14, "Country name must be at most 14 characters")
    .matches(/^[a-zA-Z0-9 ]+$/, "only letters and numbers")
    .required(),
  invoiceDate: yup.string().trim().required(),
  paymentTerms: yup
    .string()
    .trim()
    .required("Payment terms is a required field"),
  projectDescription: yup
    .string()
    .trim()
    .min(4, "Project description must be at least 4 characters")
    .required("Project description terms is a required field"),
});

const Form = ({ title, setIsFormOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(formSchema),
  });

  const formDropdownOptions = [
    { name: "Net 1 Day", value: 1 },
    { name: "Net 7 Days", value: 7 },
    { name: "Net 14 Days", value: 14 },
    { name: "Net 30 Days", value: 30 },
  ];

  const onSubmit = (data: any, e: any) => {
    console.log(data);
  };

  return (
    <>
      <div
        className="backdrop z-10 inset-0 fixed bg-black bg-opacity-80"
        onClick={() => setIsFormOpen(false)}
      ></div>
      <form
        className="form-container dark:bg-[#141624] bg-[#f7f7f7] shadow rounded-lg md:gap-6 md:py-5 inset-0 z-10 absolute max-w-2xl mx-auto h-[42rem] mt-8 w-full sm:w-11/12 flex flex-col justify-between"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Form */}
        <h2 className="text-2xl font-bold py-4 px-5">{title}</h2>
        <section className="form flex flex-col gap-16 h-[30rem] shadow-sm py-4 px-5 overscroll-none overflow-y-scroll">
          {/* Bill from */}
          <fieldset className="form-bill-from-container grid grid-cols-2 gap-4">
            <legend className="mb-4 text-violet-500 font-semibold">
              Bill From
            </legend>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="sender-street" className="form-label">
                Street Address
              </label>
              <input
                type="text"
                id="sender-street"
                className="form-input"
                {...register("senderStreet")}
                autoFocus
              />
              {errors.senderStreet && (
                <p className="form-message mb-5 mt-1">
                  {errors.senderStreet?.message}
                </p>
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
                <p className="form-message mb-5 mt-1">
                  {errors.senderCity?.message}
                </p>
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
                {...register("senderPostcode")}
              />
              {errors.senderPostcode && (
                <p className="form-message mb-5 mt-1">
                  {errors.senderPostcode?.message}
                </p>
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
                <p className="form-message mt-1">
                  {errors.senderCountry?.message}
                </p>
              )}
            </div>
          </fieldset>
          {/* Bill to */}
          <fieldset className="form-bill-to-container grid grid-cols-2 gap-4">
            <legend className="mb-4 text-violet-500 font-semibold">
              Bill To
            </legend>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-fullname" className="form-label">
                Client's Name
              </label>
              <input
                type="text"
                id="client-fullname"
                className="form-input"
                {...register("clientFullname")}
              />
              {errors.clientFullname && (
                <p className="form-message mb-5 mt-1">
                  {errors.clientFullname?.message}
                </p>
              )}
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-email" className="form-label">
                Client's Email
              </label>
              <input
                type="text"
                id="client-email"
                className="form-input"
                {...register("clientEmail")}
              />
              {errors.clientEmail && (
                <p className="form-message mb-5 mt-1">
                  {errors.clientEmail?.message}
                </p>
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
                <p className="form-message mb-5 mt-1">
                  {errors.clientStreet?.message}
                </p>
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
                <p className="form-message mb-5 mt-1">
                  {errors.clientCity?.message}
                </p>
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
                {...register("clientPostcode")}
              />
              {errors.clientPostcode && (
                <p className="form-message mb-5 mt-1">
                  {errors.clientPostcode?.message}
                </p>
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
                <p className="form-message mb-5 mt-1">
                  {errors.clientCountry?.message}
                </p>
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
                <p className="form-message mb-5 mt-1">
                  {errors.invoiceDate?.message}
                </p>
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
                <p className="form-message mb-5 mt-1">
                  {errors.paymentTerms?.message}
                </p>
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
                <p className="form-message mb-5 mt-1">
                  {errors.projectDescription?.message}
                </p>
              )}
            </div>
          </fieldset>
        </section>
        {/* Form buttons */}
        <section className="form-buttons flex gap-2 py-8 px-5 mt-auto">
          <button
            type="button"
            className="form-btn bg-slate-500 hover:bg-slate-600 transition-colors text-white"
            onClick={() => setIsFormOpen(false)}
          >
            Discard
          </button>
          <button
            type="button"
            className="form-btn ml-auto bg-slate-500 hover:bg-slate-600 transition-colors text-white"
          >
            Save as Draft
          </button>
          <button
            className="form-btn bg-violet-500 hover:bg-[#9c71fd] transition-colors text-white"
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
