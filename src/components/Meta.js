import React from 'react'
import Head from 'next/head'

const Meta = ({
  title = 'NextJS Express Starter Kit',
  description = 'Starter kit for NextJS and Express.js',
  keywords = 'NextJS, Express, Starter Kit, MERN, Node',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Head>
  )
}

export default Meta
