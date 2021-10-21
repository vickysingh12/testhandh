import React from 'react'
import Image from 'next/image'
import Container from '../../Container/Container'
import { urlFor } from '../../../sanity'

const ProjectDetailFeaturedImg = ({ ImageForDesktop, ImageForMobile }: any) => {
  return (
    <section className="featured-img">
      <Container>
        <div className="hidden xl:block">
          <Image
            loading="lazy"
            src={`${urlFor(ImageForDesktop).url() as any}&fm=webp`}
            alt="feature-img"
            layout="responsive"
            height="70"
            width="100"
            quality={75}
            
          />
        </div>
        <div className="block xl:hidden">
          <Image
            loading="lazy"
            src={`${urlFor(ImageForMobile).url() as any}&fm=webp`}
            alt="feature-img"
            className="img-fluid"
            height={400}
            width={300}
            layout="responsive"
            quality={75}
            
          />
        </div>
      </Container>
    </section>
  )
}

export default ProjectDetailFeaturedImg
