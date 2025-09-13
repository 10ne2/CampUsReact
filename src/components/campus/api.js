import axios from "axios";

export function getHomeworklist() {
  return axios.get('/api/homework/list');
}

export function checkSession() {
  return axios.get('/api/login/check');
}

// 로그아웃
export function logoutUser() {
  return axios.post('/api/login/logout', {});
}
export function loginUser(id, pwd) {
  return axios.post(
    '/api/login/index',
    { id, pwd }
  );
}

export function getHomeWrapperStu() {
  const userStorage = sessionStorage.getItem("user-storage");

  let memId;
  if (userStorage) {
    try {
      const parsed = JSON.parse(userStorage);
      memId = parsed?.state?.user?.mem_id;
    } catch (e) {
      console.error("user-storage 파싱 실패", e);
    }
  }

  let url = "/api/lecDashStu/main";
  if (memId) url += `?memId=${memId}`;

  return axios.get(url); // baseURL 제거, 프록시 사용
}

export function getMailDash() {
  const userStorage = sessionStorage.getItem("user-storage");

  let memId;
  if (userStorage) {
    try {
      const parsed = JSON.parse(userStorage);
      memId = parsed?.state?.user?.mem_id;
    } catch (e) {
      console.error("user-storage 파싱 실패", e);
    }
  }

  let url = "/api/message/main";
  if (memId) url += `?memId=${memId}`;

  return axios.get(url); // baseURL 제거, 프록시 사용
}

export function getMailReceive() {
  const userStorage = sessionStorage.getItem("user-storage");

  let memId;
  if (userStorage) {
    try {
      const parsed = JSON.parse(userStorage);
      memId = parsed?.state?.user?.mem_id;
    } catch (e) {
      console.error("user-storage 파싱 실패", e);
    }
  }

  let url = "/api/message/receive";
  if (memId) url += `?memId=${memId}`;

  return axios.get(url); // baseURL 제거, 프록시 사용
}

export const updateMailReceiveLockToggle = async (mail_id) => {
  return axios.post("/api/message/toggleRLock", null, {params: {mail_id}})
};

export function getStudent(memId){
  return axios.get(`/api/student?memId=${memId}`)
}


export const getUserSession = () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) return { name: "", id: "", pictureUrl: "" };

    return {
      ...user,
      pictureUrl: user.mem_id 
        ? `http://localhost:80/campus/member/getPicture?id=${user.mem_id}`  //본인 포트번호에 맞게 변경
        : ""
    };    
} catch (err) {
    console.error("세션에서 사용자 정보를 가져오는데 실패:", err);
    return { name: "", id: "", pictureUrl: "/img/user1.png" };
  }
}; 