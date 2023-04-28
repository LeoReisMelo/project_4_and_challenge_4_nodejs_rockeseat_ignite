import { Answer } from "../entities/answers";

export interface AnswerRepository {
    create(answer: Answer): Promise<void>
}