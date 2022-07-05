import React from "react";

const Form = ({ title, setIsFormOpen }) => {
  return (
    <>
      <div
        className="backdrop z-10 inset-0 fixed bg-black bg-opacity-80"
        onClick={() => setIsFormOpen(false)}
      ></div>
      <form className="form-container dark:bg-[#141624] bg-[#f7f7f7] shadow rounded-lg md:gap-6 md:py-5 inset-0 z-10 absolute max-w-3xl mx-auto h-[42rem] mt-8 w-full sm:w-11/12 flex flex-col justify-between">
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
              <input type="text" id="sender-street" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="sender-city" className="form-label">
                City
              </label>
              <input type="text" id="sender-city" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="sender-postcode" className="form-label">
                Post Code
              </label>
              <input type="text" id="sender-postcode" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="sender-country" className="form-label">
                Country
              </label>
              <input type="text" id="sender-country" className="form-input" />
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
              <input type="text" id="client-fullname" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-email" className="form-label">
                Client's Email
              </label>
              <input type="text" id="client-email" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-street" className="form-label">
                Street Address
              </label>
              <input type="text" id="client-street" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="client-city" className="form-label">
                City
              </label>
              <input type="text" id="client-city" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col">
              <label htmlFor="client-postcode" className="form-label">
                Post Code
              </label>
              <input type="text" id="client-postcode" className="form-input" />
            </div>
            <div className="input-wrapper flex flex-col col-span-2">
              <label htmlFor="client-country" className="form-label">
                Country
              </label>
              <input type="text" id="client-country" className="form-input" />
            </div>
          </fieldset>
        </section>
        {/* Form buttons */}
        <section className="form-buttons flex items-center gap-2 py-8 px-5 mt-auto">
          <button
            className="form-btn bg-slate-500 hover:bg-slate-600 transition-colors text-white"
            onClick={() => setIsFormOpen(false)}
          >
            Discard
          </button>
          <button className="form-btn ml-auto bg-slate-500 hover:bg-slate-600 transition-colors text-white">
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
