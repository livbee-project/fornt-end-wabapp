import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  ActionBar,
  ActionBarInner,
  Content,
  InfoCard,
  MetaChip,
  ModelCover,
  ModelHero,
  ModelMetaRow,
  ModelSummary,
  Name,
  NotFoundCard,
  PageRoot,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionTitle,
  TagChip,
  TagList,
} from '@/presentation/pages/talent/TalentDetail.styles';

export function ModelDetailPage() {
  const { modelId } = useParams<{ modelId: string }>();
  const repository = useMarketplaceRepository();
  const model = modelId ? repository.getModelProfileById(modelId) : undefined;
  const [proposalOpen, setProposalOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  if (!model) {
    return (
      <PageRoot>
        <BackHeader title="모델 상세" backTo="/models" />
        <Content>
          <NotFoundCard>요청하신 모델 프로필을 찾을 수 없습니다.</NotFoundCard>
        </Content>
      </PageRoot>
    );
  }

  return (
    <PageRoot>
      <BackHeader title="모델 상세" backTo="/models" />
      <ModelCover>
        <img src={model.profileImage} alt={`${model.name} 프로필`} />
      </ModelCover>

      <Content>
        <ModelHero>
          <Name>{model.name}</Name>
          <ModelSummary>{model.summary}</ModelSummary>
          <ModelMetaRow>
            {model.modelType ? <MetaChip>{model.modelType}</MetaChip> : null}
            {model.height ? <MetaChip>키 {model.height}cm</MetaChip> : null}
            {model.location ? <MetaChip>{model.location}</MetaChip> : null}
          </ModelMetaRow>
        </ModelHero>

        {model.description ? (
          <Section aria-labelledby="model-description-title">
            <SectionTitle id="model-description-title">소개</SectionTitle>
            <InfoCard>{model.description}</InfoCard>
          </Section>
        ) : null}

        {model.tags && model.tags.length > 0 ? (
          <Section aria-labelledby="model-tags-title">
            <SectionTitle id="model-tags-title">촬영 키워드</SectionTitle>
            <TagList>
              {model.tags.map((tag) => (
                <TagChip key={tag}>{tag.replace('#', '')}</TagChip>
              ))}
            </TagList>
          </Section>
        ) : null}
      </Content>

      <ActionBar>
        <ActionBarInner>
          <SecondaryButton type="button" onClick={() => setMessageOpen(true)}>
            메시지
          </SecondaryButton>
          <PrimaryButton type="button" onClick={() => setProposalOpen(true)}>
            제안하기
          </PrimaryButton>
        </ActionBarInner>
      </ActionBar>

      <ConfirmModal
        open={proposalOpen}
        title={`${model.name}님에게 제안할까요?`}
        description="현재는 데모 UI이며 실제 제안 API는 연결되지 않았습니다."
        confirmLabel="제안"
        onConfirm={() => setProposalOpen(false)}
        onCancel={() => setProposalOpen(false)}
      />
      <ConfirmModal
        open={messageOpen}
        title={`${model.name}님에게 메시지를 보낼까요?`}
        description="현재는 데모 UI이며 실제 메시지 API는 연결되지 않았습니다."
        confirmLabel="보내기"
        onConfirm={() => setMessageOpen(false)}
        onCancel={() => setMessageOpen(false)}
      />
    </PageRoot>
  );
}
