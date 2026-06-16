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
  NameRow,
  NotFoundWrap,
  PrivateCard,
  ProfileSummary,
  RoleText,
  TabPanel,
  TagRow,
} from '@/presentation/pages/shared/talentDetailCodex.styles';
import {
  defaultModelDetailMock,
  modelDetailMock,
} from '@/shared/constants/talentDetailMock';

type DetailTab = 'intro' | 'portfolio' | 'gallery';

const tabs: Array<{ key: DetailTab; label: string }> = [
  { key: 'intro', label: '소개' },
  { key: 'portfolio', label: '포트폴리오' },
  { key: 'gallery', label: '갤러리' },
];

/** 중복을 제거한 비어 있지 않은 문자열 배열을 반환한다. */
const uniq = (items: string[]) => Array.from(new Set(items.filter(Boolean)));

/** 모델 상세 — 탭별 소개·포트폴리오·갤러리 */
export function ModelDetailPage() {
  const { modelId } = useParams<{ modelId: string }>();
  const repository = useMarketplaceRepository();
  const model = modelId ? repository.getModelProfileById(modelId) : undefined;
  const [activeTab, setActiveTab] = useState<DetailTab>('intro');
  const [proposalOpen, setProposalOpen] = useState(false);

  const detail = model ? (modelDetailMock[model.id] ?? defaultModelDetailMock) : defaultModelDetailMock;

  const galleryImages = useMemo(() => {
    if (!model) return [];

    const campaigns = repository
      .getCampaigns()
      .filter((item) => item.category === '패션' || item.category === '뷰티')
      .slice(0, 3);
    const clips = repository.getClipItems().slice(0, 5);

    return uniq([
      model.profileImage,
      ...campaigns.map((item) => item.coverImage),
      ...clips.map((item) => item.thumbnail),
    ]).slice(0, 9);
  }, [model, repository]);

  if (!model) {
    return (
      <DetailPageRoot>
        <DetailMain>
          <DetailTopbar>
            <Link to="/models" aria-label="모델 목록으로 돌아가기">
              ‹
            </Link>
            <strong>모델 상세</strong>
            <button type="button" aria-label="공유하기">
              ↗
            </button>
          </DetailTopbar>
          <NotFoundWrap>요청하신 모델 프로필을 찾을 수 없습니다.</NotFoundWrap>
        </DetailMain>
      </DetailPageRoot>
    );
  }

  const meta = [
    model.modelType,
    model.height ? `키 ${model.height}cm` : undefined,
    model.location,
  ].filter(Boolean) as string[];

  return (
    <DetailPageRoot>
      <DetailMain>
        <DetailTopbar>
          <Link to="/models" aria-label="모델 목록으로 돌아가기">
            ‹
          </Link>
          <strong>{model.name}</strong>
          <button type="button" aria-label="공유하기">
            ↗
          </button>
        </DetailTopbar>

        <InstagramProfile>
          <DetailPhoto>
            <img src={model.profileImage} alt={`${model.name} 프로필`} />
          </DetailPhoto>
          <ProfileSummary>
            <NameRow>
              <h1>{model.name}</h1>
              <span>M</span>
            </NameRow>
            <RoleText>{detail.mood}</RoleText>
            <BasicMeta>
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </BasicMeta>
          </ProfileSummary>
        </InstagramProfile>

        <BioSection>
          <strong>{model.summary}</strong>
          {model.description ? <p>{model.description}</p> : null}
          <p>{detail.mainStrength}</p>
          {model.tags?.length ? (
            <TagRow>
              {model.tags.map((tag) => (
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

        <DetailTabs $columns={3} aria-label="상세 탭">
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
                <dt>모델 유형</dt>
                <dd>{model.modelType ?? '확인 중'}</dd>
              </div>
              <div>
                <dt>키</dt>
                <dd>{model.height ? `${model.height}cm` : '협의'}</dd>
              </div>
              <div>
                <dt>활동 지역</dt>
                <dd>{model.location ?? '협의 가능'}</dd>
              </div>
              <div>
                <dt>촬영 무드</dt>
                <dd>{detail.mood}</dd>
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
                  <p>모델 등록페이지에서 업로드한 포트폴리오 파일입니다.</p>
                  <span>
                    {detail.fileSize} · 등록일 {detail.joinedAt}
                  </span>
                </section>
              </FileCard>
            </FileList>
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
        title={`${model.name}님에게 제안할까요?`}
        description="현재는 데모 UI이며 실제 제안 API는 연결되지 않았습니다."
        confirmLabel="제안"
        onConfirm={() => setProposalOpen(false)}
        onCancel={() => setProposalOpen(false)}
      />
    </DetailPageRoot>
  );
}
