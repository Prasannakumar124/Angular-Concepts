export class AuthService{
    loogedIn=false;
    isAuthendicated(){
            const promise =new Promise(
                (resolve,reject)=>{
                    setTimeout(()=>{
                        resolve(this.loogedIn);
                    },800)
                }
                )
                return promise;
    }

    login(){
        this.loogedIn=true;
    }
    logout(){
        this.loogedIn=false;
    }
}