// 整理布局相关 interface
export interface MenuItem {
  name: string;
  key: string;
  icon: any;
  theme: "outline" | "filled" | "two-tone" | "multi-color";
}

export interface Menus {
  name: string;
  menus: MenuItem[];
}