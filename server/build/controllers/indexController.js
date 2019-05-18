"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('FUNCIONANDO DESDE EL CONTROLADOR');
    }
}
const indexController = new IndexController();
exports.default = indexController;
