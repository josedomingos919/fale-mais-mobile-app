import { IsEmptyTypes, TypeSelectData } from './function.type'

export const getSelectData = ({
  data = [],
  labelKey = '',
  valueKey = '',
}: TypeSelectData) =>
  data.map(({ [labelKey]: label, [valueKey]: value }) => ({
    label,
    value,
  }))

export const isEmpty = (val: any) => {
  if (!val) return true

  if (
    typeof val == IsEmptyTypes.function ||
    typeof val == IsEmptyTypes.number ||
    typeof val == IsEmptyTypes.boolean ||
    Object.prototype.toString.call(val) === IsEmptyTypes.objectDate
  )
    return false

  if (val == null || val.length === 0) return true

  if (typeof val == IsEmptyTypes.object) {
    let r = true

    for (let f in val) r = false

    return r
  }
}

export const formatMoney = (val: any = 0) =>
  (typeof val == IsEmptyTypes.string ? parseFloat(val) : val)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
