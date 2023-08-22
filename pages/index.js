import {
  Link,
  Box,
  Text,
  Heading,
  GridItem,
  Image,
  Stack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Grid } from '../components/Grid';
import { Experience } from '../components/Experience';
import { Avatar } from '../components/Avatar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Aknur - FullStack Developer</title>
      </Head>

      <Box py="115px" px={4} maxWidth={700} mx="auto">
        <Grid
          fluid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
          mb={10}
          alignItems="center"
        >
          <GridItem colSpan={{ base: 3, lg: 1 }}>
            <Avatar />
          </GridItem>
          <GridItem colSpan={3}>
            <Box>
              <Heading as="h1" size="lg">
                <Text align={{ base: 'center', lg: 'left' }}>
                  Hello👋, I&apos;m Aknur
                </Text>
              </Heading>
              <Box my={2}>
                <Text align={{ base: 'center', lg: 'left' }}>
                  Junior at New York University 🗽
                </Text>
                <Text align={{ base: 'center', lg: 'left' }}>
                  Product-oriented FullStack Developer 💻
                </Text>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'center', lg: 'flex-start' }}
                ml={-1}
              >
                <Box mr={2}>
                  <Link
                    color="white"
                    opacity={0.5}
                    href="https://www.linkedin.com/in/aknur-kassym/"
                    isExternal
                  >
                    <Image
                      boxSize="35px"
                      mb={4}
                      src={'linkedin.svg'}
                      alt={'Linkedin'}
                      objectFit="cover"
                    />
                  </Link>
                </Box>
                <Box mr={3.5}>
                  <Link
                    color="white"
                    opacity={0.5}
                    href="https://github.com/akoQassym"
                    isExternal
                  >
                    <Image
                      boxSize="30px"
                      mb={4}
                      src={'github.svg'}
                      alt={'Github'}
                      objectFit="cover"
                    />
                  </Link>
                </Box>
                <Box mr={2}>
                  <Link
                    color="white"
                    opacity={0.5}
                    href="mailto:ak8827@nyu.edu"
                    isExternal
                  >
                    <Image
                      boxSize="30px"
                      mb={4}
                      src={'gmail.svg'}
                      alt={'Gmail'}
                      objectFit="cover"
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={2}>
            About
          </Heading>
          <Stack spacing={3}>
            <Text>
              Welcome to my page, I&apos;m delighted to see you here! My name is
              Aknur Kassym, and I am an{' '}
              <Text as="i">
                <Text as="b">international student from Kazakhstan</Text>
              </Text>
              , studying{' '}
              <Text as="mark">
                Computer Science and Applied Mathematics at New Your University
              </Text>
              . Alongside my passion for Software Engineering and Machine
              Learning, I am deeply interested in the startup world: building
              dynamic, highly scalable and creative products, which solve
              real-world problems.
            </Text>
            <Text>
              Beyond academics, I find joy in reading books, doing Calisthenics
              and playing / watching / discussing sports, like F1, football,
              basketball. Please feel free to reach out and connect!
            </Text>
          </Stack>
        </Box>
        <Box mb={14}>
          <Heading as="h2" size="md" mb={10}>
            Education
          </Heading>
          <Experience
            href="https://nyuad.nyu.edu/en/"
            side="2021 - Expected 2025"
            title="New York University Abu Dhabi"
            desc={['B.S. of Computer Science and Applied Mathematics']}
            stack="Relevant Coursework: Computer Systems Organization, Algorithms, Data Structures, Linear Algebra, Probability
            Statistics, Multi-variable Calculus, Discrete Mathematics"
          />
          <Experience
            href="https://spcs.stanford.edu/"
            side="2016"
            title="Stanford Pre-Collegiate Studies"
            desc={[
              'Granted a full scholarship to attend the Pre-Collegiate program at Stanford University',
            ]}
          />

          <Heading as="h2" size="md" mb={10}>
            Work Experience
          </Heading>
          <Experience
            href="https://www.linkedin.com/in/aknur-kassym/"
            side="Dec 2022 - Jul 2023"
            title="Founder & FullStack Developer at Shopy"
            desc={[
              'Shopy is a mobile CMS that allows to launch a personal storefront in 15 minutes. We help small business owners in Kazakhstan, who sell through Instagram, WhatsApp and TikTok, build an online store with up-to-date catalog, increase sales through repeat purchases, and identify the most popular products with build-in analytics.',
              '- Conducted over 25 problem interviews with small business owners to identify their pain points',
              '- Supervised and actively participated in the development of the mobile application for iOS and Android platforms',
              '- Pitched at the demo-day of the ABC Incubation Program by NURIS',
              '- Connected over 35 stores and reached an MRR of $900',
            ]}
            stack="React Native • Customer Development • Sales • Product Management"
          />
          <Experience
            href="https://one.kz/"
            side="Feb 2022 - Sep 2022"
            title="Frontend Engineer at One Technologies (Forte)"
            desc={[
              'Subsidiary company of Forte - a leading bank in Kazakhstan',
              '- Deployed an LDAP-authenticated peer-assessment platform utilizing asynchronous GraphQL requests, enabling HR department to survey over 530 employees across 20 teams',
              '- Engineered an automated dynamic form system with PDF generation, reducing employee onboarding time from 2 days to 1 hour, replacing the previous manual paper-based process',
              "- Collaboratively developed company's main website using Next.js for server-side rendering, yielding a notable increase in loading speed",
            ]}
            stack="React • Next JS • TypeScript • GraphQL • Strapi"
          />
          <Experience
            href="https://nyuad.nyu.edu/en/academics/divisions/engineering.html"
            side="Aug 2022 - Dec 2022"
            title="Undergraduate Teaching Assistant"
            desc={[
              'Mentored 9 teams with 25+ students of Computer Programming for Engineers class with term project development on C++ and Unity, conducting sessions to debug programs and explain key Computer Science concepts',
            ]}
            stack="C++ • Unity"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Side Projects
          </Heading>

          <Experience
            href="https://github.com/akoQassym/shopy-mobile"
            image="shopy-logo.png"
            side="2023"
            title="Shopy Mobile App"
            desc={[
              'Mobile CMS designed to empower small business owners in Kazakhstan who sell through Instagram, WhatsApp, and TikTok. With Shopy, you can launch your own personalized online store in just 15 minutes. Elevate your sales, enhance your catalog, and harness the power of built-in analytics to identify top-performing products.',
            ]}
            stack="React Native • Expo • Firebase Functions"
          />
          <Experience
            href="https://github.com/akoQassym/spotify-group-player"
            image="spotify.svg"
            side="2021"
            title="Spotify Group Player"
            desc={[
              "Full stack web application that lets users from various devices converge in a virtual room to collectively enjoy and control music streamed directly from the host's personal Spotify account.",
            ]}
            stack="Django • React • Webpack • Babel • Spotify API • SASS"
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Skills
          </Heading>
          <Experience
            side="Programming Languages"
            title="JavaScript, TypeScript, Python, HTML/CSS, C/C++"
            mb={4}
          />
          <Experience
            side="Frameworks and Tools"
            title="React JS, Next JS, Firebase, Strapi, GraphQL, SQL, SCSS, Webpack, Django, Git"
            mb={4}
          />

          <Heading as="h2" size="md" mt={14} mb={10}>
            Links
          </Heading>
          <Experience
            side="Github"
            title="@akoQassym"
            href="https://github.com/akoQassym"
            mb={4}
          />
          <Experience
            side="LinkedIn"
            title="aknur-kassym"
            href="https://www.linkedin.com/in/aknur-kassym/"
            mb={4}
          />
          <Experience
            side="Gmail"
            title="ak8827@nyu.edu"
            href="mailto:ak8827@nuy.edu"
            mb={4}
          />
          <Experience
            side="Instagram"
            title="@ako_q"
            href="https://www.instagram.com/ako_q/"
            mb={4}
          />
        </Box>
      </Box>
    </>
  );
}
