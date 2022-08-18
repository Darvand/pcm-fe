export interface ActivityProps {
  id: string;
  week: number;
  year: number;
  dateFormat: string;
  hoursWorked: number;
  totalToPay: number;
  totalDebt: number;
  totalExpenses: number;
  utility: number;
  status: string;
}

export type ActivityTable = Omit<ActivityProps, "year">;
