export type Variant = "notice" | "warning" | "success" | "error";

export interface Slice {
  variant: Variant;
  message: string;
  id: string;
}
