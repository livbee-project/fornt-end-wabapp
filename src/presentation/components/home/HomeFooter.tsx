import { Link } from 'react-router-dom';
import { Icon } from '@/presentation/components/common/Icon';
import {
  FooterBrandRow,
  FooterCompany,
  FooterLanguageButton,
  FooterLinks,
  FooterLogo,
  FooterRoot,
  FooterTopLink,
} from '@/presentation/pages/home/HomePage.styles';

const footerLinks = [
  { label: '고객센터', href: '/customer-center' },
  { label: '이용약관', href: '/terms' },
  { label: '개인정보처리방침', href: '/privacy' },
] as const;

export function HomeFooter() {
  return (
    <FooterRoot aria-label="서비스 정보">
      <FooterBrandRow>
        <FooterLogo to="/" aria-label="Livbee 홈으로 이동">
          Livbee
        </FooterLogo>
        <FooterLanguageButton type="button" aria-label="언어 선택">
          <Icon name="globe" />
          KO
        </FooterLanguageButton>
      </FooterBrandRow>

      <FooterLinks aria-label="푸터 메뉴">
        {footerLinks.map((item) => (
          <Link key={item.label} to={item.href}>
            {item.label}
          </Link>
        ))}
      </FooterLinks>

      <FooterCompany>
        <p>(주)라이비 대표이사: 이태웅</p>
        <p>주소: 서울특별시 강남구 영동대로 602 6층 n029 06083</p>
        <p>
          사업자등록번호: 701-31-01824 <Link to="/business-info">사업자정보확인</Link>
        </p>
        <p>통신판매업신고번호: 2024-서울강남-12345</p>
        <p>대표번호: 1588-0000 · 이메일: support@livebi.co.kr</p>
      </FooterCompany>

      <FooterTopLink href="#home-top" aria-label="맨 위로 이동">
        <Icon name="chevronUp" />
      </FooterTopLink>
    </FooterRoot>
  );
}
