import { groq } from 'next-sanity'

/**
 * Defines and exports a function that returns an object containing GraphQL
 * queries to fetch menu and footer navigation data from Sanity.
 */
const QueryFactory = () => {
  return {
    /**
     * Defines a GraphQL query to fetch menu navigation data from Sanity.
     * The query selects the first document of type 'navigation' and returns
     * its 'menu' field, which contains the menu structure.
     */
    menu: groq`*[_type=='navigation'][0]{
        "menu":Menu.items[]{
            title,
            description,
            slug,
            newTab,
            "submenu":submenu.items[]{
                title,
                description,
                slug,
                newTab,
                "page":page-> {
                    title,
                    description,
                    slug,
                },
            },
            "page":page-> {
                title,
                description,
                slug,
            },
        }     
    }`,
    /**
     * Defines a GraphQL query to fetch footer navigation data from Sanity.
     * The query selects the first document of type 'footer' and returns
     * its 'items' field, which contains the footer menu structure.
     */
    footer: groq`*[_type=='footer'][0]{
        "footer":FooterMenu.items[]{
            title,
            "submenu":submenu[]{
                title,
                slug,
                newTab
            }
        }
    }`
  }
}

export default QueryFactory
