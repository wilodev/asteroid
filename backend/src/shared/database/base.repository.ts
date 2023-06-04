import { Repository, FindManyOptions, InsertResult } from 'typeorm';
import { MongoFindManyOptions } from 'typeorm/find-options/mongodb/MongoFindManyOptions';

export abstract class BaseRepository<T> extends Repository<T> {
  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.find(options);
  }

  async findById(id: any): Promise<T | undefined> {
    return this.findOne(id);
  }

  async findByDateRange(startDate: Date, endDate: Date): Promise<T[]> {
    return this.find({
      where: {
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      } as MongoFindManyOptions<T>['where'] as FindManyOptions<T>['where'],
    });
  }

  async insertEntity(entity: any): Promise<InsertResult> {
    return this.insert(entity);
  }
}
