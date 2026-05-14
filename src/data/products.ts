import productsJson from './products.json'
import type { Product } from '../types'
import { collectionProducts } from './collectionProducts'

export const products = [...(productsJson as Product[]), ...collectionProducts]
