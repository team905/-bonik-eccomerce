import { LayoutProps } from "interfaces";
import GroceryLayout from "@component/layout/GroceryLayout";

export default function MarketLayout({ children }: LayoutProps) {
  return <GroceryLayout>{children}</GroceryLayout>;
}
