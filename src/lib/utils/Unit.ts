export type MeasuringUnit = string | number;

export type PercentageQuarterCount = 1 | 2 | 3;
export type PercentageQuarterOutput = "25%" | "50%" | "75%";
export type PercentageColumnCount =
  | PercentageQuarterCount
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

interface PercentageUnit {
  full: () => "100%";
  half: () => "50%";
  quarter: (count: PercentageQuarterCount) => PercentageQuarterOutput;
  column: (count: PercentageColumnCount) => MeasuringUnit;
}

export class Unit {
  static get percentage(): PercentageUnit {
    return {
      full: () => "100%",
      half: () => "50%",
      quarter: (count) => `${count * 25}%`,
      column: (count) => `${Math.round(count * 8.333333333)}%`,
    } as PercentageUnit;
  }

  static get zero(): MeasuringUnit {
    return 0;
  }
}
