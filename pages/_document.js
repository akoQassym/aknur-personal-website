import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Aknur Kassym - startup, tech enthusiast"
        />
        <meta
          name="image"
          content="https://media.licdn.com/dms/image/D4D03AQFkbL-i4s7WCg/profile-displayphoto-shrink_200_200/0/1667836613317?e=1698278400&v=beta&t=_edNxLi4LRz7g1mF32Ur5ydtas7QVIC0sigArR93sp4"
        />
        <meta itemProp="name" content="Aknur" />
        <meta
          itemProp="description"
          content="Aknur Kassym - startup, tech enthusiast"
        />
        <meta
          itemProp="image"
          content="https://media.licdn.com/dms/image/D4D03AQFkbL-i4s7WCg/profile-displayphoto-shrink_200_200/0/1667836613317?e=1698278400&v=beta&t=_edNxLi4LRz7g1mF32Ur5ydtas7QVIC0sigArR93sp4"
        />
        <meta name="og:title" content="Aknur Kassym - FullStack Developer" />
        <meta
          name="og:description"
          content="Aknur Kassym - startup, tech enthusiast"
        />
        <meta
          name="og:image"
          content="https://media.licdn.com/dms/image/D4D03AQFkbL-i4s7WCg/profile-displayphoto-shrink_200_200/0/1667836613317?e=1698278400&v=beta&t=_edNxLi4LRz7g1mF32Ur5ydtas7QVIC0sigArR93sp4"
        />
        <meta name="og:url" content="https://aknur-website.vercel.app/" />
        <meta name="og:site_name" content="Aknur" />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
