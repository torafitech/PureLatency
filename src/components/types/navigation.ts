export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

export interface PageMeta {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}