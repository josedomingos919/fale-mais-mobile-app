interface TypeSelectData {
  data: Array<any>
  labelKey: string
  valueKey: string
}

export const getSelectData = ({
  data = [],
  labelKey = '',
  valueKey = '',
}: TypeSelectData) =>
  data.map(({ [labelKey]: label, [valueKey]: value }) => ({
    label,
    value,
  }))
