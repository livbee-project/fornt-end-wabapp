import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackHeader } from '@/presentation/components/common/BackHeader';
import { FixedBottomActions } from '@/presentation/components/common/FixedBottomActions';
import { FormSection } from '@/presentation/components/common/FormSection';
import { CreateField, CreateForm, CreateFormBody, CreateMain, CreatePageRoot, SubmitStatus } from '@/presentation/pages/shared/registrationForm.styles';

/** 로그인 데모 화면 */
export function LoginPage() {
  const [message, setMessage] = useState('이메일과 비밀번호를 입력해주세요.');

  return (
    <CreatePageRoot>
      <BackHeader title="로그인" backTo="/" backLabel="홈으로 돌아가기" />
      <CreateMain>
        <CreateForm onSubmit={(event) => event.preventDefault()}>
          <CreateFormBody>
            <FormSection title="계정 로그인" description="데모 UI이며 실제 인증 API는 연결되지 않았습니다.">
              <CreateField>
                <span>이메일</span>
                <input type="email" placeholder="you@example.com" />
              </CreateField>
              <CreateField>
                <span>비밀번호</span>
                <input type="password" placeholder="비밀번호" />
              </CreateField>
            </FormSection>
          </CreateFormBody>
          <SubmitStatus>{message}</SubmitStatus>
          <FixedBottomActions
            cancelTo="/"
            primaryLabel="로그인"
            onPrimary={() => setMessage('로그인 요청이 준비되었습니다. Supabase Auth 연동 예정입니다.')}
          />
        </CreateForm>
        <p style={{ padding: '0 16px', fontSize: 12, color: 'var(--sub-text)' }}>
          계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </p>
      </CreateMain>
    </CreatePageRoot>
  );
}

/** 회원가입 데모 화면 */
export function SignupPage() {
  const [message, setMessage] = useState('필수 정보를 입력하면 가입을 진행할 수 있습니다.');

  return (
    <CreatePageRoot>
      <BackHeader title="회원가입" backTo="/login" backLabel="로그인으로 돌아가기" />
      <CreateMain>
        <CreateForm onSubmit={(event) => event.preventDefault()}>
          <CreateFormBody>
            <FormSection step="STEP 1" title="기본 정보" description="브랜드·쇼호스트·모델 계정을 선택해 가입합니다.">
              <CreateField>
                <span>이메일</span>
                <input type="email" placeholder="you@example.com" />
              </CreateField>
              <CreateField>
                <span>비밀번호</span>
                <input type="password" placeholder="8자 이상" />
              </CreateField>
              <CreateField>
                <span>역할</span>
                <select defaultValue="brand">
                  <option value="brand">브랜드</option>
                  <option value="host">쇼호스트</option>
                  <option value="model">모델</option>
                </select>
              </CreateField>
            </FormSection>
          </CreateFormBody>
          <SubmitStatus>{message}</SubmitStatus>
          <FixedBottomActions
            cancelTo="/login"
            primaryLabel="가입 완료"
            onPrimary={() => setMessage('회원가입 payload 준비 완료. 인증 API 연동 예정입니다.')}
          />
        </CreateForm>
      </CreateMain>
    </CreatePageRoot>
  );
}
