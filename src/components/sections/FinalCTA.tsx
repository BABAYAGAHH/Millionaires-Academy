import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export const FinalCTA = () => (
  <AnimatedSection className="pt-24">
    <Container>
      <div className="luxury-gradient overflow-hidden rounded-[2rem] px-8 py-12 text-center text-warmWhite shadow-premium sm:px-10 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-mutedGold">
          Ready When You Are
        </p>
        <h2 className="text-balance mt-5 text-3xl font-semibold leading-tight text-warmWhite sm:text-4xl lg:text-[3.4rem]">
          Your business does not need more confusion. It needs structure.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-warmWhite/82 sm:text-lg">
          Start with the resource, session, or support package that matches your
          current business stage.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/shop" size="lg" variant="secondary">
            Explore Resources
          </Button>
          <Button href="/book-session" size="lg" variant="outline">
            Book One-on-One
          </Button>
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
