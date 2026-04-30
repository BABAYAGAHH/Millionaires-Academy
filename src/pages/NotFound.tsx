import { AnimatedSection } from '../components/common/AnimatedSection'
import { Button } from '../components/common/Button'
import { Container } from '../components/common/Container'
import { usePageTitle } from '../utils/usePageTitle'

export const NotFound = () => {
  usePageTitle('Page Not Found | Millionaires Academy')

  return (
    <AnimatedSection className="pt-16">
      <Container>
        <div className="rounded-[2rem] border border-neutralBorder bg-white px-8 py-16 text-center shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-mutedGold">
            404
          </p>
          <h1 className="mt-5 text-4xl font-semibold text-softBlack sm:text-5xl">
            This page could not be found.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted">
            The page may have moved, the link may be incomplete, or the path no
            longer exists. Use the button below to return to Millionaires
            Academy.
          </p>
          <div className="mt-8">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
