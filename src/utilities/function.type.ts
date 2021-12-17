export enum IsEmptyTypes {
  objectDate = '[object Date]',
  function = 'function',
  boolean = 'boolean',
  number = 'number',
  object = 'object',
  string = 'string',
}

export interface TypeSelectData {
  data?: Array<any>
  labelKey: string
  valueKey: string
}
