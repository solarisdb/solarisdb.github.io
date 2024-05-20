// @ts-nocheck
/**
 *
 * @description Generic factory of createVariants function
 * Returns a function, that make sure its' argument has specific keys and value of any key is the same
 *
 * @example
 * import { getCreateVariants } from '@acquirecloud/shared';
 *
 * type Animals = 'cat' | 'dog';
 * const createAnimalsVariants = getCreateVariants<Animals>();
 *
 * // Correct usage
 * const variants = createAnimalsVariants({
 *   cat: {
 *     sound: 'meow',
 *     child: 'kitty'
 *   },
 *   dog: {
 *     sound: 'bark',
 *     child: 'puppy'
 *   },
 * });
 *
 * // Error, wrong keys
 * const variants = createAnimalsVariants({
 *   cat: {
 *     sound: 'meow',
 *     child: 'kitty'
 *   },
 *   cow: {
 *     sound: 'moo',
 *     child: 'calf'
 *   },
 * });
 *
 * // Error, wrong values
 * const variants = createAnimalsVariants({
 *   cat: {
 *     sound: 'meow',
 *     child: 'kitty'
 *   },
 *   dog: {
 *     legs: 4,
 *   },
 * });
 */
export const getCreateVariants =
  <K extends string>() =>
  <T extends Record<K, any>>(value: ObjectWithSameValues<T>) =>
    value as Record<K, T[K]>;

export type ObjectWithSameValues<T> = ForceEqual<T, Record<keyof T, T[keyof T]>>;
export type ForceEqual<A, B> = Equals<A, B> extends true ? A : never;
export type Equals<A, B> = HalfEquals<A, B> extends true ? HalfEquals<B, A> : false;

type HalfEquals<A, B> = (
  A extends unknown
    ? (
        B extends unknown
          ? A extends B
            ? B extends A
              ? keyof A extends keyof B
                ? keyof B extends keyof A
                  ? A extends object
                    ? DeepHalfEquals<A, B, keyof A> extends true
                      ? 1
                      : never
                    : 1
                  : never
                : never
              : never
            : never
          : unknown
      ) extends never
      ? 0
      : never
    : unknown
) extends never
  ? true
  : false;

type DeepHalfEquals<A, B extends A, K extends keyof A> = (
  K extends unknown ? (Equals<A[K], B[K]> extends true ? never : 0) : unknown
) extends never
  ? true
  : false;
