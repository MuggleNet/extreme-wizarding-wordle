import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `#WizardingWordleExtreme ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n\n` +
      generateEmojiGrid(guesses) +
      `\n\nPlay @MuggleNet's extreme Harry Potter Wordle: bit.ly/WizardingWordleExtreme`
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
