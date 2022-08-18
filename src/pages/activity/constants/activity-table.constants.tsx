import { Column } from "react-table";

import { CurrencyCell } from "@components/Table";
import { ActivityTable } from "@pages/activity/types/activity-table.type";

export const ACTIVITY_TABLE_COLUMNS: Column<ActivityTable>[] = [
  {
    Header: "Semana",
    accessor: "week",
    width: 400,
  },
  {
    Header: "Fechas",
    accessor: "dateFormat",
    Cell: ({ value }) => {
      return <span className="text-light-blue">{value}</span>;
    },
  },
  {
    Header: "Horas trabajadas",
    accessor: "hoursWorked",
  },
  {
    Header: "Total a pagar",
    accessor: "totalToPay",
    Cell: CurrencyCell,
  },
  {
    Header: "Total deudas",
    accessor: "totalDebt",
    Cell: CurrencyCell,
  },
  {
    Header: "Total gastos",
    accessor: "totalExpenses",
    Cell: CurrencyCell,
  },
  {
    Header: "Utilidad",
    accessor: "utility",
    Cell: CurrencyCell,
  },
  {
    Header: "Estado",
    accessor: "status",
  },
];
