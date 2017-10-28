import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable()
export class LoggingService {
    constructor(private logger: NGXLogger) {
    }

    public debug(message: string) {
        this.logger.debug(message);
    }

    public info(message: string) {
        this.logger.info(message);
    }

    public warn(message: string) {
        this.logger.warn(message);
    }

    public error(message: string) {
        this.logger.error(message);
    }
}