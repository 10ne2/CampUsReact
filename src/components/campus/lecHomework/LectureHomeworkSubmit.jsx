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


const ToolsArea = styled.div`
  width: 115px;   
  height: 76px;  
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ToolBtn = styled.button`
  border: 0;
  background: transparent;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  color: #6b6b6b;
`;


const AccentLine = styled.div`
  height: 2px;
  background: #2EC4B6;
margin: 0 16px; 
`;

const Body = styled.div`
  padding: 16px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #212121;
`;

const Period = styled.div`
  margin-top: 6px;
  font-size: 12px;
  color: #9e9e9e;
`;


const Divider = styled.div`
  height: 1px;
  background: #e5e5e5;
  margin: 12px 0;          
`;

const ContentArea = styled.textarea`
  width: 100%;
  height: 305px;            
  border: 0;                
  padding: 12px 2px 14px;
  font-size: 14px;
  outline: none;
  resize: none;
  line-height: 1.5;
  ::placeholder { color: #BDBDBD; }
`;


const FileRow = styled.div`
  margin-top: 16px;
`;

const FileDivider = styled.div`
  height: 1px;
  background: #e5e5e5;
  margin-bottom: 14px;
`;

const HiddenFile = styled.input.attrs({ type: "file", id: "hwFile" })`
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

export default function LectureHomeworkSubmit() {
  const [fileName, setFileName] = useState("선택된 파일이 없습니다.");

  return (
    <Screen>
      <Phone>
        <TopBar>
          <CloseBtn aria-label="닫기">×</CloseBtn>
          <Spacer />
          <SubmitBtn>등록</SubmitBtn>
        </TopBar>

        

        <AccentLine />

        <Body>
          <Title>7주차 과제 입니다.</Title>
          <Period>2025-08-05 16:00 ~ 2025-08-11 23:59</Period>

          {/* 내용 위의 선 */}
          <Divider />

          <ContentArea placeholder="내용을 입력해주세요." />

          <FileRow>
            {/* 파일 영역 위 한 줄 */}
            <FileDivider />
            <HiddenFile
              onChange={(e) => {
                const f = e.target.files?.[0];
                setFileName(f ? f.name : "선택된 파일이 없습니다.");
              }}
            />
            <FileLabel htmlFor="hwFile">파일선택</FileLabel>
            <FileText>{fileName}</FileText>
          </FileRow>
        </Body>
      </Phone>
    </Screen>
  );
}
