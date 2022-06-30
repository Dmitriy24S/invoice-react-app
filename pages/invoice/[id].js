import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Invoice({ invoices }) {
  const router = useRouter();
  const [invoiceId, setInvoiceId] = useState(null);
  const [invoiceInfo, setInvoiceInfo] = useState(null);

  useEffect(() => {
    setInvoiceId(router.query.id);
    setInvoiceInfo(invoices.find((invoice) => invoice.id === invoiceId));
    // }, [router.query, invoices, invoiceId]);
  }, [invoiceId]);

  console.log(invoiceId);
  console.log(invoiceInfo);

  return (
    <main className="mt-8 px-4">
      <Link href="/" passHref={true} scroll={false}>
        <span className="flex gap-2 items-center cursor-pointer">
          <img src="/images/icon-arrow-left.svg" alt="" />
          Go Back
        </span>
      </Link>
      <section className="item min-w-[18rem] w-full max-w-[20rem] bg-indigo-900 bg-opacity-40 p-4 px-5 rounded-lg mx-auto">
        <h4>Status</h4>
        <p></p>
      </section>
    </main>
  );
}
