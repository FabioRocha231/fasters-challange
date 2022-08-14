import { SvgIcons } from '@/atoms/Svg'

export const controlItems = [
  { name: 'Agenda', href: '/', icon: SvgIcons.Calendar },
  { name: 'Mensagens', href: '/', icon: SvgIcons.Message },
  { name: 'Relatorios', href: '/', icon: SvgIcons.Diagram }
]

export const userItems = [
  { name: 'Meus Eventos', href: '/', icon: SvgIcons.ProfileCircle },
  { name: 'Meu time', href: '/', icon: SvgIcons.People },
  { name: 'Minhas Atividades', href: '/', icon: SvgIcons.MenuBoard }
]

export const systemItems = [
  { name: 'Configurações', href: '/', icon: SvgIcons.Setting },
  { name: 'Sair', href: '/', icon: SvgIcons.Logout }
]

export interface Item {
  name: string
  href: string
  icon: SvgIcons
}
