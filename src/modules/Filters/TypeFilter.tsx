import { SelectField } from '@components';
import { AppDispatch, FilterOption, Filters, setFilters } from '@store';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MultiValue } from 'react-select';

import { CAPSULE_TYPE_FILTER_OPTIONS } from './constants';

export const TypeFilter = () => {
  const dispatch = useDispatch<AppDispatch>();

  const onChange = useCallback(
    (options: MultiValue<FilterOption>) => {
      dispatch(
        setFilters({
          filterType: Filters.TYPE,
          filterOptions: [...options],
        })
      );
    },
    [dispatch]
  );

  return (
    <SelectField
      options={CAPSULE_TYPE_FILTER_OPTIONS}
      isMulti={true}
      onChange={onChange}
      placeholder={"Filter by Capsule Type"}
    />
  );
};
