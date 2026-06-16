import { ServiceHeader } from '@/presentation/components/layout/ServiceHeader';
import {
  CampaignCard,
  ClipCard,
  LiveCard,
  NewsCard,
  ProfileCard,
} from '@/presentation/components/home/HomeCards';
import { HomeFooter } from '@/presentation/components/home/HomeFooter';
import {
  HomeSectionBlock,
  highlightSectionTitle,
} from '@/presentation/components/home/HomeSectionBlock';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import { homeContent } from '@/shared/constants/homeContent';
import {
  HeroCopy,
  HeroDescription,
  HeroDot,
  HeroEyebrow,
  HeroImage,
  HeroPagination,
  HeroSection,
  HeroTitle,
  HomeMain,
  NewsLayout,
  PageRoot,
  HomeSection,
  SectionHeaderRow,
  SectionHeading,
  SectionMoreLink,
  SectionSubtitle,
} from './HomePage.styles';

/** 메인 홈 — 히어로·섹션 카드·푸터를 렌더링 */
export function HomePage() {
  const repository = useMarketplaceRepository();
  const home = repository.getHomeData();

  return (
    <PageRoot id="home-top">
      <ServiceHeader active="home" />

      <HomeMain>
        <HeroSection aria-label="메인 배너">
          <HeroCopy>
            <HeroEyebrow>{homeContent.hero.eyebrow}</HeroEyebrow>
            <HeroTitle>{homeContent.hero.title}</HeroTitle>
            <HeroDescription>{homeContent.hero.description}</HeroDescription>
          </HeroCopy>
          <HeroImage src={home.heroBanner.image} alt="" loading="eager" decoding="async" />
          <HeroPagination aria-hidden="true">
            {[0, 1, 2, 3].map((index) => (
              <HeroDot key={index} $active={index === 0} />
            ))}
          </HeroPagination>
        </HeroSection>

        <HomeSectionBlock
          title={highlightSectionTitle(homeContent.sections.live)}
          subtitle={homeContent.sectionSubtitles.live}
          href="/campaigns"
        >
          {home.liveItems.map((item) => (
            <LiveCard key={item.id} item={item} />
          ))}
        </HomeSectionBlock>

        <HomeSectionBlock
          title={highlightSectionTitle(homeContent.sections.brandPick)}
          subtitle={homeContent.sectionSubtitles.brandPick}
          href="/campaigns"
        >
          {home.campaignItems.map((item) => (
            <CampaignCard key={item.id} item={item} />
          ))}
        </HomeSectionBlock>

        <HomeSectionBlock
          title={highlightSectionTitle(homeContent.sections.hosts)}
          subtitle={homeContent.sectionSubtitles.hosts}
          href="/hosts"
        >
          {home.hostProfiles.map((item) => (
            <ProfileCard key={item.id} item={item} type="host" />
          ))}
        </HomeSectionBlock>

        <HomeSectionBlock
          title={highlightSectionTitle(homeContent.sections.models)}
          subtitle={homeContent.sectionSubtitles.models}
          href="/models"
        >
          {home.modelProfiles.map((item) => (
            <ProfileCard key={item.id} item={item} type="model" />
          ))}
        </HomeSectionBlock>

        <HomeSectionBlock
          title={highlightSectionTitle(homeContent.sections.clips)}
          subtitle={homeContent.sectionSubtitles.clips}
          href="/clips"
        >
          {home.clipItems.map((item) => (
            <ClipCard key={item.id} item={item} />
          ))}
        </HomeSectionBlock>

        <HomeSection>
          <SectionHeaderRow>
            <div>
              <SectionHeading>{highlightSectionTitle(homeContent.sections.news)}</SectionHeading>
              <SectionSubtitle>{homeContent.sectionSubtitles.news}</SectionSubtitle>
            </div>
            <SectionMoreLink to="/news">전체보기</SectionMoreLink>
          </SectionHeaderRow>
          <NewsLayout>
            {home.newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </NewsLayout>
        </HomeSection>
      </HomeMain>

      <HomeFooter />
    </PageRoot>
  );
}
