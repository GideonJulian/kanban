import React from "react";

const productColumns = [
  { header: "Products", accessor: "name" },
  { header: "Buying Price", accessor: "price", render: (val) => `₹${val}` },
  {
    header: "Quantity",
    accessor: "quantity",
    render: (val) => `${val} Packets`,
  },
  {
    header: "Threshold Value",
    accessor: "threshold",
    render: (val) => `${val} Packets`,
  },
  { header: "Expiry Date", accessor: "expiry" },
  { header: "Availability", accessor: "status" },
];
const SuppliersColumns = [
  { header: "Supplier Name", accessor: "name" },
  { header: "Product", accessor: "product" },
  { header: "Contact Number", accessor: "contact" },
  { header: "Email", accessor: "email" },
  {
    header: "Status",
    accessor: "status",
    render: (val) => {
      const colorClass =
        val === "Not Taking Return" ? "text-red-600" : "text-success-600";
      return React.createElement(
        "span",
        {
          className: `${colorClass} font-[16px]`,
        },
        val
      );
    },
  },
  { header: "On the way", accessor: "onTheWay" },
];
const OrdersColumns = [
  { header: "Products", accessor: "product" },
  { header: "Order Value", accessor: "orderValue" },
  { header: "Quantity", accessor: "Quantity" },
  { header: "Order ID", accessor: "orderId" },
  { header: "Expected Delivery", accessor: "expectedDelivery" },
  {
    header: "Status",
    accessor: "status",
    render: (val) => {
      const colorClass =
        val === "Delayed"
          ? "text-[#F79009]"
          : val === "Confirmed"
          ? "text-[#1570EF]"
          : val === "Returned"
          ? "text-black"
          : val === "Out for delivery"
          ? "text-success-600"
          : "";
      return React.createElement(
        "span",
        {
          className: `${colorClass} font-[16px]`,
        },
        val
      );
    },
  },
];

const OrdersData = [
  {
    product: "Kit Kat",
    orderValue: "₹4306",
    Quantity: "43 Packets ",
    orderId: "7535",
    expectedDelivery: "11/12/22",
    status: "Delayed",
  },
  {
    product: "Bru",
    orderValue: "₹4306",
    Quantity: "23 Packets ",
    orderId: "5724",
    expectedDelivery: "21/12/22",
    status: "Confirmed",
  }, {
    product: "Red Bull",
    orderValue: "₹4075",
    Quantity: "36 Packets ",
    orderId: "7535",
    expectedDelivery: "11/12/22",
    status: "Returned",
  },
 {
    product: "Kit Kat",
    orderValue: "₹4306",
    Quantity: "43 Packets ",
    orderId: "7535",
    expectedDelivery: "11/12/22",
    status: "Out for delivery",
  },
  // ... repeat as needed
];

const SupplierData = [
  {
    name: "Richard Martin",
    product: "Kit Kat",
    contact: 7687764556,
    email: "richard@gmail.com",
    status: "Taking Return",
    onTheWay: "13",
  },
  {
    name: "Tom Homan",
    product: "Maaza",
    contact: 9867545368,
    email: "tomhoman@gmail.com",
    status: "Taking Return",
    onTheWay: "-",
  },
  {
    name: "Veandir",
    product: "Dairy Milk",
    contact: 9867545566,
    email: "veandir@gmail.com",
    status: "Not Taking Return",
    onTheWay: "12",
  },
  {
    name: "Charin",
    product: "Tomato",
    contact: 9267545457,
    email: "charin@gmail.com",
    status: "Taking Return",
    onTheWay: "-",
  },
  {
    name: "Hoffman",
    product: "Tomato",
    contact: 9267545457,
    email: "hoffman@gmail.com",
    status: "Taking Return",
    onTheWay: "9",
  },
  {
    name: "Fainden Juke",
    product: "Marie Gold ",
    contact: 9667545982,
    email: "fainden@gmail.com",
    status: "Not Taking Return",
    onTheWay: "-",
  },
  {
    name: "Fainden Juke",
    product: "Marie Gold ",
    contact: 9667545982,
    email: "fainden@gmail.com",
    status: "",
    onTheWay: "7",
  },
  // ... repeat as needed
];

const productData = [
  {
    name: "Maggi",
    price: 430,
    quantity: 43,
    threshold: 12,
    expiry: "11/12/22",
    status: "In-stock",
  },
  {
    name: "Bru",
    price: 257,
    quantity: 22,
    threshold: 12,
    expiry: "21/12/22",
    status: "Out of stock",
  },
  {
    name: "Red Bull",
    price: 405,
    quantity: 36,
    threshold: 9,
    expiry: "5/12/22",
    status: "In-stock",
  },
  {
    name: "Bourn Vita",
    price: 502,
    quantity: 14,
    threshold: 6,
    expiry: "8/12/22",
    status: "Out of stock",
  },
  {
    name: "Horlicks",
    price: 530,
    quantity: 5,
    threshold: 5,
    expiry: "9/1/23",
    status: "In-stock",
  },
  {
    name: "Harpic",
    price: 605,
    quantity: 10,
    threshold: 5,
    expiry: "9/1/23",
    status: "In-stock",
  },
  {
    name: "Ariel",
    price: 408,
    quantity: 23,
    threshold: 7,
    expiry: "15/12/23",
    status: "Out of stock",
  },
  {
    name: "Scotch Brite",
    price: 359,
    quantity: 43,
    threshold: 8,
    expiry: "6/6/23",
    status: "In-stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
  {
    name: "Coca cola",
    price: 205,
    quantity: 41,
    threshold: 10,
    expiry: "11/11/22",
    status: "Low stock",
  },
];
export {
  productColumns,
  productData,
  SuppliersColumns,
  SupplierData,
  OrdersColumns,
  OrdersData,
};

//  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
//   const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
