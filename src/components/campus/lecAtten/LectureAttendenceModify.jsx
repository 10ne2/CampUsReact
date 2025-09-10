import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";


const MobileShell = styled.div`
  width: 100vw;
  padding: 12px 20px 24px;
  background: #fafbfc;
`;

const TopLine = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  margin-bottom: 4px;
`;
const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  background: transparent;
  font-size: 20px;
  line-height: 1;
  color: #7b8794;
  cursor: pointer;
`;
const Title = styled.h1`
  margin: 8px 0 6px;
  font-size: 18px;
  font-weight: 700;
  color: #111;
`;
const BrandDivider = styled.div`
  height: 2px;
  background: #2ec4b6;
  border-radius: 2px;
  opacity: 0.6;
  margin-bottom: 12px;
`;

/* ===== Post Card ===== */
const Card = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 12px;
  padding: 0px;
  background: #fff;
  height: 350px;
`;
const PostTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
`;
const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #98a1a8;
  margin-bottom: 10px;
`;
const Avatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  overflow: hidden;
  background: #e9eef2 url("https://dummyimage.com/44x44/cccccc/ffffff&text=%20") center/cover no-repeat;
`;
const Dot = styled.span`
  width: 3px;
  height: 3px;
  background: #cfd6dc;
  border-radius: 50%;
  display: inline-block;
`;
const Body = styled.div`
  margin: 10px 0 12px;
  padding: 12px;
  border: 1px solid #e8ecef;
  border-radius: 8px;
  background: #fafcfd;
  font-size: 13px;
  color: #6b7680;
  line-height: 1.7;
  white-space: pre-line;
`;
const AttachRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #6b7680;
  padding: 8px 0;
  border-top: 1px solid #eaeef2;
  margin-top: 100px;
`;
const ListBtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const GhostBtn = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border: 1px solid #dfe5ea;
  background: #fff;
  color: #59636b;
  border-radius: 8px;
  cursor: pointer;
`;

/* ===== Section: 출결 변경 ===== */
const Section = styled.div`
  margin-top: 16px;
`;
const SectionHead = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
`;
const SectionDivider = styled(BrandDivider)`
  margin: 0 0 12px;
`;
const Segments = styled.div`
  display: inline-flex;
  gap: 8px;
  margin-bottom: 10px;
`;
const SegBtn = styled.button`
  height: 28px;
  padding: 0 12px;
  font-size: 12px;
  border-radius: 8px;
  border: 1px solid ${p => (p.active ? "#2ec4b6" : "#dfe5ea")};
  background: ${p => (p.active ? "#e8fbf8" : "#fff")};
  color: ${p => (p.active ? "#2ec4b6" : "#59636b")};
  cursor: pointer;
`;

/* ===== Custom Select ===== */
const Field = styled.div`
  position: relative;
  margin: 8px 0;
`;
const SelectBox = styled.button`
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: 1px solid #dfe5ea;
  border-radius: 8px;
  background: #fff;
  color: #373f47;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Caret = styled.span`
  font-size: 12px;
  color: #86919a;
`;
const Menu = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 6px);
  margin: 0;
  padding: 8px 0;
  list-style: none;
  border: 1px solid #dfe5ea;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,.08);
  z-index: 10;
`;
const Option = styled.li`
  padding: 10px 12px;
  font-size: 13px;
  color: #37424a;
  cursor: pointer;
  &:hover { background: #f5f7f9; }
`;

/* ===== Reason / Memo ===== */
const TextInput = styled.textarea`
  width: 100%;
  min-height: 44px;
  border: 1px solid #dfe5ea;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 13px;
  color: #444;
  outline: none;
  resize: none;
  ::placeholder { color: #c0c7ce; }
  margin-top: 8px;
`;

/* ===== Submit ===== */
const SubmitWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;
const SubmitBtn = styled.button`
  width: 100%;
  height: 40px;
  background: ${p => (p.disabled ? "#cfeeed" : "#2ec4b6")};
  color: #fff;
  border: 0;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  cursor: ${p => (p.disabled ? "not-allowed" : "pointer")};
`;

/* ===== Component ===== */
export default function LectureAttendenceModify({
  onClose = () => {},
  onSubmit = (payload) => { alert(JSON.stringify(payload, null, 2)); }
}) {
  // mode: 'modify' | 'reject'
  const [mode, setMode] = useState("modify");
  const [status, setStatus] = useState("결석");       // 출석 상태
  const [memo, setMemo] = useState("");              // 메모/사유
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const statuses = ["출석", "지각", "결석"];

  // close menu on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const canSubmit = mode === "reject" ? memo.trim().length > 0 : true;

  const handleSubmit = () => {
    if (!canSubmit) return;
    onSubmit({
      mode,          // 'modify' or 'reject'
      status,        // 출석/지각/결석 (modify일 때 의미 있음)
      reason: memo.trim() || null
    });
  };

  return (
      <MobileShell>
        <TopLine>
          <CloseBtn aria-label="close" onClick={onClose}>×</CloseBtn>
        </TopLine>
        <Title>출결</Title>
        <BrandDivider />

        <Card>
          <PostTitle>[2025-04-11] 출석 문의</PostTitle>

          <MetaRow>
            <Avatar />
            <span>권오규</span>
            <Dot />
            <span>2025-08-29 21:49</span>
          </MetaRow>

          <Body>
            교수님 안녕하세요 자바 프로그래밍 수업을 듣는 권오규 입니다.
            다음이 아닌 이번 4/11 수업에 예비군 훈련을 다녀와 수업에 참여하지 못했습니다.
            출석으로 변경 부탁드립니다. 예비군 훈련증 파일 첨부 하였습니다!
          </Body>

          <AttachRow>📎 자바프로그래밍 권오규 10주차.hwp</AttachRow>

          <ListBtnWrap>
            <GhostBtn>목록</GhostBtn>
          </ListBtnWrap>
        </Card>

        <Section>
          <SectionHead>출결 변경</SectionHead>
          <SectionDivider />

          <Segments>
            <SegBtn active={mode === "modify"} onClick={() => setMode("modify")}>변경</SegBtn>
            <SegBtn active={mode === "reject"} onClick={() => setMode("reject")}>거절</SegBtn>
          </Segments>

          {mode === "modify" && (
            <>
              <Field ref={menuRef}>
                <SelectBox type="button" onClick={() => setOpen(v => !v)} aria-haspopup="listbox" aria-expanded={open}>
                  <span>{status}</span>
                  <Caret>▾</Caret>
                </SelectBox>

                {open && (
                  <Menu role="listbox">
                    {statuses.map((s) => (
                      <Option key={s} role="option" aria-selected={status === s}
                        onClick={() => { setStatus(s); setOpen(false); }}>
                        {s}
                      </Option>
                    ))}
                  </Menu>
                )}
              </Field>

              <TextInput
                placeholder=""
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
              />
            </>
          )}

          {mode === "reject" && (
            <TextInput
              placeholder="거절 사유를 작성해주세요"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          )}

          <SubmitWrap>
            <SubmitBtn disabled={!canSubmit} onClick={handleSubmit}>등록</SubmitBtn>
          </SubmitWrap>
        </Section>
      </MobileShell>
  );
}
