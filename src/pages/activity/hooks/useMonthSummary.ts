import { ActivityProps } from "../types/activity-table.type";

interface MonthSummary {
  month: string;
  totalToPay: number;
  totalDebt: number;
  totalExpenses: number;
  weeks: number[];
  utility: number;
}

type ReduceMonth = Record<string, Omit<MonthSummary, "month">>;

export const useMonthSummary = (activity: ActivityProps[]) => {
  activity.reduce<ReduceMonth>((accum, activity) => {
    return {};
  }, {});
};
