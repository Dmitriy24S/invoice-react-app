export interface AddressType {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface InvoiceItemType {
  name: string;
  //   price: number;
  price: number | string; // ? type fix
  //   quantity: number;
  quantity: number | string; // ? type fix
  total: number;
}

export interface InvoiceType {
  clientAddress: AddressType;
  clientEmail: string;
  clientName: string;
  id: string;
  createdAt: string;
  description: string;
  items: InvoiceItemType[];
  paymentDue: string;
  paymentTerms: number;
  senderAddress: AddressType;
  status: string;
  total: number;
}

export interface AppContextType {
  invoices: InvoiceType[];
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
}
