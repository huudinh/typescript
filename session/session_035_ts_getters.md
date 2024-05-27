# TS35 Typescript Getters and Setters

Trong TypeScript, Getters và Setters là các phương thức cho phép bạn kiểm soát quyền truy cập vào các thuộc tính của một lớp

### Getter 

Còn được gọi là truy cập, là một phương thức trả về giá trị của thuộc tính. 

Phương thức getter bắt đầu với từ khóa get.

### Setter 

Còn được gọi là biến đổi, là một phương thức cập nhật giá trị của thuộc tính. 

Phương thức setter bắt đầu với từ khóa set.

### Ví dụ 

```
class Person {
    private _age: number;
    private _firstName: string;
    private _lastName: string;

    public get age() {
        return this._age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 200) {
            throw new Error('The age is invalid');
        }
        this._age = theAge;
    }

    public get firstName() {
        return this._firstName;
    }

    public set firstName(theFirstName: string) {
        if (!theFirstName) {
            throw new Error('Invalid first name.');
        }
        this._firstName = theFirstName;
    }

    public get lastName() {
        return this._lastName;
    }

    public set lastName(theLastName: string) {
        if (!theLastName) {
            throw new Error('Invalid last name.');
        }
        this._lastName = theLastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

Trong ví dụ trên, chúng ta tạo ra một lớp Person với các thuộc tính _age, _firstName, và _lastName. 

Chúng ta sử dụng các phương thức getter và setter để kiểm soát việc truy cập và cập nhật các giá trị của các thuộc tính này. 

Điều này giúp chúng ta đảm bảo rằng các giá trị được gán cho các thuộc tính này luôn hợp lệ


*Bài tiếp theo [TS36 TypeScript Inheritance](/session/session_036_ts_inheritance.md)*