import React, { useState } from 'react'
import styled from 'styled-components'
import dropdownArrow from '../img/dropdownArrow.png'
import searchIcon from '../img/searchIcon.png'
import listArrow from '../img/listArrow.png'
import pageArrow1 from '../img/pageArrow1.png'
import pageArrow2 from '../img/pageArrow2.png'
import pageArrow3 from '../img/pageArrow3.png'
import pageArrow4 from '../img/pageArrow4.png'
import clip from '../img/clip.png'
import { 
    ListHeader, CatTitle, FlexDiv,
    Container, Date, Title, Button,
    AttenBox1, AttenBox2, AttenBox3, AttenDate, AttenText, AttenChangeIng, AttenChange, AttenPass,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText }
    from '../commons/ListComponent'


function LectureAttendenceList() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("전체");

    const toggleOpen = () => setOpen(!open);

    // 옵션 선택
    const handleSelect = (value) => {
        setSelected(value);
        setOpen(false);
  };

  return (
    <>
        <div style={{width:"100%", minHeight:"731px", backgroundColor:"#f7f7f7"}}>
            <ListHeader style={{height:'56px'}}>
                <FlexDiv>
                    <CatTitle>출결</CatTitle>
                </FlexDiv>
            </ListHeader>
            <Container style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <Date style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</Date>
                    </FlexDiv>
                    <AttenChange>이의신청</AttenChange>
                </div>
                <AttenBox1>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox1>
                <AttenBox2>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>지각</AttenText>
                </AttenBox2>
            </Container>
            <Container style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <Date style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</Date>
                    </FlexDiv>
                </div>
                <AttenBox1>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox1>
                <AttenBox1>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox1>
            </Container>
            <Container style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <Date style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</Date>
                    </FlexDiv>
                    <FlexDiv>
                        <AttenChange>이의신청</AttenChange>
                        <AttenPass></AttenPass>
                    </FlexDiv>
                </div>
                <AttenBox3>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>결석</AttenText>
                </AttenBox3>
                <AttenBox1>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox1>
            </Container>
            <Container style={{height:'76px'}}>
                <div>
                    <FlexDiv>
                        <Title>1주차</Title>
                        <Date style={{marginLeft:'10px', marginTop:'1px'}}>(03-03 ~ 03-08)</Date>
                    </FlexDiv>
                    <AttenChangeIng>대기중</AttenChangeIng>
                </div>
                <AttenBox3>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>결석</AttenText>
                </AttenBox3>
                <AttenBox1>
                    <AttenDate>03-05 (수)</AttenDate>
                    <AttenText>출석</AttenText>
                </AttenBox1>
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

export default LectureAttendenceList