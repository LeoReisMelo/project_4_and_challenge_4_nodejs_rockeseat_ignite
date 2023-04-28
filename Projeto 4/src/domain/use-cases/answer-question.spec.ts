import { Answer } from '../entities/answers';
import { AnswerRepository } from '../repositories/answer-repository';
import { AnswerQuestionUseCase } from './answer-question'

const fakeAnswersRepository: AnswerRepository = {
    create: async (answer: Answer) => {
        return;
    }
}

test('create an answer', async () => {
    const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

    const answer = await answerQuestion.execute({
        questionId: '1',
        instructorId: '2',
        content: 'Nova resposta'
    })

    expect(answer.content).toEqual('Nova resposta')
})