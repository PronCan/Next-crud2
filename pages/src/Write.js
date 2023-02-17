import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import axios from 'axios'

const Write = () => {
    function toDateFormat() {
        var date = new Date();
        var _year = date.getFullYear();
        var _month = (date.getMonth()+1)<10? '0'+(date.getMonth()+1):date.getMonth()+1;
        var _date = date.getDate();

        return [_year, _month, _date].join("-");
    }
    const router = useRouter();
    const idx = router.query.idx;

    const initial = {id: Date.now(), title: '', content: '', date: toDateFormat()}
    const [input, setInput] = useState(initial);

    function change(e) {
        var t = e.target;
        setInput((obj) => {
            return {...obj, [t.name]: t.value}
        })
    }

    function create(e) {
        e.preventDefault();
        axios.post('/api/hello', {...input, id: Date.now().toString()})
        router.push('/')
    }
  return (
    <div>
        <form onSubmit={create}>
            <h2>글쓰기</h2>
            <p><input onChange={change} type='text' placeholder='제목' name='title'></input></p>
            <p><input onChange={change} type='text' placeholder='내용' name='content'></input></p>
            <p><input type='submit' value='저장'></input></p>
        </form>
    </div>
  )
}

export default Write