const formidable = require('formidable')

async function upload(request, path) {
  const form = new formidable.Formidable({
    uploadDir: path,
    keepExtensions: true
  })
  const result = await form.parse(request)

  let source;
  for (const [key, value] of Object.entries(result)) {
    console.log(`${key}: ${value}`);
  }
  

  return result
}

module.exports = upload
