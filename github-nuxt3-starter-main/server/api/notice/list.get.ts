export default defineEventHandler(async (event) => {
  const { page } = getQuery(event)
  return {
    resData: `ssr기반 page=${page}, notice list 호출`,
    result: {
      url: '/api/notice/list',
      fileName: 'api/notice/list.get.gs'
    }
  }
})
