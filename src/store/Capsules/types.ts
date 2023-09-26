import { Capsule } from '@models';
import { Loading } from 'src/store/types';

export type CapsulesState = Loading & {
  capsules: Capsule[];
  filteredCapsules: Capsule[];
};
