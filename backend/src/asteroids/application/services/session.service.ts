import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from '../../domain/entities/session.entity';
import { SessionRepository } from '../../domain/repositories/session.repository';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: SessionRepository,
  ) {}

  async createSession(
    client: string,
    firstName: string,
    lastName: string,
  ): Promise<void> {
    const session = new Session();
    session.client = client;
    session.first_name = firstName;
    session.last_name = lastName;

    await this.sessionRepository.save(session);
  }

  async getUserCount(): Promise<number> {
    return this.sessionRepository.count();
  }
}
