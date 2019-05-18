import {Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.send('FUNCIONANDO DESDE EL CONTROLADOR');
    }
}

const indexController = new IndexController();
export default indexController;