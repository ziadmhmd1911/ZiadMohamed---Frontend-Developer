import { AppDispatch, filterCapsules, FiltersState, RootState } from '@store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DateRangePicker } from '../DateRangePicker';
import { StatusFilter } from './StatusFilter';
import { TypeFilter } from './TypeFilter';

export const Filters = () => {
  const filterOptions = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(filterCapsules(filterOptions));
  }, [dispatch, filterOptions]);

  return (
    <div data-testid="filters" id="filters" className="flex w-full flex-col">
      <div className="my-5 w-full text-center ">
        <span className="block text-4xl font-bold">
          Journey of 1000 miles begins with a step.
        </span>
        <span className="block text-lg font-semibold">
          100+, and counting, capsules out into the space
        </span>
      </div>
      <div className="flex w-full flex-col items-center gap-3 p-5 shadow-2xl sm:flex-row sm:flex-wrap">
        <div className="w-full cursor-pointer sm:flex-1">
          <StatusFilter />
        </div>
        <div className="w-full cursor-pointer sm:flex-1">
          <TypeFilter />
        </div>
        <div className="w-full sm:flex-1">
          <DateRangePicker />
        </div>
      </div>
    </div>
  );
};
