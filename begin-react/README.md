# REACT STUDY

## JSX
### Babel 도구 사용
 - xml형태 코드가 자바스크립트 코드로 변환
 - http://babeljs.io/ 코드변환 확인 가능

### 태그는 꼭 닫아 주어야한다 (self closing tag)
    <div></div>
    <input />
    <br />
### 두개이상의 Tag는 꼭 하나의 Tag 감싸 있어야 한다.
    <div>
        <div></div>
        <div></div>
    </div>
    
### fragment tag 사용 불필요한 div tag를 사용하지 않을 수 있다
- "( )"괄호를 사용하여 tag level을 컨트롤 할 수 있다.(가독성을 위하여 사용)
```HTML
<>
    <div></div>
    <div></div>
</>
```
    

### 자바스크립트 값을 사용 하는 방법
- {}를 사용하용 {}안에 변수명을 사용한다
    const name = "react"
    <div>{name}</div>