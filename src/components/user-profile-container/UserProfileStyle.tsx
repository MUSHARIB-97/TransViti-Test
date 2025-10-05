export const Styles = {
  container: "w-full flex flex-col gap-4",

  // Profile Card
  profileCard:
    "bg-white pb-4 rounded-md shadow-sm w-full flex flex-col items-center overflow-hidden",
  coverImage:
    "w-full h-30 [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:rounded-t-md",
  profileImage:
    "w-20 h-20 border-4 border-white -mt-8 rounded-full overflow-hidden [&>img]:w-full [&>img]:h-full [&>img]:object-cover",
  userInfo: "px-4 text-center space-y-2",
  userName: "text-lg font-semibold text-hover-primary",
  userDesc: "text-sm font-light leading-tight -mt-1.5",
  userLocation: "text-sm text-text-secondary",

  // Stats Card
  statsCard:
    "bg-white p-3 rounded-md shadow-sm [&_.count]:text-primary [&>p]:flex [&>p]:justify-between [&>p]:items-center [&>p]:border-b last:[&>p]:border-b-0 [&>p]:py-2 text-sm text-gray-700",

  // Calendar Card
  calendarCard:
    "bg-white rounded-md shadow-sm w-full flex items-center justify-between px-4 py-2",
  calendarHeader: "flex flex-col",
  calendarTitle: "font-semibold text-base",
  calendarSubtitle: "text-sm text-gray-500",
  calendarButton: "p-2 hover:bg-gray-100 rounded-md transition",
  calendarIcon: "w-4 h-4 object-contain",
};
