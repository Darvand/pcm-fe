import { DateTime } from "luxon";

import { WeeklySummary } from "./useWeeklySummary";

export interface MonthSummary {
  month: DateTime;
  weeks: { number: number; isPositive: boolean }[];
  minutesWorked: number;
  totalExpenses: number;
  totalSettlement: number;
  totalDeductions: number;
  utility: number;
}
type ReduceMonth = Record<string, Omit<MonthSummary, "month">>;

const DEFAULT_VALUES: Omit<MonthSummary, "month"> = {
  minutesWorked: 0,
  totalSettlement: 0,
  totalDeductions: 0,
  totalExpenses: 0,
  utility: 0,
  weeks: [],
};

export const useMonthSummary = (activity: WeeklySummary[]): MonthSummary[] => {
  const monthly = activity.reduce<ReduceMonth>((accum, activity) => {
    const month = activity.date.toFormat("yyyy MM");
    const currentMonth = accum[month] || DEFAULT_VALUES;
    const monthSummary = {
      minutesWorked: currentMonth.minutesWorked + activity.minutesWorked,
      totalSettlement: currentMonth.totalSettlement + activity.totalSettlement,
      totalDeductions: currentMonth.totalDeductions + activity.totalDeductions,
      totalExpenses: currentMonth.totalExpenses + activity.totalExpenses,
      utility: currentMonth.utility + activity.utility,
      weeks: [
        ...currentMonth.weeks,
        { number: activity.date.weekNumber, isPositive: activity.utility > 0 },
      ],
    };
    return {
      ...accum,
      [month]: monthSummary,
    };
  }, {});
  return Object.keys(monthly)
    .map((key) => ({
      month: DateTime.fromFormat(key, "yyyy MM"),
      ...monthly[key],
    }))
    .sort((prev, next) => prev.month.toMillis() - next.month.toMillis());
};
