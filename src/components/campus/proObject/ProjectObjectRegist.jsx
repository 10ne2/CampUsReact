import React from "react";
import styled from "styled-components";

/* 고정 폭 412 */
const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  background: #efefef; /* 데모용 배경 */
`;

/* 상단 요약 박스: H 263 */
const TopBox = styled.div`
  background: #fff;
  height: 263px;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 6px 6px 0 0;
`;

/* 타이틀 + 옥색 언더라인 */
const Title = styled.div`
  font-weight: 700;
  color: #444;
  margin-bottom: 10px;
`;
const TitleLine = styled.div`
  height: 2px;
  background: #2EC4B6;
  margin-bottom: 14px;
`;

const Row = styled.div`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  &:last-child { border-bottom: 0; }
`;
const Label = styled.div`
  width: 72px;
  color: #777;
  font-weight: 700;
`;
const Value = styled.div`
  flex: 1;
  color: #555;
`;

/* 회색 구분선: H 15 */
const Gap = styled.div`
  height: 15px;
  background: #f3f3f3;
`;

/* 아래 입력 영역 */
const Editor = styled.div`
  background: #fff;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 0 0 6px 6px;
`;

/* 드롭다운: W167 × H29 */
const CategorySelect = styled.select`
  width: 167px;
  height: 29px;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 13px;
  color: #333;
  background: #fff;
  outline: none;
`;

/* 제목 한 줄 + 밑줄 */
const TitleInput = styled.input`
  width: 100%;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 0 10px;
  margin-top: 12px;
  font-size: 14px;
  outline: none;
  ::placeholder { color: #bdbdbd; }
`;

/* 본문: W412 × H216 (Page가 412px이므로 padding 제거해 정확히 맞춤) */
const BodyWrap = styled.div`
  margin-left: -16px;   /* 좌우 패딩 제거해서 정확히 412 폭 확보 */
  margin-right: -16px;
  padding: 0 16px;      /* 텍스트 시작점은 유지 */
  border-bottom: 1px solid #e5e5e5;
`;
const BodyArea = styled.textarea`
  width: 412px;       /* 명시적으로 412 */
  height: 216px;      /* 요구 사이즈 */
  border: 0;
  resize: none;
  outline: none;
  padding: 16px 0 8px;
  box-sizing: border-box;
  font-size: 14px;
  color: #333;
  ::placeholder { color: #bdbdbd; }
`;

/* 파일 선택 라인 (옵션) */
const FileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 14px;
  color: #777;
  font-size: 13px;
`;
const FileButton = styled.label`
  display: inline-block;
  padding: 6px 10px;
  border: 1px solid #cfcfcf;
  background: #f2f2f2;
  border-radius: 6px;
  cursor: pointer;
`;
const HiddenFile = styled.input`
  display: none;
`;

export default function ProjectObjectRegistLayout() {
  return (
    <Page>
      <TopBox>
        <Title>클라우드 기반 협업 플랫폼</Title>
        <TitleLine />
        <Row>
          <Label>기간</Label>
          <Value>2025-08-26 ~ 2025-08-26</Value>
        </Row>
        <Row>
          <Label>담당교수</Label>
          <Value>서형원</Value>
        </Row>
        <Row>
          <Label>팀장</Label>
          <Value>김원희</Value>
        </Row>
        <Row>
          <Label>팀원</Label>
          <Value>권오규, 김민주, 김선범</Value>
        </Row>
      </TopBox>

      <Gap />

      <Editor>
        <CategorySelect defaultValue="">
          <option value="" disabled>카테고리 구분</option>
          <option value="공지">공지</option>
          <option value="업무">업무</option>
          <option value="자료">자료</option>
        </CategorySelect>

        <TitleInput placeholder="제목을 입력해주세요" />

        <BodyWrap>
          <BodyArea placeholder="내용을 입력해주세요." />
        </BodyWrap>

        <FileRow>
          <FileButton htmlFor="file">파일선택</FileButton>
          <HiddenFile id="file" type="file" />
          <span>선택된 파일이 없습니다.</span>
        </FileRow>
      </Editor>
    </Page>
  );
}
