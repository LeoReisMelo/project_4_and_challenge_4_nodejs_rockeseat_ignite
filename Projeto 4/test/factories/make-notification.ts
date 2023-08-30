/* eslint-disable prettier/prettier */
import { faker } from "@faker-js/faker";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import {
  Question,
  QuestionProps,
} from "@/domain/forum/enterprise/entities/question";
import {
  Notification,
  NotificationProps,
} from "@/domain/notification/enterprise/entities/notification";

export function makeNotification(
  override: Partial<NotificationProps> = {},
  id?: UniqueEntityID
) {
  const notification = Notification.create(
    {
      title: faker.lorem.sentence(4),
      recipientId: new UniqueEntityID(),
      content: faker.lorem.sentence(10),
      ...override,
    },
    id
  );

  return notification;
}
