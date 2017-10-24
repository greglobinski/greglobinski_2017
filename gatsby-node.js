exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/$/)) { 
      page.layout = "Home"
      createPage(page)
    }
    
    resolve()
  })
}