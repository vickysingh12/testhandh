import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader'
import ArticleContent from '../../components/ArticleContent/ArticleContent'
import ArticleForm from '../../components/ArticleForm/ArticleForm'
import ArticleViewAll from '../../components/ArticleViewAll/ArticleViewAll'
import { NextSeo } from 'next-seo'

const Article = (props: any) => {
  return (
    <>
      <NextSeo
        title={props.article.seo?.seotitle}
        description={props.article.seo?.seodescription}
        />
      <Header dark={true} />

      <div className="z-10">
        <ArticleHeader
          articleAuthor={props.resultforAuthor}
          articleDetails={props.article}
        />
      </div>
      <ArticleContent articleDetails={props.article} />
      <ArticleForm />
      <ArticleViewAll
        thisArticle={props.article}
        allArticles={props.allArticles}
        text="Keep reading"
      />
      <Footer />
    </>
  )
}

export const getStaticProps = async (context: any) => {
  const queryforArticle = encodeURIComponent(
    `*[ _type == "articles" && (slug.current == "${context.params.id}") ]`
  )
  const urlforArticle = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryforArticle}`
  const resultforArticle = await fetch(urlforArticle).then((res) => res.json())
  const query = encodeURIComponent(
    `*[ _type == "articles" ][0...4]{title,image,date,readtime,slug,tag,excerpt,_createdAt}`
  )

  const Article = resultforArticle.result
  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const result = await fetch(url).then((res) => res.json())
  const allArticles = result.result

  const queryforAuthor = encodeURIComponent(
    `*[ _type == "authors" && _id == "${Article[0].author?._ref}" ]`
  )
  const urlforAuthor = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryforAuthor}`
  const resultforAuthor = await fetch(urlforAuthor).then((res) =>  res.json()).catch(e => console.log('error +/n' + e))

  const Author = resultforAuthor && resultforAuthor.result[0] || null
  if (!Article || ( Article.length == 0 )) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        article: Article[0],
        resultforAuthor: Author,
        allArticles: allArticles.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
      },
      revalidate: 120, // In seconds

    }
  }
}

// the path has not been generated.
export async function getStaticPaths() {

  const query = encodeURIComponent(
    `*[ _type == "articles" ]{slug}`
  )
  
  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const result = await fetch(url).then((res) => res.json())
  const projects = result && result.result
  const allSlugs = projects && projects.map((item:any) => {
    return item.slug.current
  })

  const paths = allSlugs.map((slug:any) => {
    return { params: { id: slug } }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}
export default Article
