//firebase.js
import firebase from "firebase/app";
import "firebase/firestore";

// firebase 설정과 관련된 개인 정보
const firebaseConfig = {
  apiKey: "AIzaSyDcP1iFtftM2Ly7wE-r8XWXUZdE45OAnWY",
  authDomain: "my-awesome-project-c8235.firebaseapp.com",
  projectId: "my-awesome-project-c8235",
  storageBucket: "my-awesome-project-c8235.appspot.com",
  messagingSenderId: "396217903349",
  appId: "1:396217903349:web:c5c5563c7f99ada8b13dbc",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };
