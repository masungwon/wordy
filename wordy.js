export class WordProblem {
    constructor(question) {
        this.question = question;
    }

    answer() {
        const questionLackingQuestionMark = this.question.replace('?', '');
        const arrayOfWords = questionLackingQuestionMark.split(' ');
        const val1Str = arrayOfWords[arrayOfWords.length - 3];
        const val2Str = arrayOfWords[arrayOfWords.length - 1];
        const val1 = parseInt(val1Str);
        const val2 = parseInt(val2Str);
        return val1 + val2;
    }
}
