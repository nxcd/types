export type Omit<Original, Key extends keyof Original> = Pick<Original, Exclude<keyof Original, Key>>
