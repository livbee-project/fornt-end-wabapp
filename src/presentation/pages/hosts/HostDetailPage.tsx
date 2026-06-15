import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { ConfirmModal } from '@/presentation/components/common/ConfirmModal';
import { useMarketplaceRepository } from '@/presentation/contexts/marketplaceRepositoryContext';
import {
  ActionBar,
  ActionBarInner,
  Content,
  HostAvatar,
  HostHero,
  InfoCard,
  MetaChip,
  MetaRow,
  Name,
  NotFoundCard,
  PageRoot,
  PrimaryButton,
  SecondaryButton,
  Section,
  SectionTitle,
  Summary,
  TagChip,
  TagList,
} from '@/presentation/pages/talent/TalentDetail.styles';

export function HostDetailPage() {
  const { hostId } = useParams<{ hostId: string }>();
  const repository = useMarketplaceRepository();
  const host = hostId ? repository.getHostProfileById(hostId) : undefined;
  const [proposalOpen, setProposalOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);

  if (!host) {
    return (
      <PageRoot>
        <BackHeader title="쇼호스트 상세" backTo="/hosts" />
        <Content>
          <NotFoundCard>요청하신 쇼호스트 프로필을 찾을 수 없습니다.</NotFoundCard>
        </Content>
      </PageRoot>
    );
  }

  return (
    <PageRoot>
      <BackHeader title="쇼호스트 상세" backTo="/hosts" />
      <Content>
        <HostHero>
          <HostAvatar>
            <img src={host.profileImage} alt={`${host.name} 프로필`} />
          </HostAvatar>
          <Name>{host.name}</Name>
          <Summary>{host.summary}</Summary>
          <MetaRow>
            {host.category ? <MetaChip>{host.category}</MetaChip> : null}
            <MetaChip>경력 {host.experienceYears ?? 1}년</MetaChip>
            {host.location ? <MetaChip>{host.location}</MetaChip> : null}
          </MetaRow>
        </HostHero>

        {host.description ? (
          <Section aria-labelledby="host-description-title">
            <SectionTitle id="host-description-title">소개</SectionTitle>
            <InfoCard>{host.description}</InfoCard>
          </Section>
        ) : null}

        {host.tags && host.tags.length > 0 ? (
          <Section aria-labelledby="host-tags-title">
            <SectionTitle id="host-tags-title">활동 키워드</SectionTitle>
            <TagList>
              {host.tags.map((tag) => (
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
        title={`${host.name}님에게 제안할까요?`}
        description="현재는 데모 UI이며 실제 제안 API는 연결되지 않았습니다."
        confirmLabel="제안"
        onConfirm={() => setProposalOpen(false)}
        onCancel={() => setProposalOpen(false)}
      />
      <ConfirmModal
        open={messageOpen}
        title={`${host.name}님에게 메시지를 보낼까요?`}
        description="현재는 데모 UI이며 실제 메시지 API는 연결되지 않았습니다."
        confirmLabel="보내기"
        onConfirm={() => setMessageOpen(false)}
        onCancel={() => setMessageOpen(false)}
      />
    </PageRoot>
  );
}
