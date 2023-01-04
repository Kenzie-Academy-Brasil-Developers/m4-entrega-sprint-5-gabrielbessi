import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameColumnUpdateAndCreateDate1672757584480 implements MigrationInterface {
    name = 'RenameColumnUpdateAndCreateDate1672757584480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "createdAt" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "updatedAt" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "updatedAt" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "createdAt" DROP DEFAULT`);
    }

}
