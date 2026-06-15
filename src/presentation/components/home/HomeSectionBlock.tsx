import type { ReactNode } from 'react';
import {
  HorizontalScroll,
  HomeSection,
  SectionHeaderRow,
  SectionHeading,
  SectionMoreLink,
  SectionSubtitle,
} from '@/presentation/pages/home/HomePage.styles';

type HomeSectionBlockProps = {
  title: ReactNode;
  subtitle?: string;
  href: string;
  children: ReactNode;
};

export function HomeSectionBlock({ title, subtitle, href, children }: HomeSectionBlockProps) {
  return (
    <HomeSection>
      <SectionHeaderRow>
        <div>
          <SectionHeading>{title}</SectionHeading>
          {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : null}
        </div>
        <SectionMoreLink to={href}>전체보기</SectionMoreLink>
      </SectionHeaderRow>
      <HorizontalScroll>{children}</HorizontalScroll>
    </HomeSection>
  );
}

export function highlightSectionTitle(title: string): ReactNode {
  if (title === '지금 뜨는 쇼핑라이브') {
    return (
      <>
        지금 뜨는 <em>쇼핑라이브</em>
      </>
    );
  }
  if (title === '브랜드 PICK') {
    return (
      <>
        브랜드 <em>PICK</em>
      </>
    );
  }
  if (title === 'HOT CLIP') {
    return (
      <>
        <i>HOT</i> CLIP
      </>
    );
  }
  if (title === '추천 쇼호스트') {
    return (
      <>
        추천 <em>쇼호스트</em>
      </>
    );
  }
  if (title === '추천 모델') {
    return (
      <>
        추천 <em>모델</em>
      </>
    );
  }
  if (title === '라이비 뉴스') {
    return (
      <>
        라이비 <em>뉴스</em>
      </>
    );
  }
  return title;
}
