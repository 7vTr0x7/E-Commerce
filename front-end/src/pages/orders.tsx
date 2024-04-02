import { ReactElement, useState } from "react";
import TableHOC from "../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};

const column: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "QUANTITY",
    accessor: "quantity",
  },
  {
    Header: "DISCOUNT",
    accessor: "discount",
  },
  {
    Header: "AMOUNT",
    accessor: "amount",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
  {
    Header: "ACTION",
    accessor: "action",
  },
];

const Orders = () => {
  const [rows] = useState<DataType[]>([
    {
      _id: "aff",
      amount: 999,
      quantity: 2,
      discount: 200,
      status: <span className="red">Processing</span>,
      action: <Link to={"/orders/aff"}>View</Link>,
    },
  ]);

  const Table = TableHOC<DataType>(
    column,
    rows,
    "dashboard-product-box",
    "Orders",
    rows.length > 6
  )();

  return (
    <div className="container">
      <h1>My Orders</h1>
      {Table}
    </div>
  );
};

export default Orders;
