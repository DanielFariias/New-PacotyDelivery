import { useEffect } from 'react'
import Layout from '../components/Layout'
import UsePageData from '../hooks/usePageData'

export default function Home(props) {
  const { title, estabelecimentos, AlterarEstabelecimentos, type } = UsePageData()



  useEffect(() => {
    async function FetchEstabelecimentos() {
      const resp = await fetch(`http://localhost:3000/api/${type}`)
      const data = await resp.json()
      AlterarEstabelecimentos(data)
    }
    FetchEstabelecimentos()
  }, [type])
  return (
    <Layout
      title={title}
      estabelecimentos={estabelecimentos}
    />
  )
}

