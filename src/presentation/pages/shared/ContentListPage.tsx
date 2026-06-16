import { Link } from 'react-router-dom';
import { ServiceHeader, type ServiceHeaderTab } from '@/presentation/components/layout/ServiceHeader';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import { PageDescription, PageRoot, PageTitle, StatusCard } from '@/presentation/pages/shared/PageScaffold.styles';
import styled from 'styled-components';
import { listCardSurface } from '@/presentation/styles';

const List = styled.ul`
  display: grid;
  gap: 10px;
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
`;

const Item = styled(Link)`
  ${listCardSurface}
  display: block;
  padding: 14px 16px;
  color: inherit;
  text-decoration: none;

  strong {
    display: block;
    font-size: 14px;
    font-weight: 900;
  }

  span {
    display: block;
    margin-top: 4px;
    color: var(--sub-text);
    font-size: 12px;
  }
`;

type ContentListPageProps = {
  title: string;
  description: string;
  headerTab?: ServiceHeaderTab;
  kind: 'clips' | 'news' | 'events' | 'community';
};

/** 콘텐츠 목록 스캐폴드 — mock 데이터를 카드 목록으로 보여준다. */
export function ContentListPage({ title, description, headerTab, kind }: ContentListPageProps) {
  const repository = useMarketplaceRepository();
  const clips = kind === 'clips' ? repository.getClipItems() : [];
  const news = kind === 'news' ? repository.getNewsItems() : [];

  return (
    <>
      {headerTab ? <ServiceHeader active={headerTab} /> : null}
      <PageRoot>
        <PageTitle>{title}</PageTitle>
        <PageDescription>{description}</PageDescription>
        {kind === 'clips' ? (
          <List>
            {clips.map((item) => (
              <Item key={item.id} to={`/clips/${item.id}`}>
                <strong>{item.title}</strong>
                <span>{item.summary}</span>
              </Item>
            ))}
          </List>
        ) : null}
        {kind === 'news' ? (
          <List>
            {news.map((item) => (
              <Item key={item.id} to={`/news/${item.id}`}>
                <strong>{item.title}</strong>
                <span>{item.category}</span>
              </Item>
            ))}
          </List>
        ) : null}
        {kind === 'events' || kind === 'community' ? (
          <StatusCard>콘텐츠 mock 연동 전 스캐폴드입니다.</StatusCard>
        ) : null}
      </PageRoot>
    </>
  );
}

/** 콘텐츠 상세 스캐폴드 */
export function ContentDetailPage({ title }: { title: string }) {
  return (
    <PageRoot>
      <PageTitle>{title}</PageTitle>
      <StatusCard>상세 UI는 추후 연결됩니다.</StatusCard>
    </PageRoot>
  );
}
