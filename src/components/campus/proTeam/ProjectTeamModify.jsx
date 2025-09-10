import React, { useState, forwardRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Cancle, searchIcon, calender } from "../img";

const GlobalFix = createGlobalStyle`
  .react-datepicker-wrapper,
  .react-datepicker__input-container { width: 100%; }
  .react-datepicker-popper { z-index: 9999; }
`;

const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  max-width: 100%;
  overflow-x: hidden;
`;

export const TopBar = styled.div`
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
    padding-left: 8px;
`;
const CloseBtn = styled.button`
  width: 28px;
   height: 28px; 
   padding: 0; 
   border: 0;
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

const Section = styled.div` background: #fff; `;
const TopSection = styled(Section)`
  height: 490px;
   display: flex; 
   flex-direction: column;
    box-sizing: border-box;
`;
const TopContent = styled.div` padding: 16px; box-sizing: border-box; overflow: hidden; `;
const BottomSection = styled(Section)` height: 298px; padding: 16px; box-sizing: border-box; `;
const SectionGap = styled.div` height: 12px; background: #f3f3f3; `;

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
  flex: 1; min-width: 0;           
  height: 32px;                    
  border: 1px solid #d6d6d6; border-radius: 4px;
  padding: 0 10px; font-size: 13px; color: #333; outline: none;
  ::placeholder { color: #bdbdbd; }
`;

const RowTwoCols = styled.div`
  display: flex; 
  gap: 8px; 
  margin-bottom: 10px; 
  align-items: flex-start;
`;
const FieldCol = styled.div`
  flex: 1 1 0; 
  min-width: 0;    
  display: flex; 
  flex-direction: column; 
  gap: 6px;
`;
const FieldLabel = styled.div` font-size: 12px; color: #6b6b6b; font-weight: 600; `;

const DateField = styled.div`
  display: flex; 
  align-items: center; 
  gap: 6px;
`;
const DateInput = styled(Input)` flex: 1; `;

const CalendarBtn = styled.button`
  width: 32px; 
  height: 32px;    
  border: 1px solid #d6d6d6; 
  border-radius: 4px;
  background: #fff url(${calender}) center / 16px 16px no-repeat;
  cursor: pointer; 
  flex: 0 0 auto;
`;

const SearchBtn = styled.button`
  width: 32px; 
  height: 32px;       
  padding: 0; 
  border: none; 
  border-radius: 4px;
  background: url(${searchIcon}) center / 100% 100% no-repeat; cursor: pointer;
`;

const RadioWrap = styled.div`
  display: flex; 
  align-items: center; 
  gap: 16px; 
  font-size: 13px; 
  color: #333;
  input { margin-right: 6px; }
`;

const SectionLabel = styled.div` font-size: 13px; font-weight: 600; color: #3b3b3b; margin-top: 6px; `;
const Divider = styled.div` height: 1px; background: #e5e5e5; margin: 8px 0 12px; `;
const PlainText = styled.div` font-size: 13px; color: #808080; `;
const SubHeader = styled.div` font-size: 14px; font-weight: 600; color: #444; padding-bottom: 8px; border-bottom: 2px solid #2EC4B6; `;

const ReasonArea = styled.textarea`
  width: 100%; 
  height: 170px;     
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
const BottomLine = styled.div` height: 1px; background: #e5e5e5; margin-top: 12px; `;

const DateInputWithButton = forwardRef(({ value, onClick, placeholder }, ref) => (
  <DateField>
    <DateInput ref={ref} value={value || ""} readOnly onClick={onClick} placeholder={placeholder} />
    <CalendarBtn type="button" aria-label="달력 열기" onClick={onClick} />
  </DateField>
));

export default function ProjectTeamModify() {
  const [startDate, setStartDate] = useState(new Date("2025-08-26"));
  const [endDate, setEndDate] = useState(new Date("2025-08-26"));

  return (
    <Page>
      <GlobalFix />

      <TopSection>
        <TopBar>
          <CloseArea><CloseBtn aria-label="닫기" /></CloseArea>
          <Spacer />
          <RequestBtn>요청</RequestBtn>
        </TopBar>

        <TopContent>
          <Row>
            <Label>프로젝트명</Label>
            <Input placeholder="클라우드 기반 협업 플랫폼" />
          </Row>

          <RowTwoCols>
            <FieldCol>
              <FieldLabel>시작일</FieldLabel>
              <DatePicker
                selected={startDate}
                onChange={(d) => setStartDate(d)}
                dateFormat="yyyy-MM-dd"
                customInput={<DateInputWithButton placeholder="YYYY-MM-DD" />}
                shouldCloseOnSelect
                popperPlacement="bottom-start"
              />
            </FieldCol>

            <FieldCol>
              <FieldLabel>종료일</FieldLabel>
              <DatePicker
                selected={endDate}
                onChange={(d) => setEndDate(d)}
                minDate={startDate}
                dateFormat="yyyy-MM-dd"
                customInput={<DateInputWithButton placeholder="YYYY-MM-DD" />}
                shouldCloseOnSelect
                popperPlacement="bottom-start"
              />
            </FieldCol>
          </RowTwoCols>

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
    </Page>
  );
}