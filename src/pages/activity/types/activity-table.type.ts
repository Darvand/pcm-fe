import { DateTime } from "luxon";

export interface ActivityProps {
  id: string;
  date: DateTime;
  hoursWorked: number;
  totalToPay: number;
  totalDebt: number;
  totalExpenses: number;
  utility: number;
  status: string;
}

export type ActivityTable = Omit<ActivityProps, "year">;
