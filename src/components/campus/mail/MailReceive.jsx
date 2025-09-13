import React, { useEffect, useState } from 'react'
import MailNavBar from './MailNavBar'
import { Container } from '../topNav/TopNav'
import { searchIcon, listArrow, pageArrow1, pageArrow2, pageArrow3,
        pageArrow4, allSelect, trash, radioCheck, replace, read, unRead, unImp, imp,
        unLock, lock,
        Cancle} from '../img'
import { 
    ListHeader, FlexDiv, SearchBar, SearchText,
    DateBox, Title, Button,
    PageNation, PageArrowButton, PageNumText, PageNumberButton, PageText, 
     RegistButton,
    CheckText, MailView, CheckBox, CheckMark
    }
    from '../commons/WHComponent'
import { GrayHr } from '../home/HomeWrapperPro'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { getMailReceive, updateMailReceiveLockToggle } from '../api'

const MailContainer = styled.div`
    width: 100%;
    height: 65px;
    margin-top: 9px;
    background-color: ${props => props.unread ? '#fff' : '#fcfcfc'};
    padding: 14px 22px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
`

const BoxButton = styled.input`
    width: 22px;
    height: 22px;
    border: 1px solid #aaa;
    border-radius: 3px;
    background-color: #fff;
    background-image: url(${allSelect});
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    outline: none;
`
const RadioButton = styled.input`
    display: none;
`
const RadioMark = styled.span`
    width: 13px;
    height: 13px;
    cursor: pointer;
    border: 1px solid #bbb;
    border-radius:8px;
    background-color: white;
    display: block;
    margin-top: 2px;
    

    ${RadioButton}:checked + &{
        background-color: #fff;
        background-image: url(${radioCheck});
        background-size: 65%;
        background-repeat: no-repeat;
        background-position: center;
    }
`

