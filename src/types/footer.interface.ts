interface ISubmenu {
  title: string
  newTab: boolean
  slug: string
}

interface IFooterItem {
  title: string
  submenu?: ISubmenu[]
}

export interface IFooterMenu {
  footer: IFooterItem[]
}
