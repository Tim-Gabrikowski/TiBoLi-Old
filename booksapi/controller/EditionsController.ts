import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import editionsService from '../service/EditionsService';

class EditionsController {

    async putByIdAction(req: Request, res: Response, next: NextFunction) {
        // in future: check that edition belongs to book
        // const bookId: number = Number(req.params.bookId);
        const id = Number(req.params.id);
        const editionData = req.body;
        const result = await editionsService.update(id, editionData);
        if (result) {
            res.status(200);
            res.json(editionData);

        } else {
            next(createError(404));
        }
    }

    async postAction(req: Request, res: Response, next: NextFunction) {
        const bookId: number = Number(req.params.bookId);
        const editionData = req.body;
        editionData.book_id = bookId;
        const edition = await editionsService.create(editionData);
        res.status(201).json(edition);
    }

    async deleteAction(req: Request, res: Response, next: NextFunction) {

        try {
            // in future: check that edition belongs to book
            // const bookId: number = Number(req.params.bookId);
            const id = Number(req.params.id);
            const result = await editionsService.delete(id);
            res.sendStatus(204);
        } catch (error) {
            next(createError(404));
        }
    }
}

const editionsController = new EditionsController();
export default editionsController;
