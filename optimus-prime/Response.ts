export type SuccessResponse = {
  ok: true,
  file: string,
  error: null
}

export type ErrorResponse = {
  ok: false,
  file: string,
  error: {
    code: string,
    message: string
  }
}

export type Response = SuccessResponse | ErrorResponse
