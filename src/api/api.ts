import { client } from '@/lib/client'
import type { IFooterMenu } from '@/types/footer.interface'
import type { INavigationMenu } from '@/types/navigation.interface'

import QueryFactory from './query'

/**
 * APIFactory is a factory function that returns an object
 * containing async methods for fetching data
 * using the client and query methods.
 */
const APIFactory = () => {
  return {
    /**
     * Fetches navigation menu data from the API using the client and query.
     */
    Menu: async () => await client.fetch<INavigationMenu>(QueryFactory().menu),
    /**
     * Fetches footer menu data from the API using the client and query.
     */
    footer: async () => await client.fetch<IFooterMenu>(QueryFactory().footer)
  }
}

export default APIFactory
