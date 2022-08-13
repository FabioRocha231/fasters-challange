import Image from 'next/image'

export enum SvgIcons {
  Calendar = '/svgs/calendar.svg',
  Clock = '/svgs/clock.svg',
  Diagram = '/svgs/diagram.svg',
  FasterLogo = '/svgs/faster-logo.svg',
  Logout = '/svgs/logout.svg',
  MenuBoard = '/svgs/menu-board.svg',
  Message = '/svgs/message.svg',
  NotificationBing = '/svgs/notification-bing.svg',
  People = '/svgs/people.svg',
  ProfileCircle = '/svgs/profile-circle.svg',
  Profile = '/svgs/profile.svg',
  Setting = '/svgs/setting.svg'
}

interface ISvgParams {
  name: SvgIcons
  width: number
  height: number
  alt: string
}

export default function Svg({ name, width, height, alt }: ISvgParams) {
  return <Image src={name} width={width} height={height} alt={alt} />
}
