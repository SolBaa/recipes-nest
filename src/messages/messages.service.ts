import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
@Injectable()
export class MessagesService {
    constructor(private messagesRepository: MessagesRepository) {}
    findAll() {
        return this.messagesRepository.findAll();
    }

    create(body: any) {
        return this.messagesRepository.create(body.content);
    }

    findOne(id: string) {
        
        return this.messagesRepository.findOne(id);
    }
}
