
export default {
  routes: [
    {
      method: 'GET',
      path: '/courses/byname/:name',
      handler: 'course.getByName',
    }
  ]
}
