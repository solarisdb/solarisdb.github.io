import { FC, useState, useLayoutEffect } from 'react';
import { GlobalStyles, Container, SchemaFeatureDigit, BottomSection, BottomWave } from './styled';
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
import { SchemaSvg } from './schema';
import { Aside } from './aside';
import { HeroButton, HeroButtons } from './hero/styled';

const getIsScrolled = () => document.documentElement.scrollTop > 0;

const features: FeatureListProps['items'] = [
  {
    icon: CloudIcon,
    title: 'Born in the Cloud',
    description:
      'Deploy Solaris effortlessly on AWS, handling billions of streams. Scale compute and storage resources dynamically.',
  },
  {
    icon: ShieldIcon,
    title: 'Built for Reliability',
    description:
      'Distribute load across instances and ensure continuity with fail-fast strategies. Replicate data seamlessly to secondary storage like AWS S3.',
  },
  {
    icon: LightningIcon,
    title: 'Blazing Speed',
    description:
      'Write and read millions of records per second, with data available within milliseconds. Transparently access streaming data with minimal overhead.',
  },
  {
    icon: DoubleArrowIcon,
    title: 'Scale at Will',
    description:
      'Add storage instances to enhance performance and throughput. Configure resources to prioritize speed, storage, or both.',
  },
  {
    icon: OpenSourceIcon,
    title: 'Community-Powered',
    description:
      'Solaris is fully open-source, providing a trusted foundation for data storage solutions. Quick setup for local use or cloud deployment.',
  },
  {
    icon: ApplauseIcon,
    title: 'User-Friendly Efficiency',
    description:
      'Easily deploy clustering solutions in public or private clouds. Optimize cloud instances and leverage cost-effective long-term storage like AWS S3.',
  },
];

const schemaFeatures: FeatureListProps['items'] = [
  {
    icon: () => <SchemaFeatureDigit>1</SchemaFeatureDigit>,
    title: 'Versatile Data Intake',
    description:
      'Receive data records from diverse sources, handling gigabytes of data per second with ease. Multiple streams facilitate data separation for efficient retrieval.',
  },
  {
    icon: () => <SchemaFeatureDigit>2</SchemaFeatureDigit>,
    title: 'Schema-less Flexibility',
    description:
      "Schema-less design, allowing for unrestricted data record handling. Utilize 'compute' for in-house processing or offload heavier transformations to external cloud services like Databricks.",
  },
  {
    icon: () => <SchemaFeatureDigit>3</SchemaFeatureDigit>,
    title: 'Efficient Querying',
    description:
      'Use query language for effortless data retrieval. Access both raw and transformed data stored within Solaris streams, empowering applications such as machine learning, data management, and analytics.',
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

const useCases: FeatureListProps['items'] = [
  {
    icon: LightningIcon,
    title: 'ML Data Pipelines',
    description:
      'Streamline ML data storage and transformation, ensuring agility in workflows and seamless integration with compute tools.',
    link: '/use-cases',
  },
  {
    icon: LightningIcon,
    title: 'Backup Storage for Kafka Streams',
    description:
      'Ensure data durability and accessibility with Solaris as a reliable long-term storage solution for Kafka backups, facilitating seamless data replay.',
    link: '/use-cases',
  },
  {
    icon: LightningIcon,
    title: 'Data Stream Storage',
    description:
      'Efficiently store and analyze vast data streams, simplifying data management and enabling straightforward retrieval for analysis.',
    link: '/use-cases',
  },
  {
    icon: LightningIcon,
    title: 'Application and Audit Logs',
    description:
      'Write and read data at gigabytes per second, ensuring fast and efficient logging. Ideal for storing application and audit logs without compromising speed',
    link: '/use-cases',
  },
];

const futureFeatures: FeatureListProps['items'] = [
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
  {
    icon: LightningIcon,
    title: 'Unleash Your Data Potential',
    description:
      'Seamlessly integrate, analyze, and derive insights from diverse data sources, empowering your organization to make informed decisions and drive innovation.',
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
        label="Overview"
        title="Solaris for Seamless Data Integration"
        description="Optimized Operations, Flexible Processing, and Streamlined Querying"
        style={{ marginBottom: 64, marginTop: 96, maxWidth: 1024 }}
      />
      <SchemaSvg style={{ marginBottom: 64 }} />
      <FeatureList items={schemaFeatures} />
      <Aside contentPosition="right" style={{ marginTop: 96 }}>
        <SectionTitle
          label="Use Cases"
          title="Versatile Solutions for Every Scenario"
          description="From ML Data Pipelines to Stream Storage, Solaris is Your Reliable Partner"
          style={{ marginBottom: 64 }}
          align="end"
        />
        <FeatureList items={useCases} />
      </Aside>
      <ClientReview style={{ marginTop: 64 }} />
      <SectionTitle
        label="Features"
        title="Empowering Data-driven Future"
        description="Born with horizontal scalability and simplicity in mind, Solaris works with billions of streams, petabytes of data, and gigabytes of throughput per second."
        style={{ marginBottom: 96, marginTop: 96 }}
      />
      <FeatureList items={features} style={{ marginBottom: 96 }} />
      <BottomSection>
        <SectionTitle
          title="Start right now"
          description="Meet tomorrow's challenges. Adapt to evolving markets and AI advancements. "
          style={{ marginBottom: 40 }}
        />
        <HeroButtons>
          <HeroButton href="/docs" data-type="secondary">
            Learn more
          </HeroButton>
          <HeroButton href="/docs" data-type="primary">
            Get started
          </HeroButton>
        </HeroButtons>
      </BottomSection>
      <BottomWave />
      {/* <SectionTitle
        label="Features"
        title="Empowering Tomorrow's Data Challenges"
        description="Adapting to evolving markets and AI advancements. Simplifying data management for tomorrow's challenges."
        align="start"
        style={{ marginTop: 64, marginBottom: 64 }}
      />
      <Illustrated imageProps={{ fill: true, src: secondPictureSrc, alt: '' }}>
        <FeatureList items={futureFeatures} style={{ ['--feature-width' as any]: '320px' }} />
      </Illustrated>
      <SectionTitle
        title="Frequently Asked Questions"
        description="Everything you need to know about the product and billing."
        style={{ marginTop: 180, marginBottom: 64 }}
      /> */}
      {/* <FAQ items={faqItems} style={{ marginBottom: 64 }} /> */}
    </Container>
  );
};

export default IndexPage;
