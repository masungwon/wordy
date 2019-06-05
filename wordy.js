export class WordProblem {
    constructor(question) {
        this.question = question;
    }

    answer() {
        const questionLackingQuestionMark = this.question.replace('?', '');
        const words = questionLackingQuestionMark.split(' ');
        const thirdFromLastWord = words[words.length - 3];
        const lastWord = words[words.length - 1];
        const firstInt = parseInt(thirdFromLastWord);
        const secondInt = parseInt(lastWord);
        return firstInt + secondInt;
    }
}
