import { Mission } from './Mission';

export enum CapsuleStatus {
  ACTIVE = "active",
  DESTROYED = "destroyed",
  RETIRED = "retired",
  UNKNOWN = "unknown",
}

export enum CapsuleType {
  DRAGON_1_0 = "Dragon 1.0",
  DRAGON_1_1 = "Dragon 1.1",
  DRAGON_2_0 = "Dragon 2.0",
}

export type Capsule = {
  capsuleSerial: string;
  capsuleId: string;
  status: CapsuleStatus;
  originalLaunch: string;
  originalLaunchUnix: number;
  missions: Mission[];
  landings: number;
  type: CapsuleType;
  details: string;
  reuseCount: number;
};
