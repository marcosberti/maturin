export const sizes = {
  large: { min: 992 },
  small: { max: 991 },
};
export const large = `@media (min-width: ${sizes.large.min}px)`;
export const small = `@media (max-width: ${sizes.small.max}px)`;
