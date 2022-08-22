import { DateTime } from "luxon";

import { WeeklyActivity } from "../types/activity-table.type";

export interface WeeklySummary {
  id: string;
  date: DateTime;
  minutesWorked: number;
  totalExpenses: number;
  totalSettlement: number;
  totalDeductions: number;
  utility: number;
}

export const useWeeklySummary = (
  weeklyActivty: WeeklyActivity[]
): WeeklySummary[] => {
  return weeklyActivty.map((activity) => {
    const minutesWorked = activity.dailyActivity.reduce(
      (summary, activity) => summary + activity.minutesWorked,
      0
    );
    const totalSettlement = activity.weeklySettlement.reduce(
      (summary, activity) => summary + activity.settlement,
      0
    );
    const totalDeductions = activity.weeklyDeductions.reduce(
      (summary, activity) => summary + activity.price,
      0
    );
    const totalExpenses = activity.dailyExpenses.reduce(
      (summary, activity) => summary + activity.value,
      0
    );
    const utility = totalSettlement - totalDeductions - totalExpenses;
    return {
      id: activity.id,
      date: DateTime.fromObject({
        weekNumber: activity.week,
        weekYear: activity.year,
      }),
      minutesWorked,
      totalSettlement,
      totalDeductions,
      totalExpenses,
      utility,
    };
  });
};
