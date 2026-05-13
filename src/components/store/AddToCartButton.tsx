import type { Product } from '../../types'
import { useCart } from '../../context/cartStore'
import { getDefaultVariant, getVariantById } from '../../utils/productUtils'
import { Button } from '../common/Button'

interface AddToCartButtonProps {
  product: Product
  variantId?: string
  quantity?: number
  label?: string
  className?: string
  fullWidth?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  onAdded?: () => void
}

export const AddToCartButton = ({
  product,
  variantId,
  quantity = 1,
  label = 'Add to Cart',
  className,
  fullWidth,
  size = 'md',
  variant = 'primary',
  onAdded,
}: AddToCartButtonProps) => {
  const { addItem } = useCart()
  const selectedVariant = variantId ? getVariantById(product, variantId) : getDefaultVariant(product)
  const isDisabled = !selectedVariant?.available

  return (
    <Button
      className={className}
      disabled={isDisabled}
      fullWidth={fullWidth}
      onClick={() => {
        if (!selectedVariant) {
          return
        }

        addItem(product, selectedVariant.id, quantity)
        onAdded?.()
      }}
      size={size}
      variant={variant}
    >
      {isDisabled ? 'Sold Out' : label}
    </Button>
  )
}
