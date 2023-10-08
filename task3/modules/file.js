import * as fs from 'node:fs';
export default class file{
    static read(fname="f.json"){
        let readf
        try {
            readf=JSON.parse(fs.readFileSync(fname))
        } catch (e) {
            readf=[]
        }
        return readf;
    }
    static write(data,fname="f.json"){
        const writef= fs.writeFileSync(  fname,JSON.stringify(data))
        // console.log(writef);
    }
}