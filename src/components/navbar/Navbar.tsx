import { ChartBarIcon, QuestionMarkCircleIcon } from '@heroicons/react/outline'

import { GAME_TITLE } from '../../constants/strings'
import { SettingsToggle } from '../modals/SettingsToggle'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  isDarkMode: boolean
  handleDarkMode: Function
}
export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  isDarkMode,
  handleDarkMode,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5 short:h-auto">
        <div className="flex">
          <QuestionMarkCircleIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsInfoModalOpen(true)}
          />
        </div>
        <p className="text-xl font-bold dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartBarIcon
            className="mr-3 h-6 w-6 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <SettingsToggle
            settingName=""
            flag={isDarkMode}
            handleFlag={handleDarkMode}
          />
        </div>
      </div>
    </div>
  )
}
