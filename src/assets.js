import first from 'voca/first.js'
import last from 'voca/last.js'

const assets = (path) => {
  let public_url = process.env.PUBLIC_URL

  if (first(path) === '/') return path

  if (last(public_url) !== '/') public_url = `${public_url}/`

  return [public_url, path].join('')
}

export default assets