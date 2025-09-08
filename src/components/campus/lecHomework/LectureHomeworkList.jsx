import React, { useState } from 'react'
import styled from 'styled-components'
import searchIcon from '../img/searchIcon.png'
import pageArrow1 from '../img/pageArrow1.png'
import pageArrow2 from '../img/pageArrow2.png'
import pageArrow3 from '../img/pageArrow3.png'
import pageArrow4 from '../img/pageArrow4.png'
import clip from '../img/clip.png'
import { 
    ListHeader, CatTitle, FlexDiv,
    SearchBar, SearchText,
    Container, Date, Title, Button, NonButton, OkButton,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText }
    from '../commons/ListComponent'




function LectureHomeworkList() {

  return (
    <>
        <div style={{width:"100%", minHeight:"731px", backgroundColor:"#f7f7f7"}}>
            <ListHeader>
                <FlexDiv>
                    <CatTitle>과제제출</CatTitle>
                    <Button>글쓰기</Button>
                </FlexDiv>
                <SearchBar style={{width:"380px", marginLeft:'0px', justifyContent: 'start'}}>
                    <img src={searchIcon} style={{width:'15px', height:'16px'}}></img>
                    <SearchText placeholder='검색어를 입력해 주세요.'></SearchText>
                </SearchBar>
            </ListHeader>
            <Container>
                <div style={{width:'37px', lineHeight:'35px'}}>
                    1
                </div>
                <div style={{width:'192px'}}>
                    <Date>2025-09-01</Date>
                    <FlexDiv>
                        <Title>실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                </div>
                <NonButton>미제출</NonButton>
                <NonButton>미평가</NonButton>
            </Container>
            <Container>
                <div style={{width:'37px', lineHeight:'35px'}}>
                    1
                </div>
                <div style={{width:'192px'}}>
                    <Date>2025-09-01</Date>
                    <FlexDiv>
                        <Title>실습자료 제공</Title>
                        <img src={clip} style={{height:'12px', marginTop:'6px', marginLeft:'8px'}}></img>
                    </FlexDiv>
                </div>
                <OkButton>제출</OkButton>
                <OkButton>평가완료</OkButton>
            </Container>
            <nav>
                <PageNation>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow1} style={{width:"13px", height:"10px", marginLeft:'6px'}}></img>
                        </PageText>
                    </PageArrowButton>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow2} style={{width:"6px", height:"10px", marginLeft:'10px'}}></img>
                        </PageText>
                    </PageArrowButton>
                    <PageNumberButton>
                        <PageNumText href="#">1</PageNumText>
                    </PageNumberButton>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow3} style={{width:"6px", height:"10px", marginLeft:'10px'}}></img>
                        </PageText>
                    </PageArrowButton>
                    <PageArrowButton>
                        <PageText href="#">
                            <img src={pageArrow4} style={{width:"13px", height:"10px", marginLeft:'6px'}}></img>
                        </PageText>
                    </PageArrowButton>
                </PageNation>
            </nav>
        </div>

    </>
  )
}

export default LectureHomeworkList