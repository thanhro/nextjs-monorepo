export type ValueOf<T> = T[keyof T]
export type Nullable<T> = T | null

export type OptionType<T = string, K = object> = {
  label: string
  value: T
} & K

export type ApiErrorDetail = {
  field: string
  message: string
}

export type ApiBaseResponse = {
  success: boolean
  code: number
  message: string
  timestamp: string // ISO format
}

export type ApiSuccessResponse<T> = ApiBaseResponse & {
  success: true
  data: T
  errors: null
}

export type ApiErrorResponse = ApiBaseResponse & {
  success: false
  data: null
  errors: ApiErrorDetail[]
}
