export default defineEventHandler(async (event) => {
  const { noticeIdx } = getQuery(event)
  console.log('/api/notice/detail, noticeIdx--', noticeIdx)

  let resObj: any = {}
  let apiUrl = 'http://localhost:3000/api/notice/detail'
  return $fetch(apiUrl, {
    params: {
      noticeIdx: noticeIdx
    }
  }).then((res: any = {}) => {
    resObj = res

    console.log('res,=========', res)
    console.log(apiUrl + '--', resObj)
    return {
      resData: `ssr기반 noticeIdx=${noticeIdx}, notice 상세조회 호출`,
      serverRes: resObj,
      result: {
        url: '/api/notice/detail',
        fileName: 'api/notice/detail.get.gs'
      }
    }
  })

  // return {
  //   resData: `ssr기반 noticeIdx=${noticeIdx}, notice 상세조회 호출`,
  //   result: {
  //     title: '공지제목',
  //     cont: '공지내용',
  //     url: '/api/notice/detail',
  //     fileName: 'api/notice/detail.get.gs'
  //   }
  // }
})
