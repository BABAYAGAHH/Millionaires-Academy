import productsJson from './products.json'
import type { Product } from '../types'

export const products = productsJson as Product[]
