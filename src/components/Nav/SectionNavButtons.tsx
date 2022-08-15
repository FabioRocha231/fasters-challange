import Svg, { SvgIcons } from '@/atoms/Svg'

export const SectionNavButtons: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <span className="ml-4 flex flex-row gap-x-4">
        <button className="flex items-center rounded-lg bg-search p-4 transition-colors hover:bg-navHover">
          <Svg
            name={SvgIcons.NotificationBing}
            width={24}
            height={24}
            alt="notifications"
          />
        </button>
        <button className="flex items-center rounded-lg bg-search p-4 transition-colors hover:bg-navHover">
          <Svg name={SvgIcons.Profile} width={24} height={24} alt="profile" />
        </button>
      </span>
    </>
  )
}
