import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('countries') // nombre real de la tabla en la base de datos
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', name: 'iso2', nullable: true })
  iso2: string;

  @Column({ type: 'text', name: 'iso3', nullable: true })
  iso3: string;

  @Column({ type: 'text', name: 'local_name', nullable: true })
  localName: string;

  @Column({ type: 'text', nullable: true })
  continent: string; // Asumiendo que `continent` también es text
}
