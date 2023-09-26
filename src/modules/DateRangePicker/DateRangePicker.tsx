import { AppDispatch, DateRange, Filters, FiltersState, RootState, setFilters } from '@store';
import format from 'date-fns/format';
import { useCallback, useMemo, useState } from 'react';
import { DateRangePicker as RDateRangePicker } from 'react-date-range';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button/Button';
import { Modal } from '../../components/Modal';

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
};

export const DateRangePicker = () => {
  const [range, setRange] = useState(initialState);
  const [showPicker, setShowPicker] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { dateRange } = useSelector<RootState, FiltersState>(
    (state) => state.filters
  );

  const onChange = useCallback((val: any) => {
    setRange(val.selection);
  }, []);

  const togglePicker = useCallback(() => {
    setShowPicker(!showPicker);
  }, [showPicker]);

  const onClickCancel = useCallback(() => {
    setShowPicker(false);
  }, []);

  const onClickClear = useCallback(() => {
    setRange(initialState);
  }, []);

  const onClickApply = useCallback(() => {
    const { startDate: newStartDate, endDate: newEndDate } = range;
    const { startDate: oldStartDate, endDate: oldEndDate } = initialState;

    let newRange: DateRange = range;
    if (
      newStartDate.getTime() === oldStartDate.getTime() &&
      newEndDate.getTime() === oldEndDate.getTime()
    ) {
      newRange = {
        startDate: null,
        endDate: null,
      };
    }

    dispatch(
      setFilters({
        filterType: Filters.DATE_RANGE,
        filterOptions: {
          ...newRange,
        },
      })
    );
    setShowPicker(false);
  }, [dispatch, range]);

  const modal = useMemo(
    () => (
      <Modal onClickClose={onClickCancel} showOnlyChild={true}>
        <div className="m-2 flex w-fit origin-top-left flex-col overflow-hidden rounded-md border border-solid border-black shadow-2xl">
          <RDateRangePicker
            ranges={[{ ...range, key: "selection" }]}
            onChange={onChange}
            staticRanges={[]}
            inputRanges={[]}
          />
          <div className="flex flex-row items-center justify-end gap-3 border border-t-black bg-white p-4">
            <Button
              className="text-sm"
              onClick={onClickCancel}
              buttonType="secondary"
            >
              Cancel
            </Button>
            <Button
              className="text-sm"
              onClick={onClickClear}
              buttonType="danger"
            >
              Clear
            </Button>
            <Button
              className="text-sm"
              onClick={onClickApply}
              buttonType="success"
            >
              Apply
            </Button>
          </div>
        </div>
      </Modal>
    ),
    [onChange, onClickApply, onClickCancel, onClickClear, range]
  );

  return (
    <>
      <Button buttonType="primary" onClick={togglePicker} className="w-full">
        {dateRange?.startDate && dateRange.endDate
          ? `${format(dateRange.startDate, "do MMM yyy")} - ${format(
              dateRange.endDate,
              "do MMM yyy"
            )}`
          : "Filter by Launch Date"}
      </Button>
      {showPicker &&
        ReactDOM.createPortal(modal, document.getElementById("modal-root")!)}
    </>
  );
};
