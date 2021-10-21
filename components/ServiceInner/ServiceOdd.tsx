import Image from 'next/image'
import Button from '../Buttons/Button'

const ServiceOdd = (props: any) => {
  return (
    <section>
      <div
        className={`container mx-auto p-6 xl:p-0 pt-10 sm:pt-16 ${props.className}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          <div className="relative block sm:hidden">
            {props.img && (
              <Image
                loading="lazy"
                alt="img"
                src={props.img}
                className="services-img"
                height={430}
                width={577}
                layout="responsive"
                quality={100}
                placeholder="blur"
                blurDataURL={props.img}
              />
            )}
          </div>
          <div className="w-full">
            <h2 className="text-4xl mt-6 sm:mt-0 sm:text-5xl xl:text-7xl md:mr-28 xl:mr-4 font-bold tracking-normal ">
              {' '}
              {props.title}{' '}
            </h2>
            <p className="text-base xl:text-xl font-light py-3 xl:py-10 tracking-normal pr-7">
              {props.text}
            </p>
            <Button
              to={`/service/${props.slug}`}
              text="Read More"
              className="pb-3 xl:py-0"
            />
            <div className=" py-3 xl:py-6">
              <h6 className="pb-3 xl:pb-6 font-bold text-xl">Deliverables</h6>
              <div
                className={`grid sm:grid-cols-2 w-80 leading-8 ${props.classD}`}
              >
                <div>
                  <p>{props.deliverables && props.deliverables[0]}</p>
                  <p>{props.deliverables && props.deliverables[1]}</p>
                </div>
                <div className="">
                  <p>{props.deliverables && props.deliverables[2]}</p>
                  <p>{props.deliverables && props.deliverables[3]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" hidden relative sm:block">
            {props.img && (
              <Image
                loading="lazy"
                src={props.img}
                className="services-img"
                alt="img"
                height={430}
                width={577}
                layout="intrinsic"
                quality={100}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceOdd
