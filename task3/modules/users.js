import file from './file.js';
import isEmail from 'validator/lib/isEmail.js';
import chalk from 'chalk';
export default class users {
    static add(name, age, email) {
        try {
            if(!isEmail(email)) throw new Error("invalied email")
            const user = { id: Date.now(),name, age, email }
            const userall = file.read();

            const ind=userall.findIndex(u=>{u.name == name});
            if(ind != -1) throw new Error ('repeated name')

            userall.push(user);
             file.write(userall)
            console.log(chalk.green("added user"));


        } catch (error) {
            console.log(chalk.red(error.message));
        } 
    }
    static showAll(){
        const userall = file.read();
        if(userall.length==0)
        return console.log(chalk.red("No users yet"));
        userall.forEach(el => {
            console.log(chalk.green(`ID:${el.id},Name:${el.name},Age:${el.age},Email:${el.email}`));
        });
    }
    static single(id){
        const userall = file.read();
        const user=userall.find(el=>el.id==id);
        if(!user) return console.log(chalk.red("not found"));
        console.log(chalk.green(user.name));
    }
    static delete(id){
        const userall = file.read();
        const index=userall.findIndex(el=>el.id==id);
        userall.splice(index,1);
        file.write(userall)
        console.log(userall);
    }
    static edit(id,email){
        const userall = file.read();
        const user=userall.find(el=>el.id==id);
        user.email=email;
        file.write(userall);

    }
    
}