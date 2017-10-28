import { NgModule } from '@angular/core';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { NGXLogger } from 'ngx-logger';
import { LoggingService } from './logging.service';

@NgModule({
    imports: [
        LoggerModule.forRoot({
            serverLoggingUrl: '',
            serverLogLevel: NgxLoggerLevel.ERROR,
            level: NgxLoggerLevel.DEBUG
        })
    ],
    providers: [
        NGXLogger,
        LoggingService
    ]
})
export class LoggingModule {

}