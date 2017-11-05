import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoggingService {
    constructor(private logger: NGXLogger) {
    }

    public debug(message: any) {
        this.logger.debug(message);
    }

    public info(message: any) {
        this.logger.info(message);
    }

    public warn(message: any) {
        this.logger.warn(message);
    }

    public error(message: any) {
        this.logger.error(message);
    }
}