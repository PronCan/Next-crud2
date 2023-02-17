import React, {useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link';

const List = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const idx = useRef(1);

  function getData() {
    axios.get('/api/hello')
    .then(res => {
      setData(res.data);
    })
  }

  function delData(id) {
    axios.delete('/api/hello', {data: id});
    setData('');
  }

  useEffect(() => {
    getData();
  }, [])

  if(!data.length) 
  return (
    <>
      <article>
        <table className='list-table'>
          <thead>
            <tr>
              <th width="80%">제목</th>
              <th>작성일</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
          
          </tbody>
        </table>
      </article>
      <Link href='/src/Write' className='writeBtn'>글쓰기</Link>
    </>
  )
  return (
    <>
      <article>
        <table className='list-table'>
          <thead>
            <tr>
              <th width="80%">제목</th>
              <th>작성일</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((obj) => (
              <tr key={obj.id}>
                <td width='80%'>
                  <a className='tbody-content-title' onClick={() => router.push(
                    {
                      pathname: `/src/Content/`,
                      query: obj
                    }
                  )}>{obj.title}</a>
                </td>
                <td>{obj.date}</td>
                <td><button onClick={() => router.push({pathname: '/src/Update', query: obj})}>수정</button></td>
                <td><button onClick={() => delData(obj.id)}>삭제</button></td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </article>
      <Link href='/src/Write' className='writeBtn'>글쓰기</Link>
    </>
  )
}

export default List