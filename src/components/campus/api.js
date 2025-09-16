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




// ------------------------------------------

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

export function getMailReceive(page = 1, filter = "", keyword = "") {
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

  const params = new URLSearchParams({
    memId, page, keyword, perPageNum: 10
  });

  if (filter) {
    params.append("filter", filter);
  }

  let url = `/api/message/receive?${params.toString()}`;

  return axios.get(url); // baseURL 제거, 프록시 사용
}

export function getMailSend(page = 1, filter = "", keyword = "") {
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

  const params = new URLSearchParams({
    memId, page, keyword, perPageNum: 10
  });

  if (filter) {
    params.append("filter", filter);
  }

  let url = `/api/message/send?${params.toString()}`;

  return axios.get(url); // baseURL 제거, 프록시 사용
}

export function getMailWaste(page = 1, keyword = "") {
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

  const params = new URLSearchParams({
    memId, page, keyword, perPageNum: 10
  });


  let url = `/api/message/waste?${params.toString()}`;

  return axios.get(url); // baseURL 제거, 프록시 사용
}

export function getMailDetail(mail_id, memId) {
  const userStorage = sessionStorage.getItem("user-storage");

  if (userStorage) {
    try {
      const parsed = JSON.parse(userStorage);
      memId = parsed?.state?.user?.mem_id;
    } catch (e) {
      console.error("user-storage 파싱 실패", e);
    }
  }

  const params = new URLSearchParams({
    memId, mail_id
  });


  let url = `/api/message/detail?${params.toString()}`;

  return axios.get(url); // baseURL 제거, 프록시 사용
}

export const registMail = async(formData) => {
  return axios.post("/api/message/regist",formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};


export const updateMailSnedLockToggle = async (mail_id) => {
  return axios.post("/api/message/toggleSLock", null, { params: { mail_id } })
};

export const updateMailSendImpToggle = async (mail_id) => {
  return axios.post("/api/message/toggleSImp", null, { params: { mail_id } })
};

export const updateMailReceiveLockToggle = async (mail_id) => {
  return axios.post("/api/message/toggleRLock", null, { params: { mail_id } })
};

export const updateMailReceiveImpToggle = async (mail_id) => {
  return axios.post("/api/message/toggleRImp", null, { params: { mail_id } })
};

export const updateMailWaste = async (mail_id) => {
  return axios.post("/api/message/movewaste", null, { params: { mail_id } })
};

export const updateMailDetailWaste = async (mail_id) => {
  return axios.post("/api/message/movewaste/detail", null, { params: { mail_id } })
};

export const updateMailWasteBack = async (mail_id) => {
  return axios.post("/api/message/backwaste", null, { params: { mail_id } })
};

export const deleteMail = async (mail_id) => {
  return axios.post("/api/message/delete", null, { params: { mail_id } })
};

export const deleteMailAll = async () => {
  return axios.post("/api/message/allWaste")
};


// ------------------------------------------



export function getStudent(memId) {
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