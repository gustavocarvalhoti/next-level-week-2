import {Request, Response} from "express";
import db from "../database/connection";
import convertHourToMinutes from '../utils/convertHourToMinutes'

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

class ClassesController {

    async index(request: Request, response: Response) {
        const filters = request.query;
        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;
        let classes;

        if (!week_day || !subject || !time) {
            /*
            return response.status(400).json({
                error: 'Missing filters to search classes'
            })
            */

            classes = await db('classes')
                .whereExists(function () {
                    this.select('class_schedule.*')
                        .from('class_schedule')
                        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                })
                .join('users', 'classes.user_id', '=', 'users.id')
                .select(['classes.*', 'users.*']); // Exibir todos os campos das duas tabelas

            return response.json(classes);
        }

        const timeInMinutes = convertHourToMinutes(time);
        classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']); // Exibir todos os campos das duas tabelas

        return response.json(classes);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = request.body;

        const trx = await db.transaction();

        try {
            const insertedUsersIds = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
            const user_id = insertedUsersIds[0];

            const insertedClassesId = await trx('classes').insert({
                subject,
                cost,
                user_id
            });
            const class_id = insertedClassesId[0];


            const classSchedule = schedule.map((item: ScheduleItem) => {
                return {
                    class_id,
                    week_day: item.week_day,
                    to: convertHourToMinutes(item.to),
                    from: convertHourToMinutes(item.from)
                }
            });
            const insertedClassScheduleId = await trx('class_schedule').insert(classSchedule);

            // Somente aqui ele guarda no banco, se der erro em algum anterior ele faz rollback
            await trx.commit();

            // 201 - Criado com sucesso!
            return response.status(201).send();
        } catch (error) {
            await trx.rollback();
            console.log(error);
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            })
        }
    }
}

export default ClassesController;