import React, { useRef, useState, forwardRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Cancle, searchIcon, calender } from "../img";

const Page = styled.div`
  width: 412px;
  margin: 0 auto;
  overflow-x: hidden;
`;

const TopBar = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
`;
const CloseBtn = styled.button`
  width: 28px; height: 28px; padding: 0; border: 0;
  background: url(${Cancle}) center / 24px 24px no-repeat transparent;
  cursor: pointer; font-size: 0; color: transparent;
`;
const Spacer = styled.div` flex: 1; `;
const SubmitBtn = styled.button`
  background: #2EC4B6; color: #fff; border: 0; border-radius: 5px;
  padding: 8px 14px; font-weight: 700; cursor: pointer;
`;

const Section = styled.div`
  background: #fff;
  box-sizing: border-box;
`;
const TopSection = styled(Section)` height: 320px; `;   
const BottomSection = styled(Section)` height: 465px; `; 
const SectionInner = styled.div`
  padding: 16px;
  height: 100%;
  box-sizing: border-box;
`;
const Gap = styled.div` height: 15px; background: #f3f3f3; `; 

const Row = styled.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 10px;
`;
const Label = styled.div`
  width: 64px; font-size: 13px; font-weight: 600; color: #3b3b3b; 
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr) 34px;
  column-gap: 8px;
  align-items: center;
  margin-bottom: 10px;
`;
const DPWrap = styled.div`
  min-width: 0;
  .react-datepicker-wrapper,
  .react-datepicker__input-container { width: 100%; min-width: 0; }
`;
const DateField = styled.input`
  width: 100%; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  padding: 0 10px; font-size: 13px; color: #333;
  background: #fff; outline: none; cursor: pointer;
`;
const CalendarBtn = styled.button`
  width: 34px; height: 34px; border: 1px solid #d6d6d6; border-radius: 5px;
  background: #fff url(${calender}) center / 18px 18px no-repeat;
  cursor: pointer;
`;

const Radios = styled.div`
  display: flex; align-items: center; gap: 16px; font-size: 13px; color: #333;
  input { margin-right: 6px; }
`;

const TextInput = styled.input`
  flex: 1; height: 34px;
  border: 1px solid #d6d6d6; border-radius: 5px;
  padding: 0 10px; font-size: 13px; color: #333; outline: none;
  ::placeholder { color: #bdbdbd; }
`;
const SearchBtn = styled.button`
  width: 34px; height: 34px; border: 0; padding: 0;
  background: url(${searchIcon}) center / 100% 100% no-repeat transparent;
  cursor: pointer;
`;

const UnderlineInput = styled.input`
  width: 100%; border: 0; border-bottom: 1px solid #e5e5e5;
  padding: 12px 2px; font-size: 14px; outline: none;
  ::placeholder { color: #BDBDBD; }
`;
const UnderlineArea = styled.textarea`
  width: 100%; height: 180px; resize: none;
  border: 0; padding: 12px 2px; outline: none; font-size: 14px; color: #333;
  ::placeholder { color: #BDBDBD; }
`;
const BottomLine = styled.div` height: 1px; background: #e5e5e5; margin-top: 14px; `;

const DPInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <DateField
    ref={ref}
    onClick={onClick}
    value={value || ""}
    placeholder={placeholder || "YYYY-MM-DD"}
    readOnly
  />
));

export default function ProjectTeamRegist() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate]     = useState(new Date());
  const startRef = useRef(null);
  const endRef   = useRef(null);

  return (
    <Page>
      <TopBar>
        <CloseBtn aria-label="닫기" />
        <Spacer />
        <SubmitBtn>등록</SubmitBtn>
      </TopBar>

      {/* 위 320 */}
      <TopSection>
        <SectionInner>
          {/* 시작일 */}
          <DateGrid>
            <Label>시작일</Label>
            <DPWrap>
              <DatePicker
                selected={startDate}
                onChange={setStartDate}
                dateFormat="yyyy-MM-dd"
                customInput={<DPInput ref={startRef} />}
              />
            </DPWrap>
            <CalendarBtn onClick={() => startRef.current?.setFocus()} />
          </DateGrid>

          <DateGrid>
            <Label>종료일</Label>
            <DPWrap>
              <DatePicker
                selected={endDate}
                onChange={setEndDate}
                dateFormat="yyyy-MM-dd"
                customInput={<DPInput ref={endRef} />}
              />
            </DPWrap>
            <CalendarBtn onClick={() => endRef.current?.setFocus()} />
          </DateGrid>

          <Row>
            <Label>학기</Label>
            <Radios>
              <label><input type="radio" name="term" defaultChecked />1학기</label>
              <label><input type="radio" name="term" />2학기</label>
            </Radios>
          </Row>

          <Row>
            <Label>담당교수</Label>
            <TextInput placeholder="담당교수를 등록해주세요." />
            <SearchBtn aria-label="담당교수 검색" />
          </Row>

          <Row>
            <Label>팀장</Label>
            <TextInput placeholder="팀장을 등록해주세요." />
            <SearchBtn aria-label="팀장 검색" />
          </Row>

          {/* 팀원 */}
          <Row>
            <Label>팀원</Label>
            <TextInput placeholder="팀원을 등록해주세요." />
            <SearchBtn aria-label="팀원 검색" />
          </Row>
        </SectionInner>
      </TopSection>

      <Gap />

      <BottomSection>
        <SectionInner>
          <UnderlineInput placeholder="프로젝트명을 입력해주세요." />
          <UnderlineArea placeholder="내용을 입력해주세요." />
          <BottomLine />
        </SectionInner>
      </BottomSection>
    </Page>
  );
}
