import Image from 'next/image'
import Client1 from '../../public/assets/client/Client-1.webp'
import Client3 from '../../public/assets/client/Client-3.webp'
import Client4 from '../../public/assets/client/Client-4.webp'
import Client5 from '../../public/assets/client/client-5.webp'
import Client6 from '../../public/assets/client/Client-6.webp'

const ClientsServicePage = () => {
  return (
    <section className="clients">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-gray-100 p-8 xl:p-16 ">
          <div
            className="flex items-center justify-center mt-4 sm:mt-20"
            style={{ marginLeft: '-15%' }}
          >
            <div className="p-10 pr-16">
              {
                <Image
                  loading="lazy"
                  alt="img"
                  src={Client1}
                  height={96}
                  width={104}
                  quality={75}
                  placeholder="blur"
                />
              }
            </div>
            <div className="p-10">
              <Image
                alt="img"
                loading="lazy"
                src="/assets/iconz.svg"
                height={80}
                width={150}
                quality={75}
              />
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ marginLeft: '-15%' }}
          >
            <div className="p-10 pr-16">
              {
                <Image
                  loading="lazy"
                  alt="img"
                  src={Client3}
                  height={40}
                  width={166}
                  quality={75}
                  placeholder="blur"
                />
              }
            </div>
            <div className="p-10">
              {
                <Image
                  loading="lazy"
                  alt="img"
                  src={Client4}
                  height={64}
                  width={71}
                  quality={75}
                  placeholder="blur"
                />
              }
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ marginLeft: '-15%' }}
          >
            <div className="p-10 pr-16">
              {
                <Image
                  loading="lazy"
                  alt="img"
                  src={Client5}
                  height={50}
                  width={135}
                  quality={75}
                  placeholder="blur"
                />
              }
            </div>
            <div className="p-10">
              {
                <Image
                  alt="img"
                  loading="lazy"
                  src={Client6}
                  height={64}
                  width={170}
                  quality={75}
                  placeholder="blur"
                />
              }
            </div>
          </div>
        </div>

        <div
          className={`bg-black px-10 pt-80 pb-10 xl:pt-96 xl:p-16 sm:block flex`}
        >
          <h2 className="gradient-text font-semibold text-white text-4xl sm:text-5xl xl:text-7xl md:mr-20 xl:mr-36 leading-8 tracking-tight pb-1">
            You???re in <br />
            good <br />
            company
          </h2>
        </div>
      </div>
    </section>
  )
}

export default ClientsServicePage
