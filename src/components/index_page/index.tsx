import { FC, useState, useLayoutEffect } from 'react';
import { GlobalStyles, Container } from './styled';
import { Hero } from './hero';
import { SectionTitle } from './section_title';
import { ClientReview } from './client_review';
import { FeatureList, FeatureListProps } from './feature_list';
import { LightningIcon } from '../icons';
import { FAQ, FAQProps } from './faq';
import { Achievements } from './achievements';

const getIsScrolled = () => document.documentElement.scrollTop > 0;

const features: FeatureListProps['items'] = [
  {
    icon: LightningIcon,
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    icon: LightningIcon,
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    icon: LightningIcon,
    title: 'Manage your team with reports',
    description:
      'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
  },
  {
    icon: LightningIcon,
    title: 'Connect with customers',
    description:
      'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
  },
  {
    icon: LightningIcon,
    title: 'Connect the tools you already use',
    description:
      'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
  },
  {
    icon: LightningIcon,
    title: 'Our people make the difference',
    description:
      'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
  },
];

const additionalFeatures: FeatureListProps['items'] = [
  {
    icon: LightningIcon,
    title: 'Share team inboxes',
    description:
      'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
  },
  {
    icon: LightningIcon,
    title: 'Deliver instant answers',
    description:
      'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
  },
  {
    icon: LightningIcon,
    title: 'Manage your team with reports',
    description:
      'Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.',
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
        title="Analytics that feels like it’s from the future"
        description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        style={{ marginBottom: 64 }}
      />
      <FeatureList items={features} />
      <ClientReview style={{ marginTop: 96 }} />
      <SectionTitle
        label="Features"
        title="Cutting-edge features for advanced analytics"
        description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
        style={{ marginTop: 96, marginBottom: 64 }}
      />
      <FeatureList items={additionalFeatures} />
      <SectionTitle
        title="Frequently Asked Questions"
        description="Everything you need to know about the product and billing."
        style={{ marginTop: 180, marginBottom: 64 }}
      />
      <FAQ items={faqItems} style={{ marginBottom: 64 }} />
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
