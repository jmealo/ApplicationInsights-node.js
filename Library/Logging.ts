import { createClientLogger } from "@azure/logger";

class Logging {
    public static enableDebug = false;
    public static disableWarnings = false;
    public static disableErrors = false;
    public static logger = createClientLogger('ApplicationInsights');

    public static debug(message?: any, ...optionalParams: any[]) {
        if(Logging.enableDebug) {
            this.logger.verbose(message, optionalParams);
        }
    }

    public static info(message?: any, ...optionalParams: any[]) {
        this.logger.info(message, optionalParams);
    }

    public static warn(message?: any, ...optionalParams: any[]) {
        if(!Logging.disableWarnings) {
            this.logger.warning( message, optionalParams);
        }
    }

    public static error(message?: any, ...optionalParams: any[]) {
        if(!Logging.disableErrors) {
            this.logger.error(message, optionalParams);
        }
    }
}

export = Logging
