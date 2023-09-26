import { Capsule } from '@models';

import { FiltersState } from '../Filters';

const isSatisfyingFilters = (
  capsule: Capsule,
  { status, type, dateRange }: FiltersState
) => {
  const statusFilter = status.length
    ? status.find(({ value }) => value === capsule.status)
    : true;

  const typeFilter = type.length
    ? type.find(({ value }) => value === capsule.type)
    : true;

  const capsuleDate = new Date(capsule.originalLaunch);
  const { startDate, endDate } = dateRange;
  const dateRangeFilter =
    !!startDate && !!endDate
      ? startDate.getTime() <= capsuleDate.getTime() &&
        capsuleDate.getTime() <= endDate.getTime()
      : true;
  return statusFilter && typeFilter && dateRangeFilter;
};

const areAllFiltersClear = ({ status, type, dateRange }: FiltersState) => {
  return (
    !!status.length &&
    !!type.length &&
    !!(dateRange.startDate && dateRange.endDate)
  );
};

export const applyFilter = (capsules: Capsule[], filterState: FiltersState) => {
  let filteredCapsules: Capsule[] = [];

  if (areAllFiltersClear(filterState)) {
    return capsules;
  }

  capsules.forEach((capsule, index) => {
    if (
      isSatisfyingFilters(capsule, filterState) &&
      !filteredCapsules.includes(capsule)
    ) {
      filteredCapsules.push(capsule);
    }
  });

  return filteredCapsules;
};
