export enum Filters {
  STATUS = "status",
  DATE_RANGE = "dateRange",
  TYPE = "type",
}

export type DateRange = {
  startDate: Date | null | undefined;
  endDate: Date | null | undefined;
};

export type FiltersState = {
  [Filters.STATUS]: FilterOption[];
  [Filters.TYPE]: FilterOption[];
  [Filters.DATE_RANGE]: DateRange;
};

export type FilterOption = {
  label: string;
  value: string;
};

export type PayLoad = {
  filterType: Filters;
  filterOptions: FilterOption[] | DateRange;
};
