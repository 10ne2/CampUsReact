import React from 'react'
import styled from 'styled-components'
import {Content, ContentBox, Contents, Header, HeadText, IconBox, LecText } from '../home/HomeWrapper'
import { Flex, GrayHr } from '../home/HomeWrapperPro'
import { Hr } from '../menu/SideMenu'
import { unRead, read, go } from '../img'

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 4px 21px 0 21px;
    background-color: #f7f7f7;
    min-height: calc(100vh - 119px);
    position: relative;
`

const MiniIconBox = styled.div`
    width: 22px;
    height: 17px;
    line-height: 20px;
`
const Post = styled.div`
    position: absolute;
    width: 84px;
    height: 84px;
    border-radius: 80px;
    background-color: #2ec4b6;
    bottom: 87px;
    right: 26px;
    display: flex;               
    justify-content: center;      
    align-items: center; 
`
function MailDashBoard() {
  return (
     <Container style={{height:'100%'}}>
      <ContentBox style={{marginTop:'13px', height:'308px'}}>
        <Header>
            <HeadText>
                받은 메일함
            </HeadText>
            <IconBox>
                <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </IconBox>
        </Header>
        <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <MiniIconBox>
                <img src={unRead} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </MiniIconBox>
            <div style={{marginLeft:'12px'}}>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginLeft:'34px', marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
      </ContentBox>
      <ContentBox style={{marginTop:'13px', height:'308px'}}>
        <Header>
            <HeadText>
                보낸 메일함
            </HeadText>
            <IconBox>
                <img src={go} style={{width:"100%", height: "100%", objectFit:"cover"}}/>
            </IconBox>
        </Header>
        <Hr style={{margin:'0 auto', width:'344px'}}></Hr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{ marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
        <Contents style={{paddingTop:'13px'}}>
            <Content>
            <div>
            <LecText>김나연</LecText></div>
            <div style={{marginLeft:'10px'}}>
            <LecText style={{fontSize:'12px', color:'#aaa'}}>20220022</LecText>
            </div>
            <div style={{marginLeft:'auto'}}>
                <LecText style={{fontSize:'12px', color:'#aaa'}}>25-08-21</LecText>
            </div>
            </Content>
            <div style={{ marginTop:'10px'}}>
            <LecText style={{marginBottom:'10px'}}>과제 질문 있습니다~</LecText>
            </div>
        </Contents>
        <GrayHr style={{margin:'0 auto', width:'344px'}}></GrayHr>
      </ContentBox>
        <Post>
            <img src={go} style={{width:"70%", height: "70%", objectFit:'contain'}}/>
        </Post>
    </Container>
  )
}

export default MailDashBoard