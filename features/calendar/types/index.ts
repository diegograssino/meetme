export enum Days {
  SUN = "sun",
  MON = "mon",
  TUE = "tue",
  WED = "wed",
  THU = "thu",
  FRI = "fri",
  SAT = "sat",
}

export interface Availability {
  id: number;
  name: string;
  key: string;
  unavailableOn: number[][];
}

export type AvailabilityTemplate = Record<Days, Availability>;
