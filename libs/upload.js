const formidable = require('formidable')

async function upload(request, path) {
  const contentType = request.get('Content-Type')

  if (contentType && !contentType.includes('multipart/form-data')) {
    return null;
  }

  const form = new formidable.Formidable({
    uploadDir: path,
    keepExtensions: true
  })
  const result = await form.parse(request)

  return result
}

module.exports = upload
