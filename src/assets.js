import v from 'voca'

const assets = (path) => {
  let public_url = process.env.PUBLIC_URL

  if (v.first(path) === '/') return path

  if (v.last(public_url) !== '/') public_url = `${public_url}/`

  return [public_url, path].join('')
}

export default assets