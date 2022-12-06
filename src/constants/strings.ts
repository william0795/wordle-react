export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Gran Trabajo!', 'Asombroso', 'Bien hecho!']
export const GAME_COPIED_MESSAGE = ''
export const NOT_ENOUGH_LETTERS_MESSAGE = 'No hay suficientes letras'
export const WORD_NOT_FOUND_MESSAGE = 'Palabra no encontrada'
export const HARD_MODE_ALERT_MESSAGE = ''
export const HARD_MODE_DESCRIPTION =
  'Cualquier pista revelada debe usarse en conjeturas posteriores'
export const HIGH_CONTRAST_MODE_DESCRIPTION = ''
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `La palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Debe usar ${guess} en posición ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Supongo que debe contener ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Borrar'
export const STATISTICS_TITLE = 'Estadísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'SIGUIENTE PALABRA'
export const SHARE_TEXT = 'Share'
export const SHARE_FAILURE_TEXT = ''
export const MIGRATE_BUTTON_TEXT = ''
export const MIGRATE_DESCRIPTION_TEXT = ''
export const TOTAL_TRIES_TEXT = 'Jugadas'
export const SUCCESS_RATE_TEXT = ''
export const CURRENT_STREAK_TEXT = 'Victorias'
export const BEST_STREAK_TEXT = 'Mejor racha'
export const DISCOURAGE_INAPP_BROWSER_TEXT = ''

export const DATEPICKER_TITLE = 'C'
export const DATEPICKER_CHOOSE_TEXT = ''
export const DATEPICKER_TODAY_TEXT = ''
export const ARCHIVE_GAMEDATE_TEXT = ''
