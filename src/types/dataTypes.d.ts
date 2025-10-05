export interface RoutesLinksType {
  to: string;
  label: string;
  icon?: any;
}

export interface NavbarProps {
  openMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

export interface MenuItemProps {
  id: number;
  title: string;
}

export interface MenuButtonProps {
  title: string;
  selected?: string;
  setSelected?: (selected: string) => void;
  list: MenuItemProps[];
  style?: any;
}

export interface SearchProps {
  jobTypes: string;
  locations: string;
}

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  jobType: "Remote" | "OnSite" | "Hybrid";
  datePosted: string;
  applicants: number;
  isSaved?: boolean;
}

export interface CardSection {
  id: number;
  key: string;
  seeMore: string;
  data: Job[];
}

export interface ImageProps {
  src: string | any;
  alt: string;
  width: string | number;
  height: string | number;
  className?: string;
}

export interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface CustomAnchorCardProps {
  title: string;
  company: string;
  location: string;
  jobType?: string;
  datePosted: string;
  applicants: number;
  isSaved: boolean;
}

export interface CustomButtonProps {
  title: string;
  onClick?: () => void;
  isOutline?: boolean;
  rightIcon?: string;
  customStyles?: string;
}
