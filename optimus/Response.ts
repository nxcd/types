export type SuccessResponse = {
  ok: true,
  result: string[],
  error: null
}

export type ErrorResponse = {
  ok: false,
  result: null,
  error: {
    code: string,
    message: string
  }
}

export type Response = SuccessResponse | ErrorResponse
