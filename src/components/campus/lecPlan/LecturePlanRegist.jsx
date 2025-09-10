
import React, { useState } from "react";
import styled from "styled-components";


const Phone = styled.div`
  width: 412px;
  height: 800px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  box-sizing: border-box;
`;
const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #e9eff6;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 24px 0;
  box-sizing: border-box;
`;


const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;
const CloseArea = styled.div`
  width: 54px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CloseBtn = styled.button`
  border: 0;
  background: transparent;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  color: #707070;
`;
const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
  background: #2EC4B6;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 8px 14px;
  font-weight: 700;
  cursor: pointer;
`;


const Body = styled.div`
  padding: 16px 29px;      
  box-sizing: border-box;
`;


const GuideCard = styled.div`
  width: 100%;            
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  padding: 14px 14px 10px; 
  box-sizing: border-box;
  position: relative;
  background: #fff;
`;
const GuideTitle = styled.span`
  font-size: 12px;
  color: #333;
  b { color: #d35454; font-weight: 700; }
`;
const GuideList = styled.ol`
  margin: 10px 0 0;
  padding-left: 18px;
  li {
    font-size: 12px;
    color: #555;
    line-height: 1.6;
  }
`;
const DownloadLink = styled.button`
  position: absolute;
  right: 10px;
  bottom: 8px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  background: transparent;
  color: #9a9a9a;
  font-size: 12px;
  cursor: pointer;
`;
const Paperclip = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M21 7.5l-9.6 9.6a5 5 0 11-7.07-7.07L13.5 0" stroke="#9a9a9a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.07 9.43L9.43 19.07" stroke="#9a9a9a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);


const SectionGap = styled.div` height: 13px; `;


const UploadSection = styled.div`
  width: 100%;
  background: #fff;
`;

const UploadHeader = styled.div`
  font-size: 14px;
  font-weight: 600;                 
  color: #444;
  padding: 10px 0 8px;
  border-bottom: 2px solid #2EC4B6; 
`;


const FileArea = styled.div`
  padding-top: 12px;
`;
const HiddenFile = styled.input.attrs({ type: "file", id: "planFile" })`
  display: none;
`;
const FileLabel = styled.label`
  display: inline-block;
  padding: 6px 10px;
  border: 1px solid #bdbdbd;
  border-radius: 5px;
  font-size: 12px;                
  cursor: pointer;
  user-select: none;
  background: #f4f4f4;
  margin-right: 10px;
`;
const FileText = styled.span`
  font-size: 12px;
  color: #707070;
`;

export default function LecturePlanRegist() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");

  return (
    <Screen>
      <Phone>
        <TopBar>
          <CloseArea><CloseBtn aria-label="닫기">×</CloseBtn></CloseArea>
          <Spacer />
          <SubmitBtn>등록</SubmitBtn>
        </TopBar>

        <Body>

          <GuideCard>
            <GuideTitle>
              강의계획서는 <b>지정된 양식으로만 제출 가능</b>합니다.
            </GuideTitle>
            <GuideList>
              <li>① ‘양식 다운로드’ 버튼을 눌러 파일을 받은 후,</li>
              <li>② 강의계획서를 작성하시고,</li>
              <li>③ 작성 완료된 파일을 업로드해 주십시오.</li>
            </GuideList>
            <DownloadLink>
              <Paperclip />
              양식 다운로드
            </DownloadLink>
          </GuideCard>

    
          <SectionGap />

   
          <UploadSection>
            <UploadHeader>업로드</UploadHeader>
            <FileArea>
              <HiddenFile
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  setFileName(f ? f.name : "선택된 파일이 없습니다.");
                }}
              />
              <FileLabel htmlFor="planFile">파일선택</FileLabel>
              <FileText>{fileName}</FileText>
            </FileArea>
          </UploadSection>
        </Body>
      </Phone>
    </Screen>
  );
}
