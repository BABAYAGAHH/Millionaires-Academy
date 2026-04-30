import { Button } from '../common/Button'

export const MobileStickyCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutralBorder bg-warmWhite/94 px-4 py-3 shadow-[0_-16px_40px_rgba(11,46,36,0.08)] backdrop-blur md:hidden">
    <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-3">
      <Button fullWidth href="/shop" size="sm">
        Explore Resources
      </Button>
      <Button fullWidth href="/book-session" size="sm" variant="secondary">
        Book Session
      </Button>
    </div>
  </div>
)
