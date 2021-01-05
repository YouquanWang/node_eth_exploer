import Vue from 'vue'
import '../style/element-variables.scss'
import {
  Button,
  Row,
  Col,
  Input,
  Switch,
  Pagination,
  Form,
  FormItem,
  Select,
  Option,
  Upload,
  Dialog,
  Checkbox,
  Tree,
  Card,
  Menu,
  Submenu,
  MenuItem,
  Message,
  MessageBox,
  Container,
  Aside,
  Dropdown,
  MenuItemGroup,
  Header,
  DropdownMenu,
  DropdownItem,
  Main,
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  Table,
  TableColumn,
  Cascader,
  InputNumber,
  DatePicker,
  Progress,
  Image,
  TabPane,
  Tabs,
  Popover
} from 'element-ui'

Vue.use(Button)
Vue.use(Tree)
Vue.use(Card)
Vue.use(TabPane)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Pagination)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Dropdown)
Vue.use(MenuItemGroup)
Vue.use(Header)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Main)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Avatar)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Cascader)
Vue.use(InputNumber)
Vue.use(DatePicker)
Vue.use(Progress)
Vue.use(Image)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Popover)
Vue.component(Message.name, Message)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = (msg, type) => {
  Message({
    message: msg,
    type: type,
    center: true,
    offset: 100,
    duration: 1000
  })
}
