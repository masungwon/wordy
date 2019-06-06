const wordsToOperatorMap = {
    "minus": "-",
    "plus": "+",
		"multiplied by": "*",
		"divided by": '/'
}

const determineOperator = (question) => {
    const operatorAsWord = Object.keys(wordsToOperatorMap).find(word => {
      return question.includes(word)
    })

    return wordsToOperatorMap[operatorAsWord]
}

const extractNumericStrings = (question) => {
    const questionLackingQuestionMark = question.replace('?', '');
    const words = questionLackingQuestionMark.split(' ');

    const numericStrings = words.filter(word => {
        const isNumber = !isNaN(word)
        return isNumber;
    });

    return numericStrings;
}

export class WordProblem {
    constructor(question) {
        this.question = question;
    }

    answer() {
        const [firstInt, secondInt] = extractNumericStrings(this.question);

        const operator = determineOperator(this.question);
        return eval(`${firstInt} ${operator} ${secondInt}`);
    }

}
