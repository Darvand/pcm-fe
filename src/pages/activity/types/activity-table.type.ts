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

export interface DailyActivity {
  date: DateTime;
  template: string;
  startHour: DateTime;
  endHour: DateTime;
  breakTimeInMinutes: number;
  minutesWorked: number;
}

export interface WeeklySettlement {
  material: string;
  minutesPayed: number;
  anotherValue: number;
  settlement: number;
}

export interface WeeklyDeductions {
  concept: string;
  price: number;
}

export enum ExpenseCategory {
  TOLL = "peaje",
  GAS = "gas",
  GASOLINE = "gasolina",
  MAINTENANCE = "mantenimiento",
  MATERIALS = "materiales",
}

export enum WeekStatus {
  PAID = "paid",
  WORKED = "worked",
  WITHOUT_PAYING = "without_paying",
}

export interface DailyExpenses {
  date: DateTime;
  category: ExpenseCategory;
  value: number;
}

export interface WeeklyActivity {
  id: string;
  week: number;
  year: number;
  dailyActivity: DailyActivity[];
  dailyExpenses: DailyExpenses[];
  weeklySettlement: WeeklySettlement[];
  weeklyDeductions: WeeklyDeductions[];
  status: "Pagado";
}

export type ActivityTable = Omit<ActivityProps, "year">;
