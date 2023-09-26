import Select, { Props } from 'react-select';

type SelectProps<TOption = unknown, isMulti extends boolean = false> = Props<
  TOption,
  isMulti
>;

export const SelectField = <TOption, isMulti extends boolean = true>(
  props: SelectProps<TOption, isMulti>
) => {
  return <Select<TOption, isMulti> {...props} />;
};
