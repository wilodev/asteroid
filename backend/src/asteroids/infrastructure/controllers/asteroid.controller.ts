import {
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { Asteroid } from '../../domain/entities/asteroid.entity';
import { AsteroidService } from '../../application/services/asteroid.service';
import { ApiQuery } from '@nestjs/swagger';

@Controller('asteroids')
export class AsteroidController {
  constructor(private readonly asteroidService: AsteroidService) {}

  @Get('')
  @ApiQuery({ name: 'page', required: false, example: 1, type: Number })
  @ApiQuery({ name: 'start_date', required: false })
  @ApiQuery({ name: 'end_date', required: false })
  async getAsteroids(
    @Query('page', new DefaultValuePipe(1)) page: number,
    @Query('start_date') startDate?: string,
    @Query('end_date') endDate?: string,
  ): Promise<Asteroid[]> {
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    return this.asteroidService.findAllWithPagination(
      pageSize,
      skip,
      startDate,
      endDate,
    );
  }

  @Get(':id')
  async getAsteroidById(@Param('id') id: string): Promise<Asteroid> {
    return this.asteroidService.findById(id);
  }
}
