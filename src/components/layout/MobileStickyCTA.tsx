import { Button } from '../common/Button'

export const MobileStickyCTA = () => (
  <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-forest/85 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-16px_40px_rgba(11,46,36,0.18)] backdrop-blur-xl md:hidden">
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
