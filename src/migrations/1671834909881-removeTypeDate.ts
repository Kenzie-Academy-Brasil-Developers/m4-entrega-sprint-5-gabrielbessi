import { MigrationInterface, QueryRunner } from "typeorm";

export class removeTypeDate1671834909881 implements MigrationInterface {
    name = 'removeTypeDate1671834909881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "updatedAt" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "updatedAt" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "createdAt" date NOT NULL`);
    }

}
