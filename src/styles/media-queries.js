export const sizes = {
  large: { min: 992 },
  // madium: { min: 992, max: 1199 },
  small: { max: 991 },
};
export const large = `@media (min-width: ${sizes.large.min}px)`;
// export const medium = `@media (min-width: ${sizes.madium.min}px) and (max-width: ${sizes.madium.max}px)`;
export const small = `@media (max-width: ${sizes.small.max}px)`;
