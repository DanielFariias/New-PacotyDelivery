import { createContext, useState } from 'react'

interface ContextPageProps {
  type?: string
  title?: string
  estabelecimentos?: any[]
  alterarType?: (newType: string) => void
  alterarTitle?: (newTitle: string) => void
  AlterarEstabelecimentos?: (newEstabelecimentos: any[]) => void
}

const ContextPage = createContext<ContextPageProps>({})

export const PageProvider = (props) => {
  const [title, setTitle] = useState('Farmacias')
  const [estabelecimentos, setEstabelecimentos] = useState([])
  const [type, setType] = useState('DrugStore')

  function alterarTitle(newTitle: string) {
    setTitle(newTitle)
  }
  function AlterarEstabelecimentos(newEstabelecimentos: any[]) {
    setEstabelecimentos(newEstabelecimentos)
  }
  function alterarType(newType: string) {
    setType(newType)
  }

  return (
    <ContextPage.Provider value={{
      type,
      title,
      estabelecimentos,
      alterarType,
      alterarTitle,
      AlterarEstabelecimentos,
    }}>
      {props.children}
    </ContextPage.Provider>
  )
}
export default ContextPage
export const DataConsumer = ContextPage.Consumer