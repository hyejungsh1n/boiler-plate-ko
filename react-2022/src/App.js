import './App.css';
import { useState } from 'react'

function Header(props) {
  // console.log("props", props, "이건 왜 출력 안 돼?", props.title)
  return     <header>
  <h1><a href="/" onClick={(event) =>{
    event.preventDefault();
    props.onChangeMode();
  }}>{ props.title }</a></h1>
</header>
}

function Nav(props) {
  const lis = []
  for (let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{ // 태그안으로 넘기면 문자열이 됨.
        event.preventDefault();
        props.onChangeMode(Number(event.target.id)); // 문자를 숫자로 convert
        // let et = event.target.id
        // console.log("et is", et)
      }}>
        {t.title}</a>
        </li>)
  }
  return <nav>
      <ol>
        {lis}
    </ol>
  </nav>
}

function Article(props) {
  //하드 코딩 처리하기
  return  <article>

  <h2>{props.title}</h2>
  {props.body}
</article>
}


// CREATE

function Create(props) {
  return <article>
    <h2>Create</h2>
    <form onSubmit={event=> {
      event.preventDefault();
      const title = event.target.title.value; //이벤트가 발생한 태그
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p> <input type="text" name="title" placeholder="title"></input> </p>
      <p><textarea name="body" placeholder="title"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
    </form>
  </article>
}



// UPDATE 


function Update(props) {

 // state로 제목과 내용 상태 관리
  const [title, setTitle] = useState(props.title);
  // 위와 같이 이번엔 내용
  const [body, setBody] = useState(props.body); 

  return <article>
  <h2>Update</h2>
  <form onSubmit={event=> {
    event.preventDefault();
    const title = event.target.title.value; //이벤트가 발생한 태그
    const body = event.target.body.value;
    props.onUpdate(title, body);
  }}>
    <p> <input type="text" name="title" placeholder="title" value={title} onChange={event=> {
      setTitle(event.target.value)
    }}></input> </p> {/* value 값 추가 */}
    <p><textarea name="body" placeholder="body" value={body} onChange={event=>
      setBody(event.target.value)
    }></textarea></p>
    <p><input type="submit" value="Update"></input></p>
  </form>
</article>
}




// APP

function App() {
  const [mode, setMode] = useState('WELCOME')
  const [id, setId] = useState(null); // 어떤 글을 선택했는지 state를 만들어줌. 
  const [title, SetTitle] = useState('title')
  const [body, SetBody] = useState('body')
  const [nextId, SetNextId] = useState(4);
    const [topics, setTopics] = useState([
      {id : 1, title: 'html', body: 'html is 1...'},
      {id : 2, title: 'css', body: 'css is ...'},
      {id : 3, title: 'javascript', body: 'javascript is ...'},

    ])
    let content = null;
    let contextControl = null;


    if (mode === 'WELCOME') {
      content = <Article title="hello, my house" body="go the the bed"></Article>
    } else if (mode === 'READ') {
      let title, body = null; // 초기값은 null (선택되지 않았기 때문에)
      // topics에 있는 값중에 우리가 선택한 id와 일치하는 원소를 찾아서 그것을 title과 body의 값으로 세팅해준다
      for(let i = 0; i<topics.length; i++) {
        console.log(topics[i].id, id)
        if(topics[i].id === id) { // topics의 값과 클릭한 id가 일치할 때.
          title = topics[i].title;
          body = topics[i].body;
        }
      } 
      content = <Article title={title} body={body}></Article>

      contextControl = <> 
      <li><a href={'/update/' + id} onClick={event=> {
        event.preventDefault()
        setMode('UPDATE')
      }}>Update</a></li>
      <li>
        <input type="button" value="Delete" onClick={()=>{

          const newTopics = [];
          
          for(let i = 0; i < topics.length; i++ ) {

            if(topics[i].id !== id) {

              console.log("topics.length : ", topics.length)
              console.log("topics[i].id:", topics[i].id)
              console.log("this is id", id )
              newTopics.push(topics[i]);
              console.log("new Topics", newTopics)
            }
          }
          setTopics(newTopics)
          setMode('WELCOME')
        }} />
      </li>
      </>

    } else if (mode === 'CREATE') {
      console.log("여기까지 들어옴?")
      content = <Create onCreate={(_title, _body)=>{
        const newTopic = {id: nextId, title: _title, body: _body} // 그 안에 있는 것들
        const newTopics = [...topics] // topics를 배열에 복제. topic의 구조를 보면 배열안에 객체가 들어간 것을 볼 수 있다. 
        newTopics.push(newTopic); // 배열안에 객체를 push
        setMode('READ')
        setTopics(newTopics); 
        SetNextId(nextId+1)
        console.log("nextId,", nextId)
      }}></Create>



    } else if (mode === 'UPDATE') {
      console.log("update. hello")
      let title, body = null; // 초기값은 null (선택되지 않았기 때문에)
      // topics에 있는 값중에 우리가 선택한 id와 일치하는 원소를 찾아서 그것을 title과 body의 값으로 세팅해준다
      for(let i = 0; i<topics.length; i++) {
        console.log(topics[i].id, id)
        if(topics[i].id === id) { // topics의 값과 클릭한 id가 일치할 때.
          title = topics[i].title;
          body = topics[i].body; 
        }
      }

      content = <Update title={title} body={body}  onUpdate={(title, body)=>{
        console.log(title, body)

        const newTopics = [...topics]
        const updatedTopic = {id : id, title:title, body:body}
        for(let i = 0; i < newTopics.length; i++) {
          if(newTopics[i].id === id) {
            newTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics(newTopics);
        setMode('READ');

      }}></Update>
    }
  
  
    return (
    <div>
      <Header title="I want to go home" onChangeMode={()=> {
        setMode('WELCOME')
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=> {
        setMode('READ')
        setId(_id);
      }}></Nav>
      { content }
      <ul>
        <li><a href="/create" onClick={event=> {
        event.preventDefault();
        setMode('CREATE')
      }}>Create</a></li>
      {/* <li><a href="/update" onClick={event => {
        event.preventDefault();
        setMode('UPDATE')
      }}>Update</a></li> */}
      {contextControl}
      </ul>
    </div>
  );
}

export default App;
