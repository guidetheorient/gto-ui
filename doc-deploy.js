const ghpages = require('gh-pages')

ghpages.publish(
  'docs/dist',
  {
    // 瓦特了，就 origin 无效，非要改成其他名称
    remote: 'github'
  },
  (e) => console.log(e)
)
