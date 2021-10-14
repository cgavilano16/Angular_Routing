import { Injectable } from "@angular/core";
@Injectable()
export class UserService{
    users = [
        { id:123, username:'bob', password:'bobpassword'},
        { id:567, username:'mike', password:'mikepassword'}
    ];
    findUserByCredentials(username:String, password:String){
        for (let i=0;i<this.users.length;i++)
        {
            const user = this.users[i];
            if(username===user.username&&password===user.password){
                return user;
            }
        }
        return null;
    }
}

