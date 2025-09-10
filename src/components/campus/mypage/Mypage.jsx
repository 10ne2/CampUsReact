import React from 'react'
import styled from 'styled-components'
import { Container } from './TopNav'
import { Cancle, pictureMdfBtn, user11 } from '../img'
import { CatTitle, FlexDiv } from '../commons/WHComponents'
import { RegistButton } from '../mail/MailWrite'
import { ContentBox, Header, HeadText } from '../home/HomeWrapper'
import { GreenBox } from '../proObject/ProjectObjectProjectList'
import { Hr } from '../menu/SideMenu'
import { usePasswordModalStore } from '../commons/modalStore'

export const PictureContainer = styled.div`
    width: 100%;
    height: 234px;
    display: flex;
    text-align: center;
    margin-top: 8px;
    align-items: center;
    background-color: #f7f7f7;
    justify-content: center;
`
export const Picture = styled.div`
    width: 114px;
    height: 114px;
    border-radius: 100px;
    position: relative;
    margin-top: 20px;
`
export const PictureModifyBtn = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 50%;         
    border: none;                
    padding: 0;                 
    overflow: hidden;          
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;          
    cursor: pointer;
    position: absolute;
    bottom: 0;
    right: 0;
`
export const Table = styled.table`
    font-size: 14px;
    width: 372px;
    margin: 0 auto;
`
export const TableTitle = styled.td`
    min-width: 77px;
    width: 77px;
    height: 30px;
    border-right: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    
`
export const TitleText = styled.h3`
    font-size: 14px;
    font-weight: 500;
    margin-left: 8px;
    margin-top: 7px;
`

export const TableOverView = styled.td`
    width: 295px;
    border-bottom: 1px solid #aaa;
    max-width: 295px;
    line-height: 2;
`
export const TableText = styled.h3`
    font-size: 14px;
    font-weight: 500;
    margin: 8px 12px 8px 18px;
    line-height: 1.8;
`
export const Wrap = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
`
const MyTitleText = styled.h3`
    font-size: 14px;
  font-weight: 700;
  margin: 0;
`
function Mypage() {
    const { showModal } = usePasswordModalStore();

    const openModal = () => {
    showModal("비밀번호를 변경", (form) => {
      console.log("확인 클릭됨:", form);
    });
  };
  return (
    <>
   <Container style={{backgroundColor:'#fff',display:'flex', justifyContent:'space-between', alignItems:'center'}}>
           <img src={Cancle} style={{width:'19px', height:'19px'}}></img>           
    </Container>
    
           <FlexDiv style={{marginLeft:'27px',justifyContent:'space-between',marginRight:'21px'}}>
                <CatTitle>마이페이지</CatTitle>
                
                <RegistButton style={{width:'48px', height:'26px'}}>저장</RegistButton>
            </FlexDiv>
        <PictureContainer>
            <div>
            <Picture>
                <img src={user11} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%',display:'block'}}/>
                <PictureModifyBtn>
                    <img src={pictureMdfBtn} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </PictureModifyBtn>
            </Picture>
            <HeadText style={{marginTop:'12px', marginBottom:'2px'}}>20191396</HeadText>
            <HeadText style={{marginTop:0}}>권오규</HeadText>
            </div>
        </PictureContainer>
        <Wrap>
        <ContentBox style={{height:'270px', marginBottom:'10px'}}>
            <Header style={{paddingTop:'18px', alignItems:'center',paddingLeft:'26px'}}>
            <MyTitleText>
                개인정보
            </MyTitleText>
            <GreenBox style={{width:'97px', height:'26px', lineHeight:'23px', marginLeft:'auto'}} onClick={openModal}>
                비밀번호 변경
            </GreenBox>
            </Header>
            <Hr style={{width:'372px', margin:'0 auto'}}/>
        <Table>
            <tr>
                <TableTitle>
                    <TitleText>
                    생년월일
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2000-01-01
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    이메일
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    ohgyu@naver.com
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    연락처
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    010-1234-1234
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    주소
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    대전광역시 중구 중앙로121번길 20 방산빌딩 2층, 3층(일부), 5층
                    </TableText>
                    </TableOverView>
            </tr>
        </Table>
        </ContentBox>
        <ContentBox style={{height:'450px', marginBottom:'10px'}}>
            <Header style={{paddingTop:'20px',paddingBottom:'10px', alignItems:'center',paddingLeft:'26px'}}>
            <MyTitleText>
                학사정보
            </MyTitleText>
            </Header>
            <Hr style={{width:'372px', margin:'0 auto'}}/>
        <Table>
            <tr>
                <TableTitle>
                    <TitleText>
                    입학대학
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    DW대학
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    전공
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    컴퓨터공학과
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    입학학년
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    1학년
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    입학년도
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2019
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    졸업년도
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2022
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    입학일자
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2019-03
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    졸업일자
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2022-02
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    졸업학제
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    4년제
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    졸업기수
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    45기
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    졸업전공
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    컴퓨터공학과
                    </TableText>
                    </TableOverView>
            </tr>
            <tr>
                <TableTitle>
                    <TitleText>
                    입학년도
                    </TitleText>
                    </TableTitle>
                <TableOverView>
                    <TableText>
                    2019
                    </TableText>
                    </TableOverView>
            </tr>
        </Table>
        </ContentBox>
        </Wrap>
    </>
  )
}

export default Mypage