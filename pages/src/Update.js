import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

const Update = () => {
    const router = useRouter();
    const {query} = router;

    // const init = {idx: 0, id: Date.now(), title: '', content: '', date: toDateFormat()}
    var initial = {
        id: query.id,
        title: query.title,
        content: query.content,
        date: query.date
    }

    const [input, setInput] = useState(initial);

    function change(e) {
        var t = e.target;
        setInput((obj) => {
            return {...obj, [t.name]: t.value}
        })
    }

    function create(e) {
        e.preventDefault();
        axios.put('/api/hello', {...input, id: query.id})
        router.push('/')
    }

  return (
    <div>
        <form onSubmit={create}>
            <h2>글쓰기</h2>
            <p><input value={input.title} onChange={change} type='text' placeholder='제목' name='title'></input></p>
            <p><input value={input.content} onChange={change} type='text' placeholder='내용' name='content'></input></p>
            <p><input type='submit' value='저장'></input></p>
        </form>
    </div>
  )
}

export default Update