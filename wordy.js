const wordsToOperatorMap = {
    "minus": "-",
    "plus": "+",
    "multiplied by": "*",
}

const determineOperator = (question) => {
    const operatorAsWord = Object.keys(wordsToOperatorMap).find(word => {
      return question.includes(word)
    })

    return wordsToOperatorMap[operatorAsWord]
}

const extractNumbers = (question) => {
    const questionLackingQuestionMark = question.replace('?', '');
    const words = questionLackingQuestionMark.split(' ');

    const numericStrings = words.filter(word => {
      const isNumber = !isNaN(word)

      if (isNumber) {
          return true
      }
    })

    return numericStrings
}

export class WordProblem {
    constructor(question) {
        this.question = question;
    }

    answer() {
        const [firstInt, secondInt] = extractNumbers(this.question);

        const operator = determineOperator(this.question);
        return eval(`${firstInt} ${operator} ${secondInt}`);
    }

}
