export class WordProblem {
    constructor(question) {
        this.question = question;
    }

    answer() {
        const [firstInt, secondInt] = this.extractNumbers();

        const operator = this.question.includes("plus") ? "+" : "-"
        return eval(`${firstInt} ${operator} ${secondInt}`);
    }

    extractNumbers() {
        const questionLackingQuestionMark = this.question.replace('?', '');
        const words = questionLackingQuestionMark.split(' ');
        const thirdFromLastWord = words[words.length - 3];
        const lastWord = words[words.length - 1];
        const firstInt = parseInt(thirdFromLastWord);
        const secondInt = parseInt(lastWord);
        return [firstInt, secondInt];
    }
}
