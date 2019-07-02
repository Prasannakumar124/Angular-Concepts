export class LoggingService{
    loggingstatuschange(status:string){
        console.log('A server status changed, new status: ' + status);
    }
}