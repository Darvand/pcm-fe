import * as React from "react";

import { Table } from "@components/Table";
import { ACTIVITY_TABLE_COLUMNS } from "@pages/activity/constants/activity-table.constants";
import { ActivityProps } from "@pages/activity/types/activity-table.type";

interface IActivityTableProps {}

const staticData: ActivityProps[] = [...Array(50).keys()].map((_, index) => ({
  id: `${index}`,
  week: 11 + index,
  year: 2022,
  dateFormat: "Mar 14 - Mar 20",
  hoursWorked: 47.5,
  totalToPay: 1183701,
  totalDebt: 69111,
  totalExpenses: 213665,
  utility: 890029,
  status: "Pagado",
}));

const ActivityTable: React.FunctionComponent<IActivityTableProps> = (props) => {
  return (
    <Table
      columns={ACTIVITY_TABLE_COLUMNS}
      data={staticData}
      onRowClick={(row) => console.log("row", row)}
    />
  );
};

export default ActivityTable;
