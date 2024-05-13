import { FC, useState, useLayoutEffect } from 'react';
import { GlobalStyles, Container } from './styled';
import { Hero } from './hero';
import { SectionTitle } from './section_title';
import { ClientReview } from './client_review';
import { FeatureList, FeatureListProps } from './feature_list';
import {
  LightningIcon,
  DoubleArrowIcon,
  CloudIcon,
  ShieldIcon,
  ApplauseIcon,
  OpenSourceIcon,
} from '../icons';
import { FAQProps } from './faq';
import { Achievements } from './achievements';

const getIsScrolled = () => document.documentElement.scrollTop > 0;

const features: FeatureListProps['items'] = [
  {
    icon: CloudIcon,
    title: 'Cloud Native',
    description:
      'Born in the Cloud: Deploy Solaris effortlessly on AWS, handling billions of streams. Scale compute and storage resources dynamically.',
  },
  {
    icon: ShieldIcon,
    title: 'Reliable',
    description:
      'Built for Reliability: Distribute load across instances and ensure continuity with fail-fast strategies. Replicate data seamlessly to secondary storage like AWS S3.',
  },
  {
    icon: LightningIcon,
    title: 'Fast',
    description:
      'Blazing Speed: Write and read millions of records per second, with data available within milliseconds. Transparently access streaming data with minimal overhead.',
  },
  {
    icon: DoubleArrowIcon,
    title: 'Horizontally Scalable',
    description:
      'Scale at Will: Add storage instances to enhance performance and throughput. Configure resources to prioritize speed, storage, or both.',
  },
  {
    icon: OpenSourceIcon,
    title: 'Open Source',
    description:
      'Community-Powered: Solaris is fully open-source, providing a trusted foundation for data storage solutions. Quick setup for local use or cloud deployment.',
  },
  {
    icon: ApplauseIcon,
    title: 'Simple and Affordable',
    description:
      'User-Friendly Efficiency: Easily deploy clustering solutions in public or private clouds. Optimize cloud instances and leverage cost-effective long-term storage like AWS S3.',
  },
];

const additionalFeatures: FeatureListProps['items'] = [
  {
    icon: LightningIcon,
    title: 'Adapting to Dynamic Markets',
    description:
      "Meet the demands of today's dynamic market landscape, effortlessly accommodating diverse data sources.",
  },
  {
    icon: LightningIcon,
    title: 'Invest in Tomorrow',
    description:
      "As AI and ML adoption surges, Solaris ensures you're ready for the next decade of technological advancement.",
  },
  {
    icon: LightningIcon,
    title: 'Streamlined Data Access',
    description:
      'Alleviate the burden of storing and accessing large volumes of unstructured data, providing a streamlined solution for your organization.',
  },
];

const faqItems: FAQProps['items'] = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi corporis cumque debitis, eaque est fuga perspiciatis provident ratione rem?',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi corporis cumque debitis, eaque est fuga perspiciatis provident ratione rem?',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi corporis cumque debitis, eaque est fuga perspiciatis provident ratione rem?',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi corporis cumque debitis, eaque est fuga perspiciatis provident ratione rem?',
  },
  {
    question: 'How does billing work?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi corporis cumque debitis, eaque est fuga perspiciatis provident ratione rem?',
  },
  {
    question: 'How do I change my account email?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi corporis cumque debitis, eaque est fuga perspiciatis provident ratione rem?',
  },
];

const IndexPage: FC = ({}) => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    setScrolled(getIsScrolled);

    const onScroll = () => {
      setScrolled(getIsScrolled);
    };
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <Container>
      <GlobalStyles $scrolled={scrolled} />
      <Hero />
      <SectionTitle
        label="Features"
        title="Solaris: Empowering Data-driven Future"
        description="Born with horizontal scalability and simplicity in mind, Solaris works with billions of streams, petabytes of data, and gigabytes of throughput per second."
        style={{ marginBottom: 64 }}
      />
      <FeatureList items={features} />
      <ClientReview style={{ marginTop: 64 }} />
      <SectionTitle
        label="Features"
        title="Empowering Tomorrow's Data Challenges"
        description="Adapting to evolving markets and AI advancements. Simplifying data management for tomorrow's challenges."
        style={{ marginTop: 64, marginBottom: 64 }}
      />
      <FeatureList items={additionalFeatures} />
      {/* <SectionTitle
        title="Frequently Asked Questions"
        description="Everything you need to know about the product and billing."
        style={{ marginTop: 180, marginBottom: 64 }}
      />
      <FAQ items={faqItems} style={{ marginBottom: 64 }} /> */}
      <SectionTitle
        label="Launch faster"
        title="Build something great"
        description="We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and grow your business faster."
        align="start"
        style={{ marginTop: 96, marginBottom: 64 }}
      />
      <Achievements />
    </Container>
  );
};

export default IndexPage;
