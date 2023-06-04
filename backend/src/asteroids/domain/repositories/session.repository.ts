import { EntityRepository, FindManyOptions, Repository } from 'typeorm';
import { Session } from '../entities/session.entity';

@EntityRepository(Session)
export class SessionRepository extends Repository<Session> {
  async findByClientId(clientId: string): Promise<Session | undefined> {
    return this.findOne({ where: { client: clientId } });
  }

  async updateSession(session: Session): Promise<Session> {
    return this.save(session);
  }

  async createSession(session: Session): Promise<Session> {
    return this.save(session);
  }

  async deleteSession(session: Session): Promise<void> {
    await this.remove(session);
  }
}
