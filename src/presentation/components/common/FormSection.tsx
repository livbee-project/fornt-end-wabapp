import type { ReactNode } from 'react';
import {
  Section,
  SectionBody,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  SideLabel,
  StepBadge,
  TitleBlock,
} from './FormSection.styles';

type FormSectionProps = {
  title: string;
  description?: string;
  step?: string;
  sideLabel?: string;
  optional?: boolean;
  children: ReactNode;
};

export function FormSection({
  title,
  description,
  step,
  sideLabel,
  optional = false,
  children,
}: FormSectionProps) {
  return (
    <Section $optional={optional}>
      <SectionHeader>
        <TitleBlock>
          {step ? <StepBadge $optional={optional}>{step}</StepBadge> : null}
          <SectionTitle>{title}</SectionTitle>
          {description ? <SectionDescription>{description}</SectionDescription> : null}
        </TitleBlock>
        {sideLabel ? <SideLabel>{sideLabel}</SideLabel> : null}
      </SectionHeader>
      <SectionBody>{children}</SectionBody>
    </Section>
  );
}
