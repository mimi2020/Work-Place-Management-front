import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
  DescriptionOutlined,
  AutoAwesomeMosaicOutlined,
} from "@material-ui/icons/";

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboards/dashboard1",
  },
  // {
  //   title: "Autocomplete",
  //   icon: AddToPhotosOutlined,
  //   href: "/form-elements/autocomplete",
  // },
  // {
  //   title: "Buttons",
  //   icon: AspectRatioOutlined,
  //   href: "/form-elements/button",
  // },
  // {
  //   title: "Checkbox",
  //   icon: AssignmentTurnedInOutlined,
  //   href: "/form-elements/checkbox",
  // },
  // {
  //   title: "Radio",
  //   icon: AlbumOutlined,
  //   href: "/form-elements/radio",
  // },
  // {
  //   title: "Slider",
  //   icon: SwitchCameraOutlined,
  //   href: "/form-elements/slider",
  // },
  // {
  //   title: "Switch",
  //   icon: SwitchLeftOutlined,
  //   href: "/form-elements/switch",
  // },
  {
    title: "Sallon",
    icon: DescriptionOutlined,
    href: "/form-layouts/form-layouts",
  },
  {
    title: "Departement",
    icon: AutoAwesomeMosaicOutlined,
    href: "/Departements",
  },
  {
    title: "Users",
    icon: AutoAwesomeMosaicOutlined,
    href: "/Users",
  },
  {
    title: "Chart",
    icon: SwitchLeftOutlined,
    href: "/chartJS/",
  },
  {
    title: "QR",
    icon: SwitchLeftOutlined,
    href: "/App2/",
  },
  {
    title: "Scan",
    icon: SwitchLeftOutlined,
    href: "/Scan/",
  },
];

export default Menuitems;
