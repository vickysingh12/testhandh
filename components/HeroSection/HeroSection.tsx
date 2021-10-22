import Image from 'next/image'
import HeadingLarge from '../Headings/HeadingLarge'
import Button from '../Buttons/Button'
import heroimg from '../../public/assets/home/hero-img.webp'

export default function HeroSection() {
  return (
    <div className="xl:container mx-auto py-6 px-6 xl:px-0 xl:py-24 xl:pb-28 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="block sm:hidden">
          <Image
            src={heroimg}
            alt="people-researching-websites"
            height={317}
            width={375}
            layout="responsive"
            loading="lazy"
            quality={75}
          />
        </div>
        <div className="inner">
          <HeadingLarge
            title="We believe the best creativity is done in collaboration with you."
            class=" md:mr-28 xl:mr-4 w-full xl:w-101 pb-5 position-heading"
          />
          <Button
            asLink
            text="Request a call"
            className="w-full"
            to="/contact"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            loading="lazy"
            src={heroimg}
            className="object-fill"
            alt="people-researching-websites"
            height="570"
            width="674"
            layout="responsive"
            placeholder="blur"
            quality={75}
          />
        </div>
      </div>
    </div>
  )
}
