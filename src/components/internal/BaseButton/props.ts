export interface PropType {
  size?: "small" | "medium" | "large";
  variant?: "solid" | "soft" | "surface" | "outline" | "ghost";
  disabled?: boolean;
}
export function BuildDefaultPropType(): PropType {
  return {
    size: "medium",
    variant: "solid",
    disabled: false,
  };
}
