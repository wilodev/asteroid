import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Asteroid {
  @ObjectIdColumn()
  id: string;

  @Column()
  neoReferenceId: string;

  @Column()
  name: string;

  @Column()
  nasaJplUrl: string;

  @Column()
  absoluteMagnitudeH: number;

  @Column()
  estimatedDiameter: {
    kilometers: {
      estimatedDiameterMin: number;
      estimatedDiameterMax: number;
    };
    meters: {
      estimatedDiameterMin: number;
      estimatedDiameterMax: number;
    };
    miles: {
      estimatedDiameterMin: number;
      estimatedDiameterMax: number;
    };
    feet: {
      estimatedDiameterMin: number;
      estimatedDiameterMax: number;
    };
  };

  @Column()
  isPotentiallyHazardousAsteroid: boolean;

  @Column()
  closeApproachData: {
    closeApproachDate: string;
    closeApproachDateFull: string;
    epochDateCloseApproach: number;
    relativeVelocity: {
      kilometersPerSecond: string;
      kilometersPerHour: string;
      milesPerHour: string;
    };
    missDistance: {
      astronomical: string;
      lunar: string;
      kilometers: string;
      miles: string;
    };
    orbitingBody: string;
  }[];

  @Column()
  isSentryObject: boolean;
}
