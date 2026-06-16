import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  DetailBottomCta,
  BasicMeta,
  BioSection,
  DetailMain,
  DetailPageRoot,
  DetailPhoto,
  DetailTabs,
  DetailTopbar,
  FileCard,
  FileIcon,
  FileList,
  GalleryGrid,
  InfoList,
  InstagramProfile,
  LiveLinkCard,
  LiveLinkIcon,
  LiveLinkList,
  NameRow,
  NotFoundWrap,
  PrivateCard,
  ProfileSummary,
  RoleText,
  TabPanel,
  TagRow,
} from '@/presentation/pages/shared/talentDetailCodex.styles';
import {
  defaultHostDetailMock,
  hostDetailMock,
} from '@/shared/constants/talentDetailMock';

type DetailTab = 'intro' | 'portfolio' | 'live' | 'gallery';

const tabs: Array<{ key: DetailTab; label: string }> = [
  { key: 'intro', label: '소개' },
  { key: 'portfolio', label: '포트폴리오' },
  { key: 'live', label: '라이브' },
  { key: 'gallery', label: '갤러리' },
];

/** 중복을 제거한 비어 있지 않은 문자열 배열을 반환한다. */
const uniq = (items: string[]) => Array.from(new Set(items.filter(Boolean)));

/** 쇼호스트 상세 — 탭별 소개·포트폴리오·라이브·갤러리 */
export function HostDetailPage() {
  const { hostId } = useParams<{ hostId: string }>();
  const repository = useMarketplaceRepository();
  const host = hostId ? repository.getHostProfileById(hostId) : undefined;
  const [activeTab, setActiveTab] = useState<DetailTab>('intro');
  const [proposalOpen, setProposalOpen] = useState(false);

  const detail = host ? (hostDetailMock[host.id] ?? defaultHostDetailMock) : defaultHostDetailMock;

  const galleryImages = useMemo(() => {
    if (!host) return [];

    const lives = repository
      .getLiveItems()
      .filter((item) => item.summary.includes(host.category ?? ''))
      .slice(0, 3);
    const campaigns = repository
      .getCampaigns()
      .filter((item) => item.category === host.category)
      .slice(0, 3);
    const clips = repository.getClipItems().slice(0, 3);

    return uniq([
      host.profileImage,
      ...campaigns.map((item) => item.coverImage),
      ...lives.map((item) => item.liveThumbnail),
      ...clips.map((item) => item.thumbnail),
    ]).slice(0, 9);
  }, [host, repository]);

  if (!host) {
    return (
      <DetailPageRoot>
        <DetailMain>
          <DetailTopbar>
            <Link to="/hosts" aria-label="목록으로 돌아가기">
              ‹
            </Link>
            <strong>쇼호스트 상세</strong>
            <button type="button" aria-label="공유하기">
              ↗
            </button>
          </DetailTopbar>
          <NotFoundWrap>요청하신 쇼호스트 프로필을 찾을 수 없습니다.</NotFoundWrap>
        </DetailMain>
      </DetailPageRoot>
    );
  }

  const meta = [
    host.category,
    host.experienceYears ? `경력 ${host.experienceYears}년` : '경력 확인 중',
    host.location,
    detail.responseTone,
  ].filter(Boolean) as string[];

  return (
    <DetailPageRoot>
      <DetailMain>
        <DetailTopbar>
          <Link to="/hosts" aria-label="목록으로 돌아가기">
            ‹
          </Link>
          <strong>{host.name}</strong>
          <button type="button" aria-label="공유하기">
            ↗
          </button>
        </DetailTopbar>

        <InstagramProfile>
          <DetailPhoto>
            <img src={host.profileImage} alt={`${host.name} 프로필`} />
          </DetailPhoto>
          <ProfileSummary>
            <NameRow>
              <h1>{host.name}</h1>
              <span>M</span>
            </NameRow>
            <RoleText>{detail.registerType}</RoleText>
            <BasicMeta>
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </BasicMeta>
          </ProfileSummary>
        </InstagramProfile>

        <BioSection>
          <strong>{host.summary}</strong>
          {host.description ? <p>{host.description}</p> : null}
          <p>{detail.mainStrength}</p>
          {host.tags?.length ? (
            <TagRow>
              {host.tags.map((tag) => (
                <span key={tag}>{tag.replace('#', '')}</span>
              ))}
            </TagRow>
          ) : null}
        </BioSection>

        <PrivateCard>
          <div>
            <strong>계약 후 공개 정보</strong>
            <p>계약 확정 전에는 민감한 정보가 노출되지 않습니다.</p>
          </div>
          <span>잠금</span>
        </PrivateCard>

        <DetailTabs $columns={4} aria-label="상세 탭">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={activeTab === tab.key ? 'active' : undefined}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </DetailTabs>

        <TabPanel>
          {activeTab === 'intro' ? (
            <InfoList>
              <div>
                <dt>전문 카테고리</dt>
                <dd>{host.category ?? '확인 중'}</dd>
              </div>
              <div>
                <dt>경력</dt>
                <dd>{host.experienceYears ?? 1}년</dd>
              </div>
              <div>
                <dt>활동 지역</dt>
                <dd>{host.location ?? '협의 가능'}</dd>
              </div>
              <div>
                <dt>등록구분</dt>
                <dd>{detail.registerType}</dd>
              </div>
              <div>
                <dt>진행 톤</dt>
                <dd>{detail.responseTone}</dd>
              </div>
              <div>
                <dt>가입일</dt>
                <dd>{detail.joinedAt}</dd>
              </div>
              <div>
                <dt>노출 상태</dt>
                <dd>{detail.profileStatus}</dd>
              </div>
            </InfoList>
          ) : null}

          {activeTab === 'portfolio' ? (
            <FileList>
              <FileCard>
                <FileIcon>PDF</FileIcon>
                <section>
                  <strong>{detail.portfolioFileName}</strong>
                  <p>쇼호스트 등록페이지에서 업로드한 포트폴리오 파일입니다.</p>
                  <span>2.4MB · 등록일 {detail.joinedAt}</span>
                </section>
              </FileCard>
            </FileList>
          ) : null}

          {activeTab === 'live' ? (
            <LiveLinkList>
              <LiveLinkCard href={detail.recentLiveUrl} target="_blank" rel="noreferrer">
                <LiveLinkIcon>URL</LiveLinkIcon>
                <section>
                  <strong>{detail.recentLiveTitle}</strong>
                  <p>{detail.recentLiveUrl}</p>
                  <span>
                    {detail.liveUrlLabel} · 등록일 {detail.joinedAt}
                  </span>
                </section>
              </LiveLinkCard>
            </LiveLinkList>
          ) : null}

          {activeTab === 'gallery' ? (
            <GalleryGrid>
              {galleryImages.map((image, index) => (
                <button key={`${image}-${index}`} type="button">
                  <img src={image} alt="" />
                </button>
              ))}
            </GalleryGrid>
          ) : null}
        </TabPanel>

        <DetailBottomCta>
          <button type="button" onClick={() => setProposalOpen(true)}>
            제안하기
          </button>
        </DetailBottomCta>
      </DetailMain>

      <ConfirmModal
        open={proposalOpen}
        title={`${host.name}님에게 제안할까요?`}
        description="현재는 데모 UI이며 실제 제안 API는 연결되지 않았습니다."
        confirmLabel="제안"
        onConfirm={() => setProposalOpen(false)}
        onCancel={() => setProposalOpen(false)}
      />
    </DetailPageRoot>
  );
}
