import React, { useEffect, useState } from 'react'
import Button from '../Buttons/ButtonDark'
import urlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'
import Image from 'next/image'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

const urlFor = (source: SanityImageSource) =>
  urlBuilder({ projectId: 'xjqjsaem', dataset: 'handh' }).image(source)

const BlockRenderer = (props: {
  node: { style?: string | undefined }
  children: {} | null | undefined
}) => {
  const { style = 'normal' } = props.node

  if (style == 'h2') {
    return React.createElement(
      style,
      { className: `text-102 lg:text-5xl font-bold mb-6` },
      props.children
    )
  }

  if (style == 'h3') {
    return React.createElement(
      style,
      { className: `text-1xl lg:text-xl lg:text-xl font-semibold mb-6` },
      props.children
    )
  }

  if (style == 'title') {
    return <p className={`text-md font-normal mb-8`}>{props.children}</p>
  }

  if (style == 'normal') {
    return (
      <p className={`text-1xl lg:text-xl font-normal mb-6`}>{props.children}</p>
    )
  }

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    )
  }

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>
  }

  // Fall back to default handling
  return PortableText.defaultSerializers.types.block(props)
}

const ListRenderer = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => {
  return <ul className="list-disc	mt-3 pl-4">{props.children}</ul>
}

const ListItemRenderer = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => {
  return (
    <li className="text-1xl lg:text-lg font-normal mb-5">{props.children}</li>
  )
}

const ImageRenderer = (props: {
  node: {
    asset: any
    caption: any
  }
  children:
    | string
    | number
    | boolean
    | {}
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactNodeArray
    | React.ReactPortal
    | null
    | undefined
}) => {
  return (
    <div className="mb-2 lg:mb-14 w-full max-w-3xl dynamicImage">
      <div className="relative h-96	mb-4 w-full">
        <Image
            loading="lazy"
          src={urlFor(props.node.asset).url() as string}
          layout="fill"
          alt="article"
          objectFit="cover"
          quality="100"
          placeholder="blur"
          blurDataURL={urlFor(props.node.asset).url() as string}
        />
        {props.children}
      </div>
      {props.node.caption && (
        <div className="hidden lg:block text-left text-base font-normal text-gray-medium-2 px-2 whitespace-nowrap">
          {props.node.caption}
        </div>
      )}
    </div>
  )
}

const ArticleContent = (props: {
  articleDetails: { content: any; sizeChart: any }
}) => {
  const [value, setvalue] = useState(' ')
  useEffect(() => {
    let allChildElementsOfMain: any
    let insightsBox = document.getElementById('selecttoMove')

    if (document.querySelector('.dynamic')?.childNodes) {
      let dynamicMain = document.querySelector('.dynamic')
      allChildElementsOfMain =
        dynamicMain && Array.from(dynamicMain?.childNodes)
    }

    let indexsOfImages: any = []

    allChildElementsOfMain.forEach((e: any, i: number) => {
      if (e.classList.contains('dynamicImage')) indexsOfImages.push(i)
    })

    let chunksOfChildElements: any = []
    let startindex = 0
    indexsOfImages &&
      indexsOfImages.forEach((item: any) => {
        chunksOfChildElements.push(
          allChildElementsOfMain.slice(startindex, item + 1)
        )
        startindex = item + 1
      })
    chunksOfChildElements.push(
      allChildElementsOfMain && allChildElementsOfMain.slice(startindex)
    )
    chunksOfChildElements.forEach((item: any, index: number) => {
      //removing images
      if (index == chunksOfChildElements.length - 1) {
      } else {
        item.splice(item.length - 1, 1)
      }
    })
    chunksOfChildElements &&
      chunksOfChildElements.forEach((item: any) => {
        //wrapping chunks into div
        let wrapper = document.createElement('div')
        wrapper && wrapper.setAttribute('class', 'px-6 mb-0 lg:mb-10')
        item && item[0] && item[0]?.parentNode?.insertBefore(wrapper, item[0])
      })
    let stronginP = document.querySelectorAll('p strong:only-child')
    Array.from(stronginP).forEach((item: any) => {
      item.parentNode &&
        item.parentNode?.setAttribute(
          'class',
          'text-1xl lg:text-xl font-normal'
        )
    })
    let dynamic = document.querySelector('.dynamic')

    if (insightsBox && insightsBox.parentNode && dynamic) {
      dynamic.insertBefore(
        insightsBox,
        dynamic.childNodes[dynamic?.children.length / 2]
      )
    }
  }, [])

  return (
    <div className=" maxWidthSet m-auto">
      <PortableText
        blocks={props.articleDetails.content}
        serializers={{
          types: { block: BlockRenderer, image: ImageRenderer },
          list: ListRenderer,
          listItem: ListItemRenderer,
          marks: {
            strong: (props: any) => <strong>{props.children}</strong>,
            em: (props: any) => <em>{props.children}</em>,
            code: (props: any) => <code>{props.children}</code>,
            link: (props: any) => {
              return (
                <a
                  target="_blank"
                  href={props.mark.href}
                  className="cursor-pointer	break-all	 font-bold"
                >
                  {props.children}
                </a>
              )
            },
          },
        }}
        projectId="xjqjsaem"
        dataset="handh"
        className="dynamic mt-12"
      />
      {/* testing code for table .you can remove this div */}
      <div>
        <table>
          {props.articleDetails.sizeChart &&
            props.articleDetails.sizeChart.rows.map((item: any) => {
              return (
                <tr>
                  {item.cells.map(
                    (
                      itemchild:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined
                    ) => {
                      return <td>{itemchild}</td>
                    }
                  )}
                </tr>
              )
            })}
        </table>
      </div>

      <div
        id="selecttoMove"
        className="bg-black text-white w-full max-w-3xl mx-auto p-10 xl:pr-32 mb-12"
      >
        <h3 className="gradient-text text-23xl lg:text-21xl font-bold mb-8">
          Do you want some fresh insights in your inbox?
        </h3>
        <form
          action="https://hhworks.us6.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="981e7cf38eb99a9fc57899f5b" />
          <input type="hidden" name="id" value="6cdc471fb1" />
          <input
            style={{
              outline: 'none',
            }}
            type="email"
            className="bg-gray-medium placeholder-gray-50 p-4 w-full mb-8"
            placeholder="Your fancy email"
            autoCapitalize="off"
            autoCorrect="off"
            name="MERGE0"
            id="MERGE0"
            required
            size={25}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />

          <Button text="Send" />
          <input
            type="hidden"
            name="ht"
            value="593f49d76f30b563a2bc2b9a789869584e71e73a:MTYyNDQ1Njg3NS45Mzk3"
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
      </div>
    </div>
  )
}

export default ArticleContent
