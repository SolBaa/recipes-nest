import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, NotFoundException} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}
    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post() // Decorador que define el método POST para la ruta base /messages
    @UsePipes(ValidationPipe) // Decorador que aplica la validación de DTO a los datos del cuerpo de la solicitud
    createMessage(@Body() body: CreateMessageDto) {
        // Método para crear un nuevo mensaje

        return this.messagesService.create(body);
    }

    @Get(':id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if (!message) {
            throw new NotFoundException(`Message with ID ${id} not found`);
        }
        return message;
    }
}
