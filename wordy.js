const determineOperator = (question) => {
    return question.includes("plus") ? "+" : "-";
}

const extractNumbers = (question) => {
    const questionLackingQuestionMark = question.replace('?', '');
    const words = questionLackingQuestionMark.split(' ');
    const thirdFromLastWord = words[words.length - 3];
    const lastWord = words[words.length - 1];
    const firstInt = parseInt(thirdFromLastWord);
    const secondInt = parseInt(lastWord);
    return [firstInt, secondInt];
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
