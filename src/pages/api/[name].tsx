import data from '../../data/Data'

export default function personHandler({ query: { name } }, res) {
  const filtered = data.filter(value => value.type === name)

  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res.status(404).json({ message: `User with id: ${name} not found.` })
  }
}