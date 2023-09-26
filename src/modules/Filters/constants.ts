import { CapsuleStatus, CapsuleType } from '@models';
import { FilterOption } from '@store';

export const CAPSULE_STATUS_FILTER_OPTIONS: FilterOption[] = [
  {
    label: CapsuleStatus.ACTIVE,
    value: CapsuleStatus.ACTIVE,
  },
  {
    label: CapsuleStatus.RETIRED,
    value: CapsuleStatus.RETIRED,
  },
  {
    label: CapsuleStatus.DESTROYED,
    value: CapsuleStatus.DESTROYED,
  },
  {
    label: CapsuleStatus.UNKNOWN,
    value: CapsuleStatus.UNKNOWN,
  },
];

export const CAPSULE_TYPE_FILTER_OPTIONS: FilterOption[] = [
  {
    label: CapsuleType.DRAGON_1_0,
    value: CapsuleType.DRAGON_1_0,
  },
  {
    label: CapsuleType.DRAGON_1_1,
    value: CapsuleType.DRAGON_1_1,
  },
  {
    label: CapsuleType.DRAGON_2_0,
    value: CapsuleType.DRAGON_2_0,
  },
];
