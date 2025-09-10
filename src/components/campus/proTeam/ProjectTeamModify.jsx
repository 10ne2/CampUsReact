
import React from "react";
import styled from "styled-components";


import searchIcon from "../img/searchbtn.png";
import { Cancle } from "../img";

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

const Phone = styled.div`
  width: 412px;
  height: 800px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 24px rgba(0,0,0,0.08);
  overflow: hidden;
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
  width: 72px;            
  height: 56px;                
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;       
`;


const CloseBtn = styled.button`
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: url(${Cancle}) center / 24px 24px no-repeat; 
  cursor: pointer;


  font-size: 0;
  color: transparent;
`;

const Spacer = styled.div` flex: 1; `;

const RequestBtn = styled.button`
  background: #2EC4B6;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 8px 14px;
  font-weight: 700;
  cursor: pointer;
`;


const Section = styled.div`
  background: #fff;
`;

const TopSection = styled(Section)`
  height: 490px;              
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TopContent = styled.div`
  padding: 16px;                
  box-sizing: border-box;
  overflow: hidden;
`;

const BottomSection = styled(Section)`
  height: 298px;
  padding: 16px;
  box-sizing: border-box;
`;

const SectionGap = styled.div`
  height: 12px;              
  background: #f3f3f3;
`;


const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Label = styled.div`
  width: 72px;               
  font-size: 13px;
  font-weight: 600;            
  color: #3b3b3b;
`;

const Input = styled.input`
  flex: 1;
  height: 34px;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 13px;
  color: #333;
  outline: none;
  ::placeholder { color: #bdbdbd; }
`;


const DateGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

const IconBtn = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid #d6d6d6;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
  line-height: 1;
`;


const SearchBtn = styled.button`
  width: 34px;
  height: 34px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: url(${searchIcon}) center / 100% 100% no-repeat;
  cursor: pointer;
`;


const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: #333;
  input { margin-right: 6px; }
`;


const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #3b3b3b;
  margin-top: 6px;
`;

const Divider = styled.div`
  height: 1px;
  background: #e5e5e5;
  margin: 8px 0 12px;
`;

const PlainText = styled.div`
  font-size: 13px;
  color: #808080;
`;


const SubHeader = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #444;
  padding-bottom: 8px;
  border-bottom: 2px solid #2EC4B6;
`;

const ReasonArea = styled.textarea`
  width: 100%;
  height: 180px;
  margin-top: 12px;
  border: 0;
  background: transparent;
  padding: 0;
  font-size: 13px;
  color: #333;
  outline: none;
  resize: none;
  line-height: 1.5;
  ::placeholder { color: #bdbdbd; }
`;

const BottomLine = styled.div`
  height: 1px;
  background: #e5e5e5;
  margin-top: 14px;
`;

export default function ProjectTeamModify() {
  return (
    <Screen>
      <Phone>
      
        <TopSection>
          <TopBar>
            <CloseArea>
              <CloseBtn aria-label="닫기" />
            </CloseArea>
            <Spacer />
            <RequestBtn>요청</RequestBtn>
          </TopBar>

          <TopContent>
            <Row>
              <Label>프로젝트명</Label>
              <Input placeholder="클라우드 기반 협업 플랫폼" />
            </Row>

            <Row>
              <Label>시작일</Label>
              <DateGroup>
                <Input defaultValue="2025-08-26" />
                <IconBtn aria-label="달력">📅</IconBtn>
              </DateGroup>
            </Row>

            <Row>
              <Label>종료일</Label>
              <DateGroup>
                <Input defaultValue="2025-08-26" />
                <IconBtn aria-label="달력">📅</IconBtn>
              </DateGroup>
            </Row>

            <Row>
              <Label>학기</Label>
              <RadioWrap>
                <label><input type="radio" name="term" defaultChecked />1학기</label>
                <label><input type="radio" name="term" />2학기</label>
              </RadioWrap>
            </Row>

            <Row>
              <Label>담당교수</Label>
              <Input defaultValue="서형원" />
            </Row>

            <Row>
              <Label>팀장</Label>
              <Input defaultValue="김원희" />
              <SearchBtn aria-label="팀장 검색" />
            </Row>

            <Row>
              <Label>팀원</Label>
              <Input defaultValue="권오규, 김민주, 김선범" />
              <SearchBtn aria-label="팀원 검색" />
            </Row>

            <SectionLabel>내용</SectionLabel>
            <Divider />
            <PlainText>내용입니다.</PlainText>
          </TopContent>
        </TopSection>

        
        <SectionGap />

        
        <BottomSection>
          <SubHeader>수정 사유</SubHeader>
          <ReasonArea placeholder="수정 사유를 입력해주세요." />
          <BottomLine /> 
        </BottomSection>
      </Phone>
    </Screen>
  );
}
