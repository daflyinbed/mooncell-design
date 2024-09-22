export interface PropType {
  size?: "1" | "2" | "3" | "4";
  variant?: "solid" | "soft" | "surface" | "outline" | "ghost";
  disabled?: boolean;
  asChild?: boolean;
}
export function BuildDefaultPropType(): PropType {
  return {
    size: "2",
    variant: "solid",
    disabled: false,
    asChild: false,
  };
}
