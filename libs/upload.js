const formidable = require('formidable')

async function upload(request, path) {
  const form = new formidable.Formidable({
    uploadDir: path,
    keepExtensions: true
  })
  const result = await form.parse(request)

  return result
}

module.exports = upload