function MailReceive() {
    const [checked, setChecked] = useState("");
    const [boxChecked, setBoxChecked] = useState([]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const memId = query.get("memId");

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const yy = String(date.getFullYear()).slice(-2); // 연도 뒤 2자리
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // 월 0~11이므로 +1
        const dd = String(date.getDate()).padStart(2, '0'); // 일
        return `${yy}-${mm}-${dd}`;
    };

    const filteredList = data?.receiveMailList?.filter(rml => {
        if (checked === "") return true;
        if (checked === "read") return rml.mail_rread === 0;
        if (checked === "imp") return rml.mail_rimp == 1;
        if (checked === "lock") return rml.mail_rlock == 1;
        return true;
    });

    useEffect(() => {
            getMailReceiveList();
        }, [])
    
    async function getMailReceiveList() {
        try {
            let response = await getMailReceive();
            setData(response.data);
            console.log(response);
            setLoading(false);
        } catch (e) {
            console.log(e);
            alert("데이터를 불러오는데 실패했습니다. 잠시 후 다시 시도해 주세요.")
        }
    }

    const handleCheckboxChange = (e) => {
        const value = parseInt(e.target.value, 10);

        if (boxChecked.includes(value)) {
            setBoxChecked(boxChecked.filter((v) => v != value));
        } else {
            setBoxChecked([...boxChecked, value])
        }
    }

    const handleSelectAll = () => {
        if (!data?.receiveMailList) return;

        if (boxChecked.length === data.receiveMailList.length) {
            setBoxChecked([]);
        } else {
            const allIds = data.receiveMailList.map((rml) => rml.mail_id);
            setBoxChecked(allIds);
        }
    }

    const handleToggleLock = async(mail_id) => {
        setData(prev => {
            const updated = {...prev};
            updated.receiveMailList = updated.receiveMailList.map(mail =>
                mail.mail_id === mail_id
                ? { ...mail, mail_slock: mail.mail_slock === 0 ? 1 : 0 }
                : mail
            );
            return updated;
        });

        try {
            const res = await updateMailReceiveLockToggle(mail_id);

            if (!res.data.success) {
            // 실패 시 롤백
            setData(prev => {
                const updated = {...prev};
                updated.receiveMailList = updated.receiveMailList.map(mail =>
                    mail.mail_id === mail_id
                    ? { ...mail, mail_slock: mail.mail_slock === 0 ? 1 : 0 }
                    : mail
                );
                return updated;
            });
            alert("잠금 상태 변경 실패");
        }

        } catch(e) {
            console.error(e);
            alert("잠금 상태 변경 실패");
        }
    }

  return (
    <>  
        <div style={{backgroundColor:"#f7f7f7", minHeight:'100vh'}}>
            <ListHeader style={{height:'97px', padding:'13px 25px'}}>
                <FlexDiv style={{justifyContent:'center'}}>
                    <SearchBar style={{marginTop:'3px', marginLeft:'0px', width:'378px', justifyContent:'flex-start'}}>
                        <img src={searchIcon} style={{width:'15px', height:'16px', marginBottom:"8px"}}></img>
                        <SearchText placeholder='검색어를 입력해 주세요.' style={{width:'310px'}}></SearchText>
                    </SearchBar>
                </FlexDiv>
                <FlexDiv style={{marginTop:'10px'}}>
                    <BoxButton type='button' onClick={handleSelectAll}></BoxButton>
                    <BoxButton type='button' style={{backgroundImage:`url(${trash})`, marginLeft:'8px'}}></BoxButton>
                    <BoxButton type='button' style={{backgroundImage:`url(${replace})`, marginLeft:'8px'}} onClick={() => window.location.reload()}></BoxButton>
                    <FlexDiv style={{width:'307px', justifyContent:'end', marginTop:'3px'}}>
                        <label style={{display:'flex', marginRight:'10px'}}>
                            <RadioButton type='radio' name="mail" value="read" checked={checked === "read"} onChange={(e) => setChecked(e.target.value)}/>
                            <RadioMark/>
                            <CheckText style={{display:'block', color:'#707070', marginBottom:'5px'}}>안 읽은 메일</CheckText>
                        </label>
                        <label style={{display:'flex', marginRight:'10px'}}>
                            <RadioButton type='radio' name="mail" value="imp" checked={checked === "imp"} onChange={(e) => setChecked(e.target.value)}/>
                            <RadioMark/>
                            <CheckText style={{color:'#707070'}}>중요 메일</CheckText>
                        </label>
                        <label style={{display:'flex'}}>
                            <RadioButton type='radio' name="mail" value="lock" checked={checked === "lock"} onChange={(e) => setChecked(e.target.value)}/>
                            <RadioMark/>
                            <CheckText style={{color:'#707070'}}>잠긴 메일</CheckText>
                        </label>
                    </FlexDiv>
                </FlexDiv>
            </ListHeader>

            <div style={{display:'flex', flexDirection:'column', overflowY: 'auto'}}>
                { loading ? ( <p>로딩 중...</p>) : (
                    filteredList.map((rml) => 
                    <MailContainer key={rml.mail_id} unread={rml.mail_rread === 0}>
                        <MailView>
                            <img src={rml.mail_rlock === 0 ? unLock : lock} style={{height:'20px', marginTop:'8px', cursor:'pointer'}} onClick={() => handleToggleLock(rml.mail_id)}></img>
                        </MailView>
                        <div>
                            <FlexDiv>
                                <label style={{display: "flex", justifyContent:'end', marginLeft:'10px'}}>
                                    <CheckBox type='checkbox' name="check"  value={rml.mail_id} checked={boxChecked.includes(rml.mail_id)} onChange={handleCheckboxChange}/>
                                    <CheckMark/>
                                </label>
                                <Title style={{marginLeft:'10px', marginTop:'-2px'}}>{rml.sender_name}</Title>
                                <DateBox style={{marginLeft:'10px'}}>{rml.mail_sender}</DateBox>
                            </FlexDiv>
                            <Title style={{width:'200px', marginLeft:'37px', marginTop:'-3px', fontWeight:'400'}}>{rml.mail_name}</Title>
                        </div>
                        <div style={{marginLeft:'auto', marginTop:'-2px'}}>
                            <DateBox>{formatDate(rml.mail_rdate)}</DateBox>
                            <div>
                                <img src={rml.mail_rimp === 0 ? unImp : imp} style={{width:'18px',height:'18px', marginLeft:'32px', cursor:'pointer'}}></img>
                            </div>
                        </div>
                    </MailContainer>
                    ))
                }
            </div>

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

export default MailReceive