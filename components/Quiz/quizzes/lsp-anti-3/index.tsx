import { IQuiz } from '../IQuiz'

export const lspAnti3: IQuiz = {
  name: 'lsp-anti-3',
  question: 'В чём заключается суть и опасность «пустой» реализации интерфейса?',
  variants: [
    {
      text:
        '«Пустая» реализация исполняет требования интерфейса лишь формально и только для того, чтобы описываемая сущность не противоречила этому интерфейсу'
    },
    {
      text:
        '«Пустая» реализация позволяет встраивать сущности в структуру наследования без большого количества изменений, что делает структуру более гибкой',
      description: 'Как правило, подобные структуры со временем наоборот становятся хрупкими и неустойчивыми'
    },
    {
      text:
        '«Пустая» реализация создаёт иллюзию и ложные ожидания от описываемого метода, не даёт гарантий, что метод будет удовлетворять контракту или ожиданиям от него'
    },
    {
      text:
        '«Пустая» реализация — это необходимая издержка, с помощью которой можно построить структуру, удовлетворяющую принципу',
      description: 'Это может быть издержкой для построения структуры, соответствующей принципу, но она не необходима'
    }
  ],
  meta: {
    correctAnswers: [0, 2]
  }
}
