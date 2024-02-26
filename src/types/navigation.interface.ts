/**
 * Interface representing a page link.
 */
interface IPageLink {
  title: string // The title of the page link.
  description: string // The description of the page link.
  slug: string // The slug of the page link.
}

/**
 * Interface representing a menu item.
 */
interface IMenuItem {
  title: string // The title of the menu item.
  description: string // The description of the menu item.
  newTab: boolean // Indicates whether the link should open in a new tab.
  slug: string // The URL link for the menu item.
  submenu?: IMenuItem[] // Optional submenu items.
  page: IPageLink // The page link associated with the menu item.
}

/**
 * Interface representing a navigation menu.
 */
export interface INavigationMenu {
  menu: IMenuItem[] // Array of menu items.
}
