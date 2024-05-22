# TS33 TypeScript Access Modifiers

Access modifiers (còn gọi là phạm vi truy cập) quản lý việc hiển thị và sử dụng các thuộc tính và phương thức của class. 

### Private

Access modifier private giới hạn việc truy cập chỉ trong cùng một class. Khi bạn đánh dấu một thuộc tính hoặc phương thức là private, nó chỉ có thể truy cập trong class đó. Bất kỳ cố gắng truy cập thuộc tính hoặc phương thức private từ bên ngoài class sẽ gây ra lỗi biên dịch. 

```
class Person {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

Bạn có thể truy cập thuộc tính ssn trong class Person, nhưng không thể từ bên ngoài class.

### Public

Theo mặc định, tất cả thành viên của một class đều là public. Các thuộc tính và phương thức public có thể truy cập từ bất kỳ vị trí nào. Ví dụ, phương thức getFullName() trong class Person mặc định là public

```
class Person {
    // ...

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
```

Việc thêm từ khóa public một cách rõ ràng cũng có hiệu quả tương tự.

### Protected

Access modifier protected cho phép thuộc tính và phương thức được truy cập trong cùng class và các lớp con (subclasses). Khi một class kế thừa từ một class khác, nó trở thành một lớp con. Cố gắng truy cập thuộc tính hoặc phương thức protected từ bất kỳ nơi nào khác sẽ gây ra lỗi biên dịch

```
class Person {
    protected ssn: string;
    // các mã khác...
}
```

Thuộc tính ssn bây giờ là protected và có thể truy cập trong class Person và bất kỳ class nào kế thừa từ nó.


*Bài tiếp theo [TS34 TypeScript readonly](/session/session_034_ts_readonly.md)*