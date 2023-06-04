import { Controller, Post, Body, Req } from '@nestjs/common';
import { SessionService } from '../../application/services/session.service';
import { CreateSessionDto } from '../../application/dto/create-session.dto';
import { Request } from 'express';

@Controller('sessions')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post()
  async createSession(
    @Body() createSessionDto: CreateSessionDto,
    @Req() request: Request,
  ): Promise<void> {
    // Se obtiene el client_id del middleware
    const clientId = request['client_id'];
    // Se obtiene la cantidad de usuarios registrados
    const userCount = await this.sessionService.getUserCount();
    // Se asigna un nombre y apellido por defecto si no se envía en el body
    const firstName = createSessionDto.firstName || `User (${userCount + 1})`;
    const lastName = createSessionDto.lastName || `LastName (${userCount + 1})`;
    // Se crea la sesión
    await this.sessionService.createSession(clientId, firstName, lastName);
  }
}
