import { DanceClassEntity } from "../entities/dance-class.entity";

export interface IClassRepository {
  getAllClasses(): Promise<DanceClassEntity[]>;
  getClassById(id: string): Promise<DanceClassEntity | null>;
}
