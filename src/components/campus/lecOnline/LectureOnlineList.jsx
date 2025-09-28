import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { getLectureVideoList } from "../api";
import {
    ListHeader,
    CatTitle,
    FlexDiv,
    WHContainer,
    DateBox,
    Title,
    Button,
    SearchDrop,
    DropHeader,
    DropList,
    DropOption,
} from "../commons/WHComponent";
import { dropdownArrow, listArrow } from "../img";
import LectureOnlineRegist from "./LectureOnlineRegist";
import { useAuthStore } from "../commons/modalStore";

export const Thumnail = styled.div`
  width: 106px;
  height: 64px;
  border-radius: 5px;
  background-image: url("${(props) => props.src || ""}");
  background-size: cover;
  background-position: center;
`;

function LectureOnlineList() {
    const [dropOpen, setDropOpen] = useState(false);
    const [dropSelected, setDropSelected] = useState("1주차");
    const [videoList, setVideoList] = useState([]);
    const [role, setRole] = useState(""); 
    const [showRegistModal, setShowRegistModal] = useState(false);
    const [weeks, setWeeks] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lecId = searchParams.get("lec_id");
    const memId = searchParams.get("memId");
    const auth = useAuthStore(state => state.user);
    
    const toggleOpen = () => setDropOpen((prev) => !prev);
   const handleDropSelect = async (value) => {
    setDropSelected(value);
    setDropOpen(false);

    // 선택된 주차로 영상 리스트 갱신
    if (!lecId || !memId) return;
    try {
        const res = await getLectureVideoList(lecId, memId, value); // week 파라미터 추가
        setVideoList(res.data.videoList || []);
    } catch (err) {
        console.error("주차 변경 후 영상 목록 불러오기 실패:", err);
    }
};

    // ✅ 영상 목록 가져오기 함수
    const fetchVideos = async (week = null) => {
    if (!lecId || !memId) return;
    try {
        // week 파라미터가 있으면 API 호출 시 전달
        const res = await getLectureVideoList(lecId, memId, week);
        const list = res.data.videoList || [];

        // 각 영상 progress 반영 (학생인 경우)
        const updatedList = list.map(video => {
            return {
                ...video,
                progress: video.progress ?? 0 // progress가 없으면 0으로 초기화
            };
        });

        setVideoList(updatedList);
        setRole(res.data.role || "student");

        const allWeeks = res.data.allWeeks?.length
            ? res.data.allWeeks
            : [...new Set(list.map(v => v.lecvidWeek))].sort();
        setWeeks(allWeeks);

        console.log("Fetched videos:", res.data);
    } catch (err) {
        console.error("영상 목록 불러오기 실패:", err);
        alert("영상 목록 불러오기에 실패했습니다.");
    }
};

    // 초기 렌더링 시 영상 목록 가져오기
    useEffect(() => {
        fetchVideos();
    }, [location.search]);

    const filteredVideos = dropSelected === "1주차"
        ? videoList
        : videoList.filter(v => v.lecvidWeek === dropSelected);

    return (
        <div style={{ width: "100%", minHeight: "100vh", backgroundColor: "#f7f7f7" }}>
            <ListHeader style={{ height: "96px" }}>
                <FlexDiv>
                    <CatTitle>온라인 강의</CatTitle>
                    {role === "professor" && (
                        <Button onClick={() => setShowRegistModal(true)}>등록</Button>
                    )}
                </FlexDiv>
                <FlexDiv style={{ marginTop: "10px", justifyContent: "center" }}>
                    <SearchDrop style={{ width: "371px", marginTop: "-9px" }}>
                        <DropHeader
                            style={{
                                width: "371px",
                                height: "28px",
                                fontSize: "13px",
                                lineHeight: "16px",
                                justifyContent: "center",
                                gap: "10px",
                            }}
                            onClick={toggleOpen}
                        >
                            <div>{dropSelected}</div>
                            <div>
                                <img
                                    src={dropdownArrow}
                                    style={{
                                        width: "13px",
                                        height: "8px",
                                        marginLeft: "auto",
                                        marginTop: "4px",
                                    }}
                                    alt="v"
                                />
                            </div>
                        </DropHeader>
                        {dropOpen && (
                            <DropList style={{ width: "371px", textAlign: "center" }}>
                                {weeks.map(week => (
                                    <DropOption key={week} onClick={() => handleDropSelect(week)}>
                                        {week}
                                    </DropOption>
                                ))}
                            </DropList>
                        )}
                    </SearchDrop>
                </FlexDiv>
            </ListHeader>

            {/* ✅ 영상 목록 */}
            {videoList.length === 0 ? (
                <div style={{ textAlign: "center", marginTop: "40px", color: "#666" }}>
                    등록된 강의가 없습니다.
                </div>
            ) : (
                videoList.map((video) => (
                    <WHContainer
                        key={video.lecvidId}
                        style={{ height: auth?.mem_auth?.includes("ROLE02") ? "95px" : "120px",  flexDirection: "column", cursor: "pointer" }}
                        onClick={() =>
                            navigate(
                                `/online/detail?lec_id=${lecId}&lecvid_id=${video.lecvidId}&memId=${memId}`
                            )
                        }
                    >
                        <FlexDiv>
                            <Thumnail src={`http://localhost/campus${video.lecvidThumbnail}`} style={{backgroundSize:'contain', backgroundRepeat:'no-repeat'}}/>
                            <div style={{ marginLeft: "5px", display: "flex", flexDirection: "column", gap: "2px" }}>
                                <Title style={{ marginBottom: "20px" }}>{video.lecvidName}</Title>
                                <DateBox>
                                    {video.lecvidDeadline
                                        ? new Date(video.lecvidDeadline).toLocaleDateString("ko-KR")
                                        : "기간 미정"}
                                </DateBox>
                            </div>
                            <div style={{ marginLeft: "auto", marginTop: "8px" }}>
                                <img src={listArrow} style={{ height: "20px", marginTop: "6px" }} alt=">" />
                            </div>
                        </FlexDiv>
                      {!(auth?.mem_auth?.includes("ROLE02")) && (
  <div style={{ marginTop: "10px" }}>
    <div style={{ width: "372px", height: "20px", background: "#ddd", borderRadius: "10px", overflow: "hidden", }} >
      <div style={{ width: `${video.progress || 0}%`, height: "100%",
                    background: video.progress >= 90 ? "#2EC4B6" : "#FFE99A",
                    textAlign: "center", lineHeight: "20px", color: "#212121", }} >
        {video.progress > 0 ? `${video.progress}%` : null}
      </div>
    </div>
  </div>
)}
                    </WHContainer>
                ))
            )}

            {/* ✅ 등록 모달 */}
            {showRegistModal && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#fff",
                        zIndex: 2000,
                        overflowY: "auto",
                    }}
                >
                    <LectureOnlineRegist
                        onClose={() => setShowRegistModal(false)}
                        onRegisterSuccess={async () => {
                            await fetchVideos(); // 모달 등록 후 새로고침
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default LectureOnlineList;