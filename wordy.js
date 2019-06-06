const determineOperator = (question) => {
    return question.includes("plus") ? "+" : "-";
}

const extractNumbers = (question) => {
    const questionLackingQuestionMark = question.replace('?', '');
    const words = questionLackingQuestionMark.split(' ');
    const firstInt = words[words.length - 3];
    const lastInt = words[words.length - 1];
    return [firstInt, lastInt];
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
