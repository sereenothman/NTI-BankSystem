class user{
    constructor(fname, lname, age , email , id){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        this.email=email;
        this.id=id;
    }
    get fullname(){
        return `${this.fname} ${this.lname}`
    }
}
class Teacher extends user{
    static counter = 0;
    static instance=[];

    constructor(fName, lName, age, email, id=Date.now(), subjects=[]){
        super(fName, lName, age, email, id)
        this.subjects = subjects;
        Teacher.instance.push(this)

        Teacher.counter++;
    }
    getname(){
        return `name: ${this.fname} , last name:${this.lname}`
    }
    // show(){
    //     console.log("Teacher")
    // }
    addSubject(val){
        this.subjects.push(val);
    }
    
    static getCountOfTeacher(){
        return Teacher.counter;
    }
    get TeacherById(){
        return `ID :${this.id}`
    }
    static showteacher(){
        return Teacher.instance;
    }
    static getteacherById(idd){
        return Teacher.instance.find(item=>item.id===idd)
    }

}
class student extends user{
    static counter = 0;
    static instance=[];
    // studens=[];
    constructor(fname, lname, age, email,grade=[], id=Date.now()) {
        super(fname, lname,age,email, id);
        this.grade=grade;
        student.counter++;
        student.instance.push(this)
    }
    getname(){
        return `name: ${this.fname} , last name:${this.lname}`
    }
    addGrade(val){
        this.grade.push(val);
    }
    
    get _age(){
        return `age :${this.age}`
    }
    set _age(val){
        this.age=val;
    }
    static getCountOfStudent(){
        return student.counter;
    }
    get studentById(){
        return `ID :${this.id}`
    }
    static getstudentById(idd){
        return student.instance.find(item=>item.id===idd)
    }
    static showstudent(){
        return student.instance;
    }
}
var s1=new student("Ahmed", "Ali",16, 'sereen@yahoo',[12,88])
var s2=new student("Ahmed", "Ali",16, 'sereen@yahoo',[12,88])
var s3=new student("Ahmed", "Ali",16, 'sereen@yahoo',[12,88])
// var arr=[s1,s2,s3]
// arr.showstudent();
s1.addGrade(44);

// s1._age=22;
// s1.studentById;
// s1.fullname;
// console.log(s1);
console.log(student.getstudentById(1696446661182));
console.log(student.showstudent());