import { AppService } from "../app.service";
export declare class HolaController {
    private readonly appService;
    constructor(appService: AppService);
    saludar(): {
        mensaje: string;
    };
    saludo(): {
        mensaje: string;
    };
}
