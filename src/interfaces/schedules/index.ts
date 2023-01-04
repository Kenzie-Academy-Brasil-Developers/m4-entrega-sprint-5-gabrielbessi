export interface IScheduleRequest {
  userId: string;
  propertyId: string;
  date: string;
  hour: string;
}

export interface IScheduleArray {
  id?: string;
  date?: string;
  hour?: string;
  user?: string;
}

export interface IScheduleResponse {
  id?: string;
  sold?: boolean;
  value?: number;
  size?: number;
  createdAt?: Date;
  updatedAt?: Date;
  schedules: IScheduleArray;
}
