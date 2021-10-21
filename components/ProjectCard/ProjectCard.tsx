import { urlFor } from '../../sanity'
import Image from 'next/image'
import Link from 'next/link'

type IProjectcardProps = {
  propsData: {
    image: string
    title: string
    category: string
    slug: any
    heading: string
  }
}
export default function Projectcard(props: IProjectcardProps) {
  const data = props.propsData
  console.log(typeof data.image);
  
  
  return (
    <section className="projects">
      <Link href={data.slug ? `/work/${data.slug.current}` : '#'}>
        <a className="cursor:pointer">
          <div className="flex flex-col mt-0 xl:mt-6 ">
            {
              data.image &&
            ((typeof data.image == 'string' && (
              <Image
                loading="lazy"
                alt="img"
                src={`/assets/${data.image}.png`}
                height={672}
                quality={75}
                width={608}
                layout="responsive"
                placeholder="blur"
                blurDataURL={`/assets/${data.image}.png`}
              />
            )) || (
              <Image
                loading="lazy"
                alt="img"
                src={`${urlFor(data.image).url() as any}&fm=webp`}
                height={672}
                quality={75}
                width={608}
                layout="responsive"
                placeholder="blur"
                blurDataURL={`${urlFor(data.image).url() as any}&fm=webp`}
              />
            ))
            }
            <div className="flex-1 text-black font-inter mx-10 md:mx-0 pt-6">
              <h6 className="text-base sm:text-1xl font-medium">
                {data?.heading}
              </h6>
            </div>
            <div className="flex-1 text-black font-inter mx-10 md:mx-0 pb-6 mt-2">
              <p className="text-1xl sm:text-xl">{data?.title}</p>
            </div>
          </div>
        </a>
      </Link>
    </section>
  )
}
