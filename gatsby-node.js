exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/$/)) { 
      page.layout = "HomeLayout"
      createPage(page)
    }
    
    resolve() 
  })
}