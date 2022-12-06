/* eslint-disable no-restricted-globals */
import { ClockIcon } from '@heroicons/react/outline'
import { format } from 'date-fns'
import { addMinutes } from 'date-fns'
import Countdown from 'react-countdown'

import { DATE_LOCALE, ENABLE_ARCHIVED_GAMES } from '../../constants/settings'
import {
  ARCHIVE_GAMEDATE_TEXT,
  NEW_WORD_TEXT,
  STATISTICS_TITLE,
} from '../../constants/strings'
import { GameStats } from '../../lib/localStorage'
import { solutionGameDate } from '../../lib/words'
import { StatBar } from '../stats/StatBar'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isLatestGame: boolean
  isGameLost: boolean
  isGameWon: boolean
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isLatestGame,
  isGameLost,
  isGameWon,
  isHardMode,
  isDarkMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
        <div className="button-modal">
          <button
            onClick={() => handleClose()}
            tabIndex={0}
            aria-pressed="false"
            className="btn-info"
          >
            Aceptar
          </button>
        </div>
      </BaseModal>
    )
  }
  const reset = () => {
    console.log('ejecuta reset')
    setTimeout(() => {
      location.reload()
    }, 1000 * 60 * 5)
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 items-center justify-center text-center dark:text-white sm:mt-6">
          <div className="inline-block w-full text-left">
            {(!ENABLE_ARCHIVED_GAMES || isLatestGame) && (
              <>
                <div className="textStaus mb-3">
                  {reset()}
                  <h5 className="mb-2">
                    La palabra era <strong>{solution}</strong>
                  </h5>
                </div>
                <div className="text-center">
                  <h5>{NEW_WORD_TEXT}</h5>
                  <Countdown
                    className="text-lg font-medium text-gray-900 dark:text-gray-100"
                    date={addMinutes(new Date(), 5)}
                    daysInHours={true}
                  />
                </div>
              </>
            )}
            {ENABLE_ARCHIVED_GAMES && !isLatestGame && (
              <div className="mt-2 inline-flex">
                <ClockIcon className="mr-1 mt-2 mt-1 h-5 w-5 stroke-black dark:stroke-white" />
                <div className="mt-1 ml-1 text-center text-sm sm:text-base">
                  <strong>{ARCHIVE_GAMEDATE_TEXT}:</strong>
                  <br />
                  {format(solutionGameDate, 'd MMMM yyyy', {
                    locale: DATE_LOCALE,
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="button-modal">
        <button
          onClick={() => handleClose()}
          tabIndex={0}
          aria-pressed="false"
          className="btn-info"
        >
          Aceptar
        </button>
      </div>
    </BaseModal>
  )
}
