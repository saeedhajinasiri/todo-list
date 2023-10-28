/**
 * Remove properties `K` from `T`.
 * Distributive for union types.
 *
 * @internal
 */
export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

/**
 * Like `T & U`, but using the value types from `U` where their properties overlap.
 *
 * @internal
 */
export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

type GenerateStringUnion<T> = Extract<{ [Key in keyof T]: true extends T[Key] ? Key : never; }[keyof T], string>;

/**
 * Generate a set of string literal types with the given default record `T` and
 * override record `U`.
 *
 * If the property value was `true`, the property key will be added to the
 * string union.
 *
 * @internal
 */
export type OverridableStringUnion<T extends string | number, U = {}> = GenerateStringUnion<Overwrite<Record<T, true>, U>>;

/**
 * set of colors
 */
export type Colors = 'primary' | 'gray' | 'inherit'

/**
 * set of rounded
 */
export type Rounded = 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'full'

/**
 * set of sizes
 */
export type Sizes = 'small' | 'medium' | 'large'

