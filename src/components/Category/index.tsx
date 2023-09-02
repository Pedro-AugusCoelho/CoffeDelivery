import * as C from './styles'

interface CategoryProps {
  label: string
}

export function Category({ label }: CategoryProps) {
  return <C.ContainerCategory>{label}</C.ContainerCategory>
}
