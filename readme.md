# 1일차
## 진도
* 
## 키워드
### Next.js가 좋은 점 1 
* pages에 파일을 만들면 next가 알아서 라우팅을 해준다...
  * 파일이름이 url이 된다.
  * 서버 가동중에 페이지를 만들면 인식이 잘 안될 수도 있다..
  * url을 동적으로 바꾸고 싶다면.. (동적 라우팅 기능)
    * [name].js 로 파일이름을 만든다.
### Next.js에서는 react-router-dom 을 안쓴다..
* 자체적인 라우터가 있다.
  * import Link from "next/link"
### Next.js에는 React Hot Loader도 적용되어 있다.
### 개발모드에서는 조금 느릴 수 있다. 하지만 Product 모드에서는 문제가 해결된다.

# 2일차
## 진도
  * ~ 프로필 페이지 만들기
## 키워드
## 공통처리
### _app.js
* pages 공통인 것을 넣고 싶을 때
``` jsx
//pages/_app.js

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>노드버드</title>
      </Head>
      <Component />
    </>
  );
};
```

### AppLayout.js
* 특정 컴포넌트끼리 공통인 것을 넣고 싶을 때

## Head component 사용하기
* meta, title 등을 사용할 수 있다.

``` jsx
const Singup = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>노드버드 | 회원가입</title>
      </Head>
      <div>회원가입 페이지</div>
    </>
  );
};

```

## 반응형과 적응형
### 적응형 : 디바이스별로 각각의 스타일링이 존재
* 반응형 개발은 모바일부터 데스크탑웹 순으로 해야 효율적이다.
	* 브레이크 포인트 설정이 어렵다
    
## antd
### Grid (Row, Col)
* 가로부터 설정

# 팁
* a 태그에서 target="_blank"할 때는 반드시 rel="noreferrer noopener" 해야 보안 안전

# 로그인
# Container / Presenter
* Hook이 나온 이유, 잘 나누지 않는다.

# useCallback
* 함수를 캐싱함 -- 성능 최적화
* 컴포넌트에 Props로 넘겨주는 함수에는 반드시 써주세요..그래야 최적화가 된다.

# useMemo
* 값을 캐싱함 -- 성능 최적화
* 수업에서는 인라인 스타일링에서 객체를 넣었을 때 그 객체를 캐싱해서 성능을 최적화함

# 리렌더링
* 객체는 새로 생길 때마다 서로 다른것으로 인식한다. --> 이것을 원인으로 해서 리렌더링 한다.
* div 에 인라인 스타일링 할 때 {{}} 형태로 넣으면 안된다.

# Form / onFinish 
* e.preventDefault()가 자동으로 적용되어 있다.

# 배열에서 key
* 리액트 jsx 에서 배열을 쓸 때는 key를 props로 넣어줘야 한다.




# next_bird

