const ghpages = require('gh-pages')

ghpages.publish('docs/dist', {
  remote: 'origin'
})
