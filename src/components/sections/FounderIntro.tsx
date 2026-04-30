import { brandAssets } from '../../data/brandAssets'
import { AnimatedSection } from '../common/AnimatedSection'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { SectionHeader } from '../common/SectionHeader'

export const FounderIntro = () => (
  <AnimatedSection className="pt-14 sm:pt-16 lg:pt-20">
    <Container>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-neutralBorder bg-cream/60 p-4 shadow-soft">
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              alt="Nickie Nicole, founder of Millionaires Academy"
              className="aspect-[4/5] w-full object-cover object-[center_18%]"
              loading="lazy"
              src={brandAssets.founder.mentorship}
            />
          </div>
        </div>
        <div>
          <SectionHeader
            description="Millionaires Academy was created to help ambitious entrepreneurs stop guessing and start building with structure. Through business mentorship, vendor resources, custom website support, and practical launch blueprints, the platform helps women and aspiring business owners move from idea to execution with clarity and confidence."
            eyebrow="Meet Your Business Mentor"
            title="The vision behind Millionaires Academy."
          />
          <div className="mt-8">
            <Button href="/about" variant="outline">
              Read the Story
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </AnimatedSection>
)
