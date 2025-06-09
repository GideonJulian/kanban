
const productColumns = [
  { header: "Products", accessor: "name" },
  { header: "Buying Price", accessor: "price", render: (val) => `₹${val}` },
  { header: "Quantity", accessor: "quantity", render: (val) => `${val} Packets` },
  { header: "Threshold Value", accessor: "threshold", render: (val) => `${val} Packets` },
  { header: "Expiry Date", accessor: "expiry" },
  { header: "Availability", accessor: "status" }
];
const SuppliersColumns = [
    { header: "Supplier Name", accessor: "name" },
  { header: "Product", accessor: "price", render: (val) => `₹${val}` },
  { header: "Contact Number", accessor: "quantity", render: (val) => `${val} Packets` },
  { header: "Email", accessor: "threshold", render: (val) => `${val} Packets` },
  { header: "Type", accessor: "expiry" },

]
const SupplierData = [
    { name: "Richard Martin", product: 'Kit Kat', contact: 7687764556, email: 'richard@gmail.com', status: "Taking Return" },
    { name: "Richard Martin", product: 'Kit Kat', contact: 7687764556, email: 'richard@gmail.com', status: "Taking Return" },
    { name: "Richard Martin", product: 'Kit Kat', contact: 7687764556, email: 'richard@gmail.com', status: "Taking Return" },
    { name: "Richard Martin", product: 'Kit Kat', contact: 7687764556, email: 'richard@gmail.com', status: "Taking Return" },
    { name: "Richard Martin", product: 'Kit Kat', contact: 7687764556, email: 'richard@gmail.com', status: "Taking Return" },
    { name: "Richard Martin", product: 'Kit Kat', contact: 7687764556, email: 'richard@gmail.com', status: "Taking Return" },
    { name: "Richard Martin", product: 'Kit Kat', contact: 7687764556, email: 'richard@gmail.com', status: "Taking Return" },

]

const productData = [
  { name: "Maggi", price: 430, quantity: 43, threshold: 12, expiry: "11/12/22", status: "In-stock" },
  { name: "Bru", price: 257, quantity: 22, threshold: 12, expiry: "21/12/22", status: "Out of stock" },
  { name: "Red Bull", price: 405, quantity: 36, threshold: 9, expiry: "5/12/22", status: "In-stock" },
  { name: "Bourn Vita", price: 502, quantity: 14, threshold: 6, expiry: "8/12/22", status: "Out of stock" },
  { name: "Horlicks", price: 530, quantity: 5, threshold: 5, expiry: "9/1/23", status: "In-stock" },
  { name: "Harpic", price: 605, quantity: 10, threshold: 5, expiry: "9/1/23", status: "In-stock" },
  { name: "Ariel", price: 408, quantity: 23, threshold: 7, expiry: "15/12/23", status: "Out of stock" },
  { name: "Scotch Brite", price: 359, quantity: 43, threshold: 8, expiry: "6/6/23", status: "In-stock" },
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" },
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" },
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" },
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" },
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" },
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" },
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" }   ,
  { name: "Coca cola", price: 205, quantity: 41, threshold: 10, expiry: "11/11/22", status: "Low stock" }   ,
];
export {productColumns, productData,SuppliersColumns, SupplierData}

//  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
//   const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));