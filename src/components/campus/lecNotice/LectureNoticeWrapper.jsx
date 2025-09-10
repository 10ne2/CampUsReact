import React from 'react'
import List from '../commons/List'
import styled from 'styled-components';
import { listArrow } from '../img';


const ViewCount = styled.span`
  font-size: 12px;
  color: #2EC4B6;
  margin-left: 10px;
  font-weight: 700;
`

  function LectureNoticeWrapper() {
   return (
    <div>
      <List date="2025-09-01" title="자유 주변 카공할만한 카페 있을까요" name="권오규" marginBottom="15px"
            rightContent={
              <div style={{width:"28px", height:"28px", borderRadius:"14px", border:"1px solid #d9d9d9", marginTop:"15px" }}>
                <ViewCount>3</ViewCount>
              </div>
            }/>
               <List date="2025-09-01" title="자유 주변 카공할만한 카페 있을까요" name="권오규" marginBottom="15px"
            rightContent={
              <div style={{width:"28px", height:"28px", borderRadius:"14px", border:"1px solid #d9d9d9", marginTop:"15px" }}>
                <ViewCount>3</ViewCount>
              </div>
            }/>

               <List date="2025-09-01" title="자유 주변 카공할만한 카페 있을까요" name="권오규" marginBottom="15px"
            rightContent={
              <div style={{width:"28px", height:"28px", borderRadius:"14px", border:"1px solid #d9d9d9", marginTop:"15px" }}>
                <ViewCount>3</ViewCount>
              </div>
            }/>
            
      <List date="2025-09-03" title="안녕" height="65px"
            rightContent={<img src={listArrow} style={{width: "10px", marginTop:"9px"}}/>}/>
    </div>
  );
}

export default LectureNoticeWrapper