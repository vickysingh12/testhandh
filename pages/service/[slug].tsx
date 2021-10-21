import React from 'react'
import ServiceDetailBanner from '../../components/ServiceDetailBanner/ServiceDetailBanner'
import DarkSection from '../../components/DarkSection/DarkSection'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ScheduleCall from '../../components/ScheduleCall/ScheduleCall'
import ServiceDeliver from '../../components/ServiceDeliver/ServiceDeliver'
import { NextSeo } from 'next-seo'
import ServicesFact from '../../components/ServicesFact/ServicesFact'

const ServicesDetails = (props: any) => {

  return (
    <>
      <NextSeo
        title={props.project.seo.seotitle}
        description={props.project.seo.seodescription}
      />
      <Header dark={true} />
      <ServiceDetailBanner service={props.project} />
      <DarkSection service={props.project} />
      <ServiceDeliver />
      <ServicesFact />
      <ScheduleCall />
      <Footer />
    </>
  )
}

export const getStaticProps = async (context:any) => {
  const queryforProject = encodeURIComponent(
    `*[ _type == "services" && (slug.current == "${context.params.slug}") ]`
  )

  const urlforProject = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryforProject}`
  const resultforProject = await fetch(urlforProject).then((res) => res.json())

  const service = resultforProject.result

  if (!service || (service.length == 0)) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        project: service[0],
        //    resultforAuthor: Author
      },
      revalidate: 120, // In seconds

    }
  }
}

// the path has not been generated.
export async function getStaticPaths() {

  const query = encodeURIComponent(
    `*[ _type == "services" ]{slug}`
  )
  
  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const result = await fetch(url).then((res) => res.json())
  const services = result.result
  const allSlugs = services.map((item:any) => {
    return item.slug.current
  })

  const paths = allSlugs.map((slug:any) => {
    return { params: { slug: slug } }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}
export default ServicesDetails
